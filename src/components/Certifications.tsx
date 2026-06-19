"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section id="certifications" className="py-16 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            06 — Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Certifications & Learning
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
              whileHover={{ y: -6, boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
              className="glass-card rounded-2xl overflow-hidden border border-accent/10 hover:border-accent/35 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Certificate Preview Image */}
              <div className="relative aspect-[16/10] w-full bg-secondary/40 border-b border-white/5 overflow-hidden flex items-center justify-center">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Premium Fallback for McKinsey or missing cert images */
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-secondary/30 to-blue-950/40 flex flex-col items-center justify-center p-4 text-center">
                    <Award className="text-accent/40 mb-1.5 animate-pulse" size={24} />
                    <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Verified Program</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  {/* Certificate Title */}
                  <h3 className="text-text-main font-bold text-sm leading-snug mb-1.5 line-clamp-2 min-h-[40px] group-hover:text-accent-light transition-colors">
                    {cert.title}
                  </h3>

                  {/* Details (Issuer and Year) */}
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-4">
                    <span className="font-semibold text-text-muted/80">{cert.issuer}</span>
                    <span className="font-mono text-accent-light">{cert.year}</span>
                  </div>
                </div>

                {/* View Credential CTA Button */}
                <div className="mt-auto pt-1">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-bold rounded-xl bg-accent/10 border border-accent/20 text-accent-light hover:bg-accent hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300"
                    >
                      View Credential
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold rounded-xl bg-white/5 border border-white/5 text-text-muted cursor-not-allowed">
                      Verification Link N/A
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
