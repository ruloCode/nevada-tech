"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function AboutMission() {
  const t = useTranslations("About.mission");

  const statements = [
    { id: "1", text: t("statements.1") },
    { id: "2", text: t("statements.2") },
    { id: "3", text: t("statements.3") },
  ];

  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t("label")}
          </div>
          <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg">
            {t("title")}
          </h2>
        </motion.div>

        {/* Mission statements */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statements.map((statement, index) => (
            <motion.div
              key={statement.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="h-full p-8 rounded-3xl bg-section-card-bg border border-section-border transition-all duration-300 hover:border-accent/30"
                whileHover={{ y: -8 }}
              >
                <span className="inline-block text-5xl font-bold text-accent/20 mb-4">
                  0{index + 1}
                </span>
                <p className="text-section-light-muted leading-relaxed text-lg">
                  {statement.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
