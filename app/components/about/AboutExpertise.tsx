"use client";

import { motion } from "framer-motion";
import { expertiseStats } from "@/app/data/about";
import AnimatedCounter from "../ui/AnimatedCounter";

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutExpertise() {
  return (
    <section className="section-light-gray py-20 md:py-32">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Our Expertise
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Large card - Years */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 p-8 md:p-10 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-6xl md:text-8xl font-bold text-section-light-fg">
                  <AnimatedCounter target={expertiseStats[0].value} />
                </span>
                <span className="text-4xl md:text-5xl font-bold text-accent">
                  {expertiseStats[0].suffix}
                </span>
              </div>
              <p className="text-xl md:text-2xl text-section-light-muted font-medium">
                {expertiseStats[0].label}
              </p>
            </div>
            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />
          </motion.div>

          {/* Projects card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 p-6 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-section-light-fg">
                <AnimatedCounter target={expertiseStats[1].value} />
              </span>
              <span className="text-2xl font-bold text-accent">
                {expertiseStats[1].suffix}
              </span>
            </div>
            <p className="text-sm md:text-base text-section-light-muted">
              {expertiseStats[1].label}
            </p>
          </motion.div>

          {/* Industries card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 p-6 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-section-light-fg">
                <AnimatedCounter target={expertiseStats[2].value} />
              </span>
              <span className="text-2xl font-bold text-accent">
                {expertiseStats[2].suffix}
              </span>
            </div>
            <p className="text-sm md:text-base text-section-light-muted">
              {expertiseStats[2].label}
            </p>
          </motion.div>

          {/* Satisfaction card - wide */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 p-6 md:p-8 rounded-3xl bg-accent text-white relative overflow-hidden group"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl md:text-6xl font-bold">
                    <AnimatedCounter target={expertiseStats[3].value} />
                  </span>
                  <span className="text-3xl font-bold opacity-80">
                    {expertiseStats[3].suffix}
                  </span>
                </div>
                <p className="text-lg md:text-xl opacity-90">
                  {expertiseStats[3].label}
                </p>
              </div>
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
          </motion.div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Our Mission
          </div>
          <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg max-w-3xl mx-auto">
            To create a world made of thoughtful technology and transformative
            digital experiences.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
