"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Users, BadgeCheck, type LucideIcon } from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Medal,
  Users,
  BadgeCheck,
};

const iconColors: Record<string, string> = {
  Trophy: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Medal: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Users: "text-accent bg-accent/10 border-accent/20",
  BadgeCheck: "text-green-400 bg-green-400/10 border-green-400/20",
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
    <section id="achievements" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            06 — Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Milestones
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
                whileHover={{ y: -4, boxShadow: "0 0 30px rgba(59,130,246,0.1)" }}
                className="glass-card rounded-2xl p-7 border border-accent/10 hover:border-accent/25 transition-all duration-300 flex items-start gap-5"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${colorClass}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-text-main font-semibold text-base mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
