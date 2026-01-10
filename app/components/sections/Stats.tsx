"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "./StatCard";
import { stats } from "@/app/data/stats";

export default function Stats() {
  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Title and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              What makes us different?
            </div>
            <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg">
              Nevada Tech
              <br />
              <span className="text-section-light-muted">In Numbers</span>
            </h2>
            <p className="mt-6 text-section-light-muted max-w-md">
              Technology is more than code—it&apos;s about measurable impact.
              Here&apos;s how we make a difference for our clients.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-section-light-fg font-medium hover:text-accent transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Let&apos;s talk
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
          </motion.div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                number={`0${index + 1}`}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
