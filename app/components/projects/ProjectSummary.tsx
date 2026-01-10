'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/i18n/navigation';
import { Project } from '@/app/data/projects-detail';

interface ProjectSummaryProps {
  project: Project;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  const t = useTranslations('Projects.detail');

  // Generate initials from client name
  const initials = project.clientName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <section className="section-light py-20 px-4">
      <div className="container-hero">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-neutral-900 mb-12"
        >
          {t('summary')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Industry */}
            <div>
              <span className="text-sm text-neutral-500 uppercase tracking-wider block mb-2">
                {t('industry')}
              </span>
              <span className="text-lg text-neutral-900">{project.industry}</span>
            </div>

            {/* Duration */}
            <div>
              <span className="text-sm text-neutral-500 uppercase tracking-wider block mb-2">
                {t('duration')}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light text-neutral-900">
                  {project.duration}
                </span>
                <span className="text-lg text-neutral-500">{t('weeks')}</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="text-sm text-neutral-500 uppercase tracking-wider block mb-3">
                {t('services')}
              </span>
              <ul className="space-y-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="text-neutral-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Description + Client */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              {project.summaryDescription}
            </p>

            {/* Client Card */}
            <div className="flex items-center justify-between flex-wrap gap-4 p-6 bg-neutral-50 rounded-xl">
              <div className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-medium"
                  style={{ background: project.gradient }}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    {project.clientName}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {project.clientRole}
                  </div>
                </div>
                {project.clientLinkedIn && (
                  <a
                    href={project.clientLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-600 transition-colors ml-2"
                    aria-label="LinkedIn profile"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
              >
                {t('letsChat')}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
