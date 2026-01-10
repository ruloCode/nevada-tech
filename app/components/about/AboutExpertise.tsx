"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedCounter from "../ui/AnimatedCounter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const as [number, number, number, number],
    },
  },
};

const expertiseStatsData = [
  { id: "stat-1", value: 10, suffix: "+", labelKey: "yearsExcellence" },
  { id: "stat-2", value: 50, suffix: "+", labelKey: "projectsDelivered" },
  { id: "stat-3", value: 15, suffix: "+", labelKey: "industriesTransformed" },
  { id: "stat-4", value: 100, suffix: "%", labelKey: "clientSatisfaction" },
];

export default function AboutExpertise() {
  const t = useTranslations("About.expertise");

  return (
    <section className="section-light-gray py-20 md:py-32">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const as [number, number, number, number] }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t("title")}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Large card - Years */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 p-8 md:p-10 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-6xl md:text-8xl font-bold text-section-light-fg">
                  <AnimatedCounter target={expertiseStatsData[0].value} />
                </span>
                <span className="text-4xl md:text-5xl font-bold text-accent">
                  {expertiseStatsData[0].suffix}
                </span>
              </div>
              <p className="text-xl md:text-2xl text-section-light-muted font-medium">
                {t(`stats.${expertiseStatsData[0].labelKey}`)}
              </p>
            </div>
            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />
          </motion.div>

          {/* Projects card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 p-6 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-section-light-fg">
                <AnimatedCounter target={expertiseStatsData[1].value} />
              </span>
              <span className="text-2xl font-bold text-accent">
                {expertiseStatsData[1].suffix}
              </span>
            </div>
            <p className="text-sm md:text-base text-section-light-muted">
              {t(`stats.${expertiseStatsData[1].labelKey}`)}
            </p>
          </motion.div>

          {/* Industries card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 p-6 rounded-3xl bg-section-light-bg border border-section-border relative overflow-hidden group"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-bold text-section-light-fg">
                <AnimatedCounter target={expertiseStatsData[2].value} />
              </span>
              <span className="text-2xl font-bold text-accent">
                {expertiseStatsData[2].suffix}
              </span>
            </div>
            <p className="text-sm md:text-base text-section-light-muted">
              {t(`stats.${expertiseStatsData[2].labelKey}`)}
            </p>
          </motion.div>

          {/* Satisfaction card - wide */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 p-6 md:p-8 rounded-3xl bg-accent text-white relative overflow-hidden group"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl md:text-6xl font-bold">
                    <AnimatedCounter target={expertiseStatsData[3].value} />
                  </span>
                  <span className="text-3xl font-bold opacity-80">
                    {expertiseStatsData[3].suffix}
                  </span>
                </div>
                <p className="text-lg md:text-xl opacity-90">
                  {t(`stats.${expertiseStatsData[3].labelKey}`)}
                </p>
              </div>
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
