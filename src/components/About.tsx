"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const stats = [
  { value: "6mo", label: "Internship Experience" },
  { value: "3", label: "Shipped Projects" },
  { value: "4", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            01 — About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Who I am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — Bio */}
          <div className="space-y-6">
            {personalInfo.bio.map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-text-muted text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Contact info */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-4 space-y-3"
            >
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent transition-colors link-underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 pt-2"
            >
              {[
                { href: personalInfo.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: personalInfo.github, icon: FaGithub, label: "GitHub" },
                { href: personalInfo.portfolio, icon: ExternalLink, label: "Portfolio" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-200"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats + decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-card rounded-2xl p-6 text-center gradient-border"
                >
                  <span className="block text-3xl font-bold text-accent glow-blue mb-1">
                    {value}
                  </span>
                  <span className="text-text-muted text-xs leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative code card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-secondary/40">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-text-muted font-mono">developer.ts</span>
              </div>
              <div className="p-5 font-mono text-sm leading-loose">
                {[
                  { key: "name", val: `"Saikiran Rudra"`, color: "text-orange-400" },
                  { key: "role", val: `"Full-Stack → AI Engineer"`, color: "text-green-400" },
                  { key: "stack", val: `["Next.js", "Node", "AI"]`, color: "text-blue-400" },
                  { key: "openToWork", val: "true", color: "text-purple-400" },
                ].map(({ key, val, color }) => (
                  <div key={key}>
                    <span className="text-text-muted">  </span>
                    <span className="text-accent-light">{key}</span>
                    <span className="text-text-muted">: </span>
                    <span className={color}>{val}</span>
                    <span className="text-text-muted">,</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
