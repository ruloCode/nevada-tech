"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";

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

export default function AboutPhilosophy() {
  const t = useTranslations("About.philosophy");
  const headline = t("headline");
  const paragraphs = [t("paragraph1"), t("paragraph2"), t("paragraph3")];

  return (
    <section className="section-light-gray py-20 md:py-32 overflow-hidden">
      <div className="container-hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Sticky title */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t("label")}
            </div>
            <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg leading-tight">
              {headline.split(".")[0]}.
              <br />
              <span className="text-section-light-muted">
                {headline.split(".")[1]?.trim() || "We Set Them."}
              </span>
            </h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Paragraphs */}
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-section-light-muted text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="relative pl-6 border-l-2 border-accent my-10"
            >
              <p className="text-2xl md:text-3xl font-serif italic text-section-light-fg leading-snug">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </motion.blockquote>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button variant="solid-light" href="#contact">
                {t("cta")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
