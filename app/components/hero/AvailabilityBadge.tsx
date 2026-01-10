"use client";

import { motion } from "framer-motion";

interface AvailabilityBadgeProps {
  text?: string;
}

export default function AvailabilityBadge({
  text = "Available for projects",
}: AvailabilityBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-pulse-green rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
      </span>
      <span className="text-sm text-white/80">{text}</span>
    </motion.div>
  );
}
