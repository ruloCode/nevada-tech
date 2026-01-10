'use client';

import { motion } from 'framer-motion';
import { Link } from '@/app/i18n/navigation';
import { Project } from '@/app/data/projects-detail';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <Link
        href={`/projects/${project.category}/${project.slug}`}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4">
          {/* Gradient Placeholder */}
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: project.gradient }}
          />

          {/* Project Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-80">
              {project.title}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-neutral-400">-</span>
            <span className="text-neutral-500">{project.year}</span>
          </div>

          {/* Arrow on hover */}
          <motion.svg
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </motion.svg>
        </div>

        {/* Service Tags */}
        {project.services.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
