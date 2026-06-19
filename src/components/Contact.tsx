"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Mail, Copy, Check, ExternalLink, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────
interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Validators ────────────────────────────────────────────────
const validators = {
  name: (v: string): string | undefined => {
    if (!v.trim()) return "Name is required.";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "Name can only contain letters and spaces.";
    if (v.trim().length < 2) return "Name must be at least 2 characters.";
    if (v.trim().length > 50) return "Name must be under 50 characters.";
  },
  email: (v: string): string | undefined => {
    if (!v.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
  },
  message: (v: string): string | undefined => {
    if (!v.trim()) return "Message is required.";
    if (v.trim().length < 10) return `Message must be at least 10 characters. (${v.trim().length}/10)`;
    if (v.trim().length > 100) return "Message must be under 100 characters.";
  },
};

// ── Toast ─────────────────────────────────────────────────────
function Toast({ status }: { status: SubmitStatus }) {
  if (status === "idle" || status === "loading") return null;
  const isSuccess = status === "success";
  return (
    <AnimatePresence>
      <motion.div
        key={status}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className={cn(
          "fixed bottom-8 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border text-sm font-medium max-w-sm",
          isSuccess
            ? "bg-green-500/10 border-green-500/30 text-green-400"
            : "bg-red-500/10 border-red-500/30 text-red-400"
        )}
      >
        {isSuccess ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
        {isSuccess
          ? "Message sent! I'll get back to you soon 🙌"
          : "Something went wrong. Please email me directly."}
      </motion.div>
    </AnimatePresence>
  );
}

// ── Field ─────────────────────────────────────────────────────
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-text-muted text-sm font-medium">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-red-400 text-xs font-medium"
          >
            <AlertCircle size={12} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateField = useCallback(
    (field: keyof FormFields, value: string): string | undefined =>
      validators[field](value),
    []
  );

  const handleChange = (field: keyof FormFields, value: string) => {
    setFields((f) => ({ ...f, [field]: value }));
    // Clear error as user types if field was already touched
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((e) => ({ ...e, [field]: err }));
    }
  };

  const handleBlur = (field: keyof FormFields) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const err = validateField(field, fields[field]);
    setErrors((e) => ({ ...e, [field]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField("name", fields.name),
      email: validateField("email", fields.email),
      message: validateField("message", fields.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (newErrors.name || newErrors.email || newErrors.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
        setErrors({});
        setTouched({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const msgLength = fields.message.trim().length;
  const inputBase =
    "w-full bg-secondary/40 border rounded-xl px-4 py-3 text-text-main text-sm placeholder-text-muted/40 outline-none transition-colors duration-200";

  const socialLinks = [
    { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin, text: "linkedin.com/in/saikiran-rudra" },
    { label: "GitHub", href: personalInfo.github, icon: FaGithub, text: "github.com/Saikiran-Rudra" },
    { label: "Portfolio", href: personalInfo.portfolio, icon: ExternalLink, text: "saikiran-rudra-portfolio.vercel.app" },
  ];

  return (
    <>
      <Toast status={status} />
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
              07 — Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-text-muted text-base max-w-md mx-auto">
              Open to full-time roles, internships, freelance work, and collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work — Remote &amp; Relocation
              </div>

              {/* Email copy */}
              <div className="glass-card rounded-2xl p-5 border border-accent/10">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={15} className="text-accent" />
                  <span className="text-text-muted text-xs font-medium uppercase tracking-wide">Email</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-main font-mono text-sm">{personalInfo.email}</span>
                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Copy email"
                    className="ml-3 p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </motion.button>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                {socialLinks.map(({ label, href, icon: Icon, text }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-text-main text-sm font-medium">{label}</p>
                      <p className="text-text-muted text-xs font-mono">{text}</p>
                    </div>
                    <ExternalLink size={13} className="ml-auto text-text-muted group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-2xl p-8 border border-accent/10 space-y-5"
            >
              {/* Name */}
              <Field id="contact-name" label="Name" error={errors.name}>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  value={fields.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  maxLength={50}
                  className={cn(
                    inputBase,
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/8 focus:border-accent/40"
                  )}
                />
              </Field>

              {/* Email */}
              <Field id="contact-email" label="Email" error={errors.email}>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={fields.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={cn(
                    inputBase,
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/8 focus:border-accent/40"
                  )}
                />
              </Field>

              {/* Message */}
              <Field id="contact-message" label="Message" error={errors.message}>
                <textarea
                  id="contact-message"
                  placeholder="Hi Saikiran, I'd like to talk about..."
                  rows={5}
                  value={fields.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  maxLength={100}
                  className={cn(
                    inputBase,
                    "resize-none",
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/8 focus:border-accent/40"
                  )}
                />
                {/* Character count */}
                <div className="flex justify-end">
                  <span className={cn(
                    "text-xs font-mono",
                    msgLength > 100 ? "text-red-400" :
                    msgLength >= 10 ? "text-green-400" : "text-text-muted"
                  )}>
                    {msgLength} / 100
                  </span>
                </div>
              </Field>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.02, boxShadow: "0 0 25px rgba(59,130,246,0.35)" } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className={cn(
                  "w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300",
                  status === "loading"
                    ? "bg-accent/50 text-white/70 cursor-not-allowed"
                    : "bg-accent text-white hover:bg-accent/90 cursor-pointer"
                )}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
