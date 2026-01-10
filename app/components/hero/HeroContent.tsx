"use client";

import { motion } from "framer-motion";
import AvailabilityBadge from "./AvailabilityBadge";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      {/* Badge */}
      <motion.div variants={itemVariants}>
        <AvailabilityBadge />
      </motion.div>

      {/* Main Title - Fluid Typography */}
      <motion.h1
        variants={itemVariants}
        className="mt-6 sm:mt-8 max-w-4xl font-semibold tracking-tight leading-[1.1]"
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
        }}
      >
        <span className="text-white">Transform Ideas Into</span>
        <br />
        <span className="text-white">Digital Success</span>
      </motion.h1>

      {/* Description - Fluid Typography */}
      <motion.p
        variants={itemVariants}
        className="mt-4 sm:mt-6 max-w-xl text-white/60 leading-relaxed"
        style={{
          fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
        }}
      >
        We&apos;re your partner in product design, website creation,
        and branding for every stage of your business.
      </motion.p>

      {/* CTAs - Responsive layout */}
      <motion.div
        variants={itemVariants}
        className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <Button variant="outline" href="#services" className="w-full sm:w-auto sm:min-w-[140px]">
          Services
        </Button>
        <Button variant="solid" href="#projects" className="w-full sm:w-auto sm:min-w-[140px]">
          Projects
        </Button>
      </motion.div>
    </motion.div>
  );
}
