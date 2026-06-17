"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
          isScrolled
            ? "bg-primary/85 backdrop-blur-xl border-b border-accent/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.05 }} className="text-xl font-bold tracking-tight">
            <span className="text-accent glow-blue">SR</span>
            <span className="text-text-muted">.</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-text-muted hover:text-text-main text-sm font-medium link-underline transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-all duration-200"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
            )}

            {/* Resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FileText size={15} />
              Resume
            </motion.a>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-accent/10 border border-accent/20 text-accent"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="text-text-main p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-semibold text-text-main hover:text-accent transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-lg font-semibold px-7 py-3 rounded-full bg-accent text-white"
            >
              <FileText size={18} /> Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
