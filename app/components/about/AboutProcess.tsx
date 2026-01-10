"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/app/data/about";

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutProcess() {
  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Our Approach
          </div>
          <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg max-w-2xl">
            First step to solving a problem is recognizing there is one.
          </h2>
        </motion.div>

        {/* Process steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="h-full p-6 rounded-2xl bg-section-card-bg border border-section-border transition-all duration-300 group-hover:bg-section-card-hover group-hover:border-accent/20"
                whileHover={{ y: -5 }}
              >
                {/* Step number */}
                <div className="text-5xl font-bold text-section-light-fg/10 mb-4 transition-colors duration-300 group-hover:text-accent/20">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-section-light-fg mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-section-light-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-section-border" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
