"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            05 — Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Learning credentials
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 0 25px rgba(59,130,246,0.12)" }}
              className="glass-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <Award size={20} />
              </div>
              <h3 className="text-text-main font-semibold text-sm leading-snug mb-3">
                {cert.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-xs">{cert.issuer}</span>
                <span className="text-accent text-xs font-mono font-medium">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
