'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/i18n/navigation';
import { Project } from '@/app/data/projects-detail';

interface ProjectDetailHeroProps {
  project: Project;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const t = useTranslations('Projects.detail');

  return (
    <section className="section-light pt-32 pb-16 px-4">
      <div className="container-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] rounded-xl overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: project.gradient }}
            />
            {project.heroImage && (
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-light text-neutral-900 mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-600 text-lg leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 text-sm text-neutral-500 mb-6"
            >
              <span className="font-medium text-neutral-900">
                {project.industry}, {project.location}
              </span>
              <span>-</span>
              <span>{project.year}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {project.services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors"
                >
                  {service}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
