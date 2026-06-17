"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const codeSnippet = `{
  "name": "Saikiran Rudra",
  "role": "Full Stack Developer",
  "techStack": ["MERN", "Next.js", "TypeScript"],
  "currentProject": "Hisaab Kitaab",
  "passion": "Building premium SaaS interfaces"
}`;

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-cyan text-lg mb-4"
          >
            Hi, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-script italic text-neon glow-text mb-6"
          >
            Saikiran Rudra
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-text-main mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-text-muted text-lg max-w-lg mb-10"
          >
            Crafting premium, minimalist user interfaces and engineering robust
            backend logic.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.5)" }}
            className="px-8 py-4 border-2 border-neon text-neon font-bold rounded-full transition-all hover:bg-neon hover:text-primary"
          >
            Let's connect
          </motion.button>
        </motion.div>

        {/* Right Content - Decorative Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block perspective-1000"
        >
          <div className="glass-card rounded-xl overflow-hidden shadow-2xl border-neon/20">
            <div className="bg-secondary/50 px-4 py-2 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-text-muted font-mono ml-2">
                developer.json
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <pre className="text-cyan">
                {codeSnippet.split("\n").map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <span className="text-text-muted mr-4 select-none">
                      {i + 1}
                    </span>
                    {line}
                  </motion.div>
                ))}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Animated Chevron */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neon"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
