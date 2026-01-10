"use client";

import { motion } from "framer-motion";
import { expertiseStats } from "@/app/data/about";
import AnimatedCounter from "../ui/AnimatedCounter";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function AboutPreview() {
  return (
    <section className="section-light-gray py-20 md:py-32 overflow-hidden">
      <div className="container-hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              About Us
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg mb-6"
            >
              The Team Behind
              <br />
              <span className="text-section-light-muted">Your Success</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-section-light-muted mb-8 max-w-lg"
            >
              We don&apos;t just write code—we architect digital empires. Every
              project we touch becomes a testament to what&apos;s possible when
              ambition meets execution.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mb-10"
            >
              {expertiseStats.slice(0, 3).map((stat) => (
                <div key={stat.id} className="text-center md:text-left">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl md:text-4xl font-bold text-section-light-fg">
                      <AnimatedCounter target={stat.value} />
                    </span>
                    <span className="text-xl font-bold text-accent">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-section-light-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button variant="solid-light" href="/about">
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main visual card */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm font-medium">Our Team</p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-accent text-white p-4 md:p-6 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter target={100} />
                  </span>
                  <span className="text-xl font-bold opacity-80">%</span>
                </div>
                <p className="text-sm opacity-90">Client Satisfaction</p>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-8 -right-16 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
