"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const expertiseStats = [
  { id: "stat-1", value: 10, suffix: "+", labelKey: "yearsExcellence" },
  { id: "stat-2", value: 50, suffix: "+", labelKey: "projectsDelivered" },
  { id: "stat-3", value: 15, suffix: "+", labelKey: "industriesTransformed" },
];

export default function AboutPreview() {
  const t = useTranslations("AboutPreview");
  const tStats = useTranslations("About.expertise.stats");

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
              {t("label")}
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg mb-6"
            >
              {t("title")}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-section-light-muted mb-8 max-w-lg"
            >
              {t("description")}
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mb-10"
            >
              {expertiseStats.map((stat) => (
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
                    {tStats(stat.labelKey)}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button variant="solid-light" href="/about">
                {t("cta")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Main visual card */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/imagenes/about-preview.png"
                alt="Equipo Nevada Tech colaborando"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
