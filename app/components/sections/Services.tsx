"use client";

import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "@/app/data/services";

export default function Services() {
  return (
    <section id="services" className="section-light py-20 md:py-32">
      <div className="container-hero">
        <SectionTitle
          label="Our Services"
          title="Our Core Tech Offerings"
          description="Full-stack solutions to help your business innovate, scale, and succeed in the digital landscape."
          centered={true}
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
