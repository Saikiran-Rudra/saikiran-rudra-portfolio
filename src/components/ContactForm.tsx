"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Left - Heading */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-text-main"
            >
              I am not hard to find,
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-script italic text-neon glow-text"
            >
              let's create something truly spectacular!
            </motion.p>
            
            <div className="pt-8 flex gap-6">
              {[
                { icon: FaGithub, href: "https://github.com/Saikiran-Rudra", color: "hover:text-neon" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/saikiran-rudra", color: "hover:text-cyan" },
                { icon: Mail, href: "mailto:saikiran@example.com", color: "hover:text-neon" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`text-text-muted transition-colors ${social.color}`}
                >
                  <social.icon size={32} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:placeholder-transparent transition-all"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-focus-within:w-full" />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:placeholder-transparent transition-all"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-focus-within:w-full" />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:placeholder-transparent transition-all resize-none"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-focus-within:w-full" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 bg-secondary text-neon font-bold rounded-xl border border-neon/30 hover:bg-neon hover:text-primary transition-all shadow-neon"
            >
              Send Message <Send size={20} />
            </motion.button>
          </motion.form>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Saikiran Rudra. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-muted">
            <a href="#" className="hover:text-neon">Privacy Policy</a>
            <a href="#" className="hover:text-neon">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;
