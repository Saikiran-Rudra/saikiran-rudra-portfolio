"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink, GraduationCap, Briefcase, Award, Sparkles } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const timelineSteps = [
  {
    id: "foundation",
    stage: "Foundation",
    title: "Frontend Development",
    details: "React.js • UI/UX • Computer Engineering",
    icon: GraduationCap,
    active: false,
  },
  {
    id: "internship",
    stage: "Internship",
    title: "Full-Stack Development",
    details: "Backend • Databases • APIs • Deployment",
    icon: Briefcase,
    active: false,
  },
  {
    id: "product",
    stage: "Product",
    title: "Shipped GST Billing ERP",
    details: "Live Product • Real Businesses • End-to-End Ownership",
    icon: Award,
    active: false,
    badge: "Live Product",
  },
  {
    id: "today",
    stage: "Today",
    title: "AI-Powered Products",
    details: "LLMs • Automation • Full-Stack Engineering",
    icon: Sparkles,
    active: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            01 —  MY JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Building Products, Not Just Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Bio */}
          <div className="space-y-6 lg:col-span-3">
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
            className="w-full lg:col-span-2"
          >
            {/* Clean Vertical Timeline (Borderless & Compact) */}
            <div className="relative pl-12 pr-2 py-2">
              {/* Vertical line background */}
              <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-white/5" />
              
              {/* Animated scroll line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "calc(100% - 48px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-[19px] top-6 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-400 origin-top"
              />

              <div className="space-y-8">
                {timelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative group flex items-start"
                    >
                      {/* Node Dot */}
                      <div className="absolute left-[-48px] top-0.5 z-10 flex items-center justify-center">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500",
                          step.active 
                            ? "bg-accent/15 border-accent text-accent shadow-[0_0_15px_rgba(59,130,246,0.4)] scale-105" 
                            : "bg-[#050816] border-white/10 text-text-muted group-hover:border-accent/40 group-hover:text-accent-light"
                        )}>
                          <Icon size={16} className={step.active ? "animate-pulse" : ""} />
                        </div>
                      </div>

                      {/* Timeline Text Content */}
                      <div className="flex-1 min-w-0 pl-2">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={cn(
                            "text-[10px] font-mono font-bold tracking-wider uppercase",
                            step.active ? "text-accent-light" : "text-text-muted"
                          )}>
                            {step.stage}
                          </span>
                          
                          {step.badge && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 animate-pulse">
                              {step.badge}
                            </span>
                          )}
                        </div>

                        <h3 className={cn(
                          "font-bold text-base tracking-tight mb-0.5",
                          step.active ? "text-text-main" : "text-text-main/90"
                        )}>
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
