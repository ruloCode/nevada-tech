"use client";

import { motion } from "framer-motion";
import { Link } from "@/app/i18n/navigation";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  year: string;
  tags: string[];
  gradient: string;
  image?: string;
  description: string;
  href: string;
}

export default function PortfolioCard({
  title,
  year,
  tags,
  gradient,
  image,
  description,
  href,
}: PortfolioCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        className="group relative flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] cursor-pointer"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
      {/* Image with fallback to gradient */}
      <div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4"
        style={{ background: image ? undefined : gradient }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 420px"
          />
        ) : (
          /* Fallback: Project title overlay when no image */
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-80">
              {title}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
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
    </Link>
  );
}
