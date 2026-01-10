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
      className="group relative overflow-hidden rounded-2xl min-h-[200px] md:min-h-[240px]
                 bg-section-card-bg hover:bg-[#1a1a2e]
                 transition-all duration-400 cursor-pointer"
    >
      {/* Front Layer - Visible por defecto */}
      <div
        className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between
                      opacity-100 group-hover:opacity-0
                      transition-opacity duration-300 ease-out"
      >
        <span className="text-sm font-medium text-section-light-muted/60">
          {number}
        </span>
        <h3 className="text-lg md:text-xl font-semibold text-section-light-fg">
          {title}
        </h3>
      </div>

      {/* Back Layer - Visible en hover */}
      <div
        className="absolute inset-0 p-6 md:p-8 flex flex-col
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 ease-out delay-100"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>

        {/* Punto decorativo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>

        <p className="text-sm text-white/70 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
}
