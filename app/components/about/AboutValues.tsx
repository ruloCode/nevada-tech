"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const valueIds = ["value-1", "value-2", "value-3", "value-4"] as const;

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutValues() {
  const t = useTranslations("About.values");

  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hero">
        {/* Section header */}
        <motion.div
          className="mb-16"
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
            <br />
            <span className="text-section-light-muted">{t("subtitle")}</span>
          </h2>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {valueIds.map((id, index) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="h-full p-8 md:p-10 rounded-3xl bg-section-card-bg border border-section-border transition-all duration-300 hover:border-accent/30"
                whileHover={{ y: -8 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-bold text-accent/30 transition-colors duration-300 group-hover:text-accent/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-section-light-fg mb-2">
                      {t(`items.${id}.title`)}
                    </h3>
                    <p className="text-accent font-medium italic">
                      &ldquo;{t(`items.${id}.tagline`)}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-section-light-muted leading-relaxed pl-14 md:pl-16">
                  {t(`items.${id}.description`)}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
