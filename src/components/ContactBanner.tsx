"use client";

import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto bg-neon rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.3)]"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full -ml-24 -mb-24" />

        <div className="relative z-10 space-y-8">
          <h2 className="text-primary text-4xl md:text-6xl font-bold leading-tight">
            Let's get connected and <br /> work together.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-text-main text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/50 transition-all"
          >
            Download resume
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactBanner;
