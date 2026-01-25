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

export default function AboutVision() {
  const t = useTranslations("About.vision");

  const statements = [
    { id: "1", text: t("statements.1") },
    { id: "2", text: t("statements.2") },
    { id: "3", text: t("statements.3") },
  ];

  return (
    <section className="section-light-gray py-20 md:py-32">
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

        {/* Vision statements */}
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                  <span className="text-5xl font-bold text-accent/20">
                    0{index + 1}
                  </span>
                </div>
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
