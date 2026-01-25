"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

const principleIcons: Record<string, React.ReactNode> = {
  ownership: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  remote: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  feedback: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  client: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  data: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  ai: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const principleKeys = ["ownership", "remote", "feedback", "client", "data", "ai"] as const;

export default function AboutCulture() {
  const t = useTranslations("About.culture");

  const coreValueKeys = ["ownership", "transparency", "excellence", "learning", "results", "innovation"] as const;
  const clientWorkKeys = ["expectations", "communication", "scalable", "support"] as const;

  return (
    <section className="section-dark py-20 md:py-32 overflow-hidden">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-dark-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t("label")}
          </div>
          <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-dark-fg mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-section-dark-muted max-w-3xl mx-auto">
            {t("summary")}
          </p>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principleKeys.map((key) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="h-full p-8 rounded-3xl bg-section-dark-card border border-section-dark-border transition-all duration-300 hover:border-accent/40"
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                    {principleIcons[key]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-section-dark-fg mb-3">
                  {t(`principles.${key}.title`)}
                </h3>
                <p className="text-section-dark-muted leading-relaxed mb-4">
                  {t(`principles.${key}.description`)}
                </p>
                <p className="text-accent font-medium italic text-sm">
                  &ldquo;{t(`principles.${key}.quote`)}&rdquo;
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core values and client work */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Core values */}
          <motion.div
            className="p-8 md:p-10 rounded-3xl bg-section-dark-card border border-section-dark-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h3 className="text-2xl font-semibold text-section-dark-fg mb-6">
              {t("coreValues.title")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreValueKeys.map((key) => (
                <span
                  key={key}
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                >
                  {t(`coreValues.items.${key}`)}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Client work */}
          <motion.div
            className="p-8 md:p-10 rounded-3xl bg-section-dark-card border border-section-dark-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h3 className="text-2xl font-semibold text-section-dark-fg mb-6">
              {t("clientWork.title")}
            </h3>
            <ul className="space-y-4">
              {clientWorkKeys.map((key) => (
                <li key={key} className="flex items-center gap-3 text-section-dark-muted">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  {t(`clientWork.items.${key}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
