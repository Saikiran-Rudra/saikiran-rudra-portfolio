"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            03 — Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-10 pl-12 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 md:-left-20 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-accent/50 flex items-center justify-center shadow-blue">
                  <Briefcase size={14} className="text-accent" />
                </div>

                <div className="glass-card rounded-2xl p-7 border border-accent/10 hover:border-accent/25 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-text-main mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold text-base">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-text-muted text-sm sm:justify-end">
                        <Calendar size={13} className="text-accent" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-sm sm:justify-end">
                        <MapPin size={13} className="text-accent" />
                        {exp.location}
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 sm:self-end w-fit">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.07 }}
                        className="flex items-start gap-3 text-text-muted text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
