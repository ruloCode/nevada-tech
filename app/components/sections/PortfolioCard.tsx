"use client";

import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  year: string;
  tags: string[];
  image: string;
  description: string;
}

export default function PortfolioCard({
  title,
  year,
  tags,
  description,
}: PortfolioCardProps) {
  return (
    <motion.div
      className="group relative flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-section-card-bg to-section-card-hover mb-4">
        {/* Gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Mock UI elements for placeholder */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="text-xs text-section-light-muted/40 font-mono">
              {title.toLowerCase().replace(/\s+/g, "-")}.app
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-2 w-3/4 rounded bg-section-light-muted/10" />
            <div className="h-2 w-1/2 rounded bg-section-light-muted/10" />
            <div className="h-8 w-24 rounded bg-accent/20 mt-4" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
      </div>

      {/* Info */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-section-light-fg group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <span className="text-sm text-section-light-muted">-</span>
            <span className="text-sm text-section-light-muted">{year}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-section-light-muted bg-section-card-bg rounded-full border border-section-border hover:border-section-light-muted/30 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
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
      </div>
    </motion.div>
  );
}
