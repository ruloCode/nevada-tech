'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '@/app/data/projects-detail';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
  selectedCategory: ProjectCategory | 'all';
}

export default function ProjectsGrid({
  projects,
  selectedCategory,
}: ProjectsGridProps) {
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="section-light py-16 px-4">
      <div className="container-hero">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-neutral-500 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
