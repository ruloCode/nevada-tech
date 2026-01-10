"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

interface StatCardProps {
  number: string;
  value: number;
  suffix: string;
  label: string;
  index: number;
}

export default function StatCard({
  number,
  value,
  suffix,
  label,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-start gap-4 p-6 md:p-8"
    >
      {/* Number indicator */}
      <span className="text-sm font-medium text-section-light-muted/50">
        {number}
      </span>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-section-light-fg tracking-tight">
          <AnimatedCounter target={value} suffix={suffix} />
        </span>
        <span className="mt-2 text-sm md:text-base text-section-light-muted">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
