"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Presentation, Zap, CheckCircle2 } from "lucide-react";

const cards = [
  {
    title: "Founder Collaboration",
    description: "Worked directly with founders on product decisions, execution, and prioritization.",
    icon: Users,
    colorClass: "text-accent bg-accent/10 border-accent/20",
  },
  {
    title: "Product Thinking",
    description: "Learned how customer problems are translated into product features and solutions.",
    icon: Lightbulb,
    colorClass: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  },
  {
    title: "Customer Demos",
    description: "Participated in product demonstrations, feedback discussions, and customer interactions.",
    icon: Presentation,
    colorClass: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
  {
    title: "Fast Execution",
    description: "Built and shipped features quickly while adapting to changing business requirements.",
    icon: Zap,
    colorClass: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
];

const highlights = [
  "Built GST Billing ERP",
  "Full-Stack Development",
  "Product Discussions",
  "Founder Collaboration",
  "Customer Demos",
  "Startup Environment",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function StartupExperience() {
  return (
    <section id="startup-experience" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-semibold tracking-widest mb-3 uppercase">
            02 — Startup Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Beyond Writing Code
          </h2>
        </motion.div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / Info Text & Highlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-text-muted text-base leading-relaxed">
                Joining TechSonance as a Full-Stack Developer Intern gave me exposure beyond engineering.
                Alongside building products, I worked closely with founders, participated in product
                discussions, customer demonstrations, feature planning, and day-to-day execution.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                This experience helped me understand how real products are built by balancing customer needs,
                business goals, and technical implementation in a fast-moving startup environment.
              </p>
            </motion.div>

            {/* Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 0 30px rgba(59,130,246,0.12)" }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-accent/15 flex flex-col justify-center h-full mt-2"
            >
              <h3 className="text-text-main font-bold text-lg mb-4 border-b border-white/5 pb-2">
                TechSonance Experience
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-text-muted text-sm font-medium">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right / 2x2 Grid of Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(59,130,246,0.12)" }}
                  className="glass-card rounded-2xl p-6 border border-accent/10 hover:border-accent/25 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${card.colorClass}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-text-main font-bold text-base mb-2">
                      {card.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
