"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-primary/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-neon glow-text"
        >
          SR<span className="text-cyan">.</span>
        </motion.div>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#39FF14" }}
              className="text-text-main font-medium transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-neon/10 text-neon border border-neon/30 px-6 py-2 rounded-full hover:bg-neon hover:text-primary transition-all"
        >
          Resume
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
