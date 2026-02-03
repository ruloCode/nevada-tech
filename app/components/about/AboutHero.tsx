"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Server-side and initial client render - show plain text
  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  // Client-side after mount - show animated text
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function AboutHero() {
  const t = useTranslations("About.hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <motion.div
        className="container-hero relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium tracking-wide uppercase text-muted"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping-green" />
          {t("label")}
        </motion.div>

        {/* Title */}
        <h1 className="text-fluid-hero font-bold tracking-tight text-foreground mb-4">
          <AnimatedText text={t("titleLine1")} />
        </h1>
        <h1 className="text-fluid-hero font-bold tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-accent">
            <AnimatedText text={t("titleLine2")} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-fluid-body text-muted max-w-xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
