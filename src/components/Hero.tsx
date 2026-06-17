"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE = 1800;

export default function Hero() {
  const { roles } = personalInfo;
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!isErasing && charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }
    if (!isErasing && charIndex === currentRole.length) {
      const t = setTimeout(() => setIsErasing(true), PAUSE);
      return () => clearTimeout(t);
    }
    if (isErasing && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, ERASE_SPEED);
      return () => clearTimeout(t);
    }
    if (isErasing && charIndex === 0) {
      setIsErasing(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
  }, [charIndex, isErasing, roleIndex, roles]);

  const socialLinks = [
    { href: personalInfo.github, icon: FaGithub, label: "GitHub" },
    { href: personalInfo.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[180px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Work — Remote &amp; Relocation
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-text-main">Saikiran </span>
            <span className="text-accent glow-blue">Rudra</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-10 flex items-center mb-8"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-mono text-text-muted">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Objective */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="max-w-lg text-text-muted text-base leading-relaxed mb-10"
          >
            {personalInfo.objective}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-accent/40 text-accent font-semibold text-sm hover:bg-accent/10 transition-all duration-300"
            >
              Download Resume <ExternalLink size={14} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-text-main font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center lg:justify-start gap-5"
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                className={cn("text-text-muted hover:text-accent transition-colors duration-200")}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-accent/15 blur-2xl animate-pulse" />
            {/* Rotating gradient border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-indigo to-accent opacity-50 blur-sm" />
            {/* Image container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent/40">
              <Image
                src="/profile.png"
                alt="Saikiran Rudra"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 glass-card rounded-2xl px-4 py-2.5 border border-accent/20 shadow-blue"
            >
              <p className="text-xs text-text-muted font-mono">currently</p>
              <p className="text-sm font-bold text-accent">@ TechSonance</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
