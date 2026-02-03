'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Project } from '@/app/data/projects-detail';

interface ProjectSummaryProps {
  project: Project;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  const t = useTranslations('Projects.detail');

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

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              {project.summaryDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
