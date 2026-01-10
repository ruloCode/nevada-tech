'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/i18n/navigation';
import { Project, getRelatedProjects } from '@/app/data/projects-detail';

interface ProjectRelatedProps {
  project: Project;
}

export default function ProjectRelated({ project }: ProjectRelatedProps) {
  const t = useTranslations('Projects.detail');
  const relatedProjects = getRelatedProjects(project);

  if (relatedProjects.length === 0) return null;

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
          {t('relatedProjects')}
        </motion.h2>

        <div className="space-y-4">
          {relatedProjects.map((related, index) => (
            <motion.div
              key={related.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${related.category}/${related.slug}`}
                className="group flex items-center justify-between p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  {/* Number */}
                  <span className="text-sm text-neutral-400 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Title + Category */}
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {related.title}
                    </h3>
                    <span className="text-sm text-neutral-500 capitalize">
                      {related.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500 group-hover:text-neutral-900 transition-colors">
                    {t('explore')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-600 group-hover:text-white transition-colors"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
