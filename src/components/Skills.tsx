"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Palette, 
  Cpu, 
  Globe, 
  Layout, 
  Zap,
  Terminal
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2, level: "Advanced" },
  { name: "Next.js", icon: Layers, level: "Advanced" },
  { name: "Node.js", icon: Server, level: "Intermediate" },
  { name: "Express", icon: Terminal, level: "Intermediate" },
  { name: "MongoDB", icon: Database, level: "Intermediate" },
  { name: "Tailwind CSS", icon: Palette, level: "Advanced" },
  { name: "REST APIs", icon: Globe, level: "Advanced" },
  { name: "System Architecture", icon: Cpu, level: "Intermediate" },
  { name: "UI/UX Design", icon: Layout, level: "Advanced" },
  { name: "TypeScript", icon: Zap, level: "Intermediate" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-cyan glow-text mb-16 text-center"
        >
          Know my skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 0 25px rgba(57, 255, 20, 0.4)",
                borderColor: "#39FF14"
              }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 border border-white/5"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-neon mb-4">
                <skill.icon size={28} />
              </div>
              <h3 className="text-neon font-bold text-lg mb-1">{skill.name}</h3>
              <p className="text-text-muted text-xs uppercase tracking-widest">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
