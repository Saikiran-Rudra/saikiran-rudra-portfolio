"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Users,
  BadgeCheck,
  GraduationCap,
  Award,
  Cpu,
  Rocket,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Medal,
  Users,
  BadgeCheck,
  GraduationCap,
  Award,
  Cpu,
  Rocket,
  Globe,
};

const iconColors: Record<string, string> = {
  Trophy: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Medal: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Users: "text-accent bg-accent/10 border-accent/20",
  BadgeCheck: "text-green-400 bg-green-400/10 border-green-400/20",
  GraduationCap: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Award: "text-orange-300 bg-orange-300/10 border-orange-300/20",
  Cpu: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Rocket: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Globe: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            07 — Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Achievements & Recognition
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] ?? Trophy;
            const colorClass = iconColors[item.icon] ?? "text-accent bg-accent/10 border-accent/20";
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 0 35px rgba(59,130,246,0.12)" }}
                className="glass-card rounded-2xl p-7 border border-accent/10 hover:border-accent/25 transition-all duration-300 flex items-start gap-5 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${colorClass}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1 self-stretch flex flex-col justify-between">
                  <div>
                    <h3 className="text-text-main font-semibold text-base mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {item.proofUrl && item.proofUrl !== "#" && (
                    <div className="mt-3">
                      <a
                        href={item.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-mono font-semibold text-text-muted group-hover:text-accent-light transition-colors duration-300"
                      >
                        {item.proofLabel || "View Proof"}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
