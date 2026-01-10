'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Project } from '@/app/data/projects-detail';

interface ProjectTakeawaysProps {
  project: Project;
}

export default function ProjectTakeaways({ project }: ProjectTakeawaysProps) {
  const t = useTranslations('Projects.detail');

  return (
    <section className="section-light-gray py-20 px-4">
      <div className="container-hero">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-neutral-900 mb-8"
        >
          {t('takeaways')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light font-serif italic">
            &ldquo;{project.keyTakeaways}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
