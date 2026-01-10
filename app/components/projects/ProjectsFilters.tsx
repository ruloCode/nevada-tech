'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ProjectCategory, categories } from '@/app/data/projects-detail';

interface ProjectsFiltersProps {
  selectedCategory: ProjectCategory | 'all';
  onCategoryChange: (category: ProjectCategory | 'all') => void;
}

export default function ProjectsFilters({
  selectedCategory,
  onCategoryChange,
}: ProjectsFiltersProps) {
  const t = useTranslations('Projects.filters');

  const allCategories = [
    { id: 'all' as const, labelKey: 'all' },
    ...categories,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="section-light py-8 px-4 border-b border-neutral-200"
      id="projects"
    >
      <div className="container-hero">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-neutral-500 uppercase tracking-wider">
            {t('label')}
          </span>

          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter projects by category">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                role="radio"
                aria-checked={selectedCategory === category.id}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }
                `}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
