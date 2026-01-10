"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "./ServiceCard";

const serviceKeys = [
  "web-development",
  "mobile-apps",
  "cloud-solutions",
  "ai-ml",
  "ui-ux-design",
  "devops",
  "tech-consulting",
  "e-commerce",
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section-light py-20 md:py-32">
      <div className="container-hero">
        <SectionTitle
          label={t("label")}
          title={t("title")}
          centered={true}
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {serviceKeys.map((key, index) => (
            <ServiceCard
              key={key}
              number={String(index + 1).padStart(2, "0")}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
