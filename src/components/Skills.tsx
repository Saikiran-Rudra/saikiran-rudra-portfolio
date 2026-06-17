"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaReact,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { skillCategories } from "@/lib/data";
import type { SkillCategory } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  FaBrain,
  FaReact,
  FaServer,
  FaDatabase,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon] ?? FaReact;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
      className="glass-card rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
          <Icon size={20} />
        </div>
        <h3 className="text-text-main font-semibold text-base">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent-light hover:bg-accent/15 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            02 — Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            What I work with
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <SkillCard key={cat.category} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
