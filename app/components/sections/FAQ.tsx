"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import FAQItem from "./FAQItem";

const faqIds = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations("FAQ");
  const tNavbar = useTranslations("Navbar");

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-light py-20 md:py-32">
      <div className="container-hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-sm font-medium tracking-wide uppercase text-section-light-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t("label")}
            </div>
            <h2 className="text-fluid-section-title font-semibold tracking-tight text-section-light-fg">
              {t("title")}
            </h2>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-section-light-fg text-section-light-bg rounded-full font-medium hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tNavbar("contact")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right side - FAQ items */}
          <div>
            {faqIds.map((id, index) => (
              <FAQItem
                key={id}
                question={t(`items.${id}.question`)}
                answer={t(`items.${id}.answer`)}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
