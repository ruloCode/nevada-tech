"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TestimonialCard from "./TestimonialCard";

const testimonialIds = ["1", "2", "3", "4", "5"];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const t = useTranslations("Testimonials");

  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 440;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="section-light-gray py-20 md:py-32 overflow-hidden">
      <div className="container-hero">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t("label")}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg"
            >
              {t("title")}
            </motion.h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-section-light-fg/20 hover:border-section-light-fg hover:bg-section-light-fg hover:text-section-light-bg"
                  : "border-section-light-muted/20 text-section-light-muted/40 cursor-not-allowed"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-section-light-fg/20 hover:border-section-light-fg hover:bg-section-light-fg hover:text-section-light-bg"
                  : "border-section-light-muted/20 text-section-light-muted/40 cursor-not-allowed"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Carousel container */}
      <div
        ref={containerRef}
        onScroll={checkScrollability}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-80rem)/2+1rem))] pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonialIds.map((id) => (
          <TestimonialCard
            key={id}
            quote={t(`items.${id}.quote`)}
            author={t(`items.${id}.author`)}
            role={t(`items.${id}.role`)}
            company={t(`items.${id}.company`)}
          />
        ))}
      </div>
    </section>
  );
}
