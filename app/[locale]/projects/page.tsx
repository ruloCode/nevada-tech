'use client';

import { useState } from 'react';
import { projects, ProjectCategory } from '@/app/data/projects-detail';
import ProjectsHero from '@/app/components/projects/ProjectsHero';
import ProjectsFilters from '@/app/components/projects/ProjectsFilters';
import ProjectsGrid from '@/app/components/projects/ProjectsGrid';
import CTA from '@/app/components/sections/CTA';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  return (
    <main>
      <ProjectsHero />
      <ProjectsFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProjectsGrid projects={projects} selectedCategory={selectedCategory} />
      <CTA />
    </main>
  );
}
