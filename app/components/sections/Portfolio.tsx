"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "./PortfolioCard";
import { projects } from "@/app/data/projects";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
          <SectionTitle
            label="Our Works"
            title="Check Our Featured Projects"
            centered={false}
            light={true}
          />

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
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            year={project.year}
            tags={project.tags}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>

      {/* View all projects link */}
      <div className="container-hero mt-8">
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 text-section-light-fg font-medium hover:text-accent transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          All projects
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
