"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {year}{" "}
          <span className="text-text-main font-medium">Saikiran Rudra</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-text-main transition-colors duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-muted hover:text-accent text-sm font-mono transition-colors duration-200"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
