"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            04 — Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* Image / Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/8 relative group shadow-2xl"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-8xl transition-transform duration-500 group-hover:scale-110">
                      {project.icon}
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300" />

                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="p-3 bg-accent rounded-full text-white hover:bg-accent/80 transition-colors shadow-blue"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.nda ? (
                    <div
                      title="Code under NDA"
                      className="p-3 bg-secondary/80 rounded-full text-text-muted border border-white/10"
                    >
                      <Lock size={20} />
                    </div>
                  ) : (
                    project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="p-3 bg-secondary/80 rounded-full text-text-main hover:text-accent border border-white/10 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )
                  )}
                </div>
              </motion.div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-accent/8 border border-accent/15 text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.nda && (
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center gap-1">
                      <Lock size={10} /> NDA
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-text-main leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-light transition-colors"
                    >
                      Live Demo <ExternalLink size={15} />
                    </motion.a>
                  )}
                  {project.nda ? (
                    <span className="flex items-center gap-1.5 text-text-muted text-sm">
                      <Lock size={14} /> Code under NDA
                    </span>
                  ) : (
                    project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-text-muted font-semibold text-sm hover:text-text-main transition-colors"
                      >
                        <FaGithub size={16} /> GitHub
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
