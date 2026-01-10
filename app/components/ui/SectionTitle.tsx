"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
  light = true,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      {label && (
        <motion.div
          variants={itemVariants}
          className={`inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase ${
            light ? "text-section-light-muted" : "text-muted"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          {label}
        </motion.div>
      )}
      <motion.h2
        variants={itemVariants}
        className={`text-fluid-section-title font-semibold tracking-tight ${
          light ? "text-section-light-fg" : "text-foreground"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-4 max-w-2xl text-fluid-section-subtitle ${
            centered ? "mx-auto" : ""
          } ${light ? "text-section-light-muted" : "text-muted"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
