"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-cyan glow-text mb-16 text-center lg:text-left"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-text-main text-lg leading-relaxed">
              I am a B.Tech Computer Engineering student and Full Stack Developer
              based in Surat. I specialize in the MERN stack and Next.js,
              combining a passion for minimalist, modern design with scalable
              system architecture.
            </p>
            <p className="text-text-main text-lg leading-relaxed">
              From conceptualizing premium SaaS interfaces to developing complex
              logic for fintech systems, I build software that looks great and
              works flawlessly. My approach focuses on clean code, performance,
              and exceptional user experience.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-primary/50 border border-neon/30 px-6 py-3 rounded-lg">
                <span className="block text-neon font-bold text-2xl">2+</span>
                <span className="text-text-muted text-sm">Years Exp.</span>
              </div>
              <div className="bg-primary/50 border border-cyan/30 px-6 py-3 rounded-lg">
                <span className="block text-cyan font-bold text-2xl">15+</span>
                <span className="text-text-muted text-sm">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Abstract Shape Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 md:w-80 md:h-80 relative"
            >
              {/* Abstract 3D-ish shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon to-cyan opacity-20 rounded-2xl blur-2xl" />
              <div className="absolute inset-0 glass-card rounded-3xl border-2 border-neon/20 flex items-center justify-center transform rotate-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-neon shadow-[0_0_15px_#39FF14]" />
                <div className="w-1/2 h-1/2 border-2 border-cyan/30 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 text-neon font-mono text-4xl font-bold opacity-50">
                  {"</>"}
                </div>
              </div>
              <div className="absolute inset-0 glass-card rounded-3xl border-2 border-cyan/20 transform -rotate-3 -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
