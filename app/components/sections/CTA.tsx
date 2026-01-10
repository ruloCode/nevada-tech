"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0a0a, #171717)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-hero relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium tracking-wide uppercase text-muted"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Ready to start?
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-hero font-semibold tracking-tight text-foreground mb-6"
          >
            Let&apos;s Work
            <br />
            <span className="text-muted">Together</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Let&apos;s bring your vision to life and transform your ideas into
            powerful digital solutions that drive growth and success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="mailto:hello@nevadatech.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Call
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
            <motion.a
              href="mailto:hello@nevadatech.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:border-foreground transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Pricing Info
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
