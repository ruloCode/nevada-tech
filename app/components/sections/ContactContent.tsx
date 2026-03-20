"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

interface ContactContentProps {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

export default function ContactContent({
  label,
  title,
  titleAccent,
  subtitle,
}: ContactContentProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#00E5FF]/5 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute top-1/4 -right-32 h-64 w-64 rounded-full bg-[#00E5FF]/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-[#00E5FF]"
            >
              {label}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {title}{" "}
              <span className="text-[#00E5FF]">{titleAccent}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-white/60"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8 lg:col-span-2"
            >
              {/* Info items */}
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  text: "hello@nevadatech.com",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  text: "+1 (555) 000-0000",
                },
                {
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </>
                  ),
                  text: "Remote — Worldwide",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/10">
                    <svg
                      className="h-5 w-5 text-[#00E5FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <p className="pt-2 text-sm text-white/60">{item.text}</p>
                </div>
              ))}

              {/* Decorative gradient bar */}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#00E5FF]/30 via-purple-500/20 to-transparent" />

              <p className="text-xs leading-relaxed text-white/30">
                We typically respond within 24 hours on business days.
              </p>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-white/8 bg-white/3 p-8 md:p-10 lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
