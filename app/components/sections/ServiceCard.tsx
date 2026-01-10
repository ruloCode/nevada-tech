"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  number,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-section-card-bg transition-colors duration-300 hover:bg-section-card-hover cursor-pointer min-h-[200px] md:min-h-[240px]"
    >
      {/* Number */}
      <span className="text-sm font-medium text-section-light-muted/60 transition-colors duration-300 group-hover:text-section-light-muted">
        {number}
      </span>

      {/* Content */}
      <div className="mt-auto">
        <h3 className="text-lg md:text-xl font-semibold text-section-light-fg mb-2 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-sm text-section-light-muted/80 line-clamp-2 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20">
          {description}
        </p>
      </div>

      {/* Hover Arrow Indicator */}
      <motion.div
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -5, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <svg
          className="w-5 h-5 text-section-light-fg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
