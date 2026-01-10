'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/i18n/navigation';
import { Project } from '@/app/data/projects-detail';
import ProjectGallery from './ProjectGallery';

interface ProjectAboutProps {
  project: Project;
}

export default function ProjectAbout({ project }: ProjectAboutProps) {
  const t = useTranslations('Projects.detail');

  return (
    <section className="section-light-gray py-20 px-4">
      <div className="container-hero">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-neutral-900 mb-12"
        >
          {t('about')}
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

          {/* Right - Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {project.aboutDescription}
            </p>

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
          </motion.div>
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <ProjectGallery project={project} />
        </div>
      </div>
    </section>
  );
}
