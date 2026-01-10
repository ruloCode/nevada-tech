"use client";

import { motion } from "framer-motion";
import { careersContent } from "@/app/data/about";
import Button from "../ui/Button";

export default function AboutCareers() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-hero relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium tracking-wide uppercase text-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-green" />
            Careers
          </div>

          {/* Headline */}
          <h2 className="text-fluid-section-title md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {careersContent.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
            {careersContent.subtitle}
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="solid" href="/careers">
              {careersContent.cta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
