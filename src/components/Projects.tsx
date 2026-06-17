"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hisaab Kitaab",
    description: "Fintech accounting system with robust organization management and module-based access control.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/projects/hisaab.png",
    icon: "💰"
  },
  {
    title: "Beyond AI Tools",
    description: "Platform dedicated to AI technology with a custom geometric visual identity.",
    tags: ["Next.js", "Modern UI"],
    color: "from-purple-500/20 to-pink-500/20",
    image: "/projects/beyond.png",
    icon: "🤖"
  },
  {
    title: "IoT Fleet Management",
    description: "Dashboard for monitoring enterprise vehicle fleets using real-time IoT data streams.",
    tags: ["Dashboard", "IoT"],
    color: "from-orange-500/20 to-yellow-500/20",
    image: null,
    icon: "🚚"
  },
  {
    title: "Advanced POS System",
    description: "High-performance transaction and inventory management system.",
    tags: ["Full Stack", "Inventory"],
    color: "from-green-500/20 to-emerald-500/20",
    image: null,
    icon: "🛒"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-cyan glow-text mb-20 text-center"
        >
          View my work
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image / Placeholder */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 aspect-video bg-secondary rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                    <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                      {project.icon}
                    </div>
                  </>
                )}
                
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-4 bg-primary rounded-full text-neon hover:bg-neon hover:text-primary transition-colors">
                    <FaGithub size={24} />
                  </button>
                  <button className="p-4 bg-primary rounded-full text-cyan hover:bg-cyan hover:text-primary transition-colors">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-text-main group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {project.description}
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-cyan font-bold hover:text-neon transition-colors"
                >
                  View Case Study <ExternalLink size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

