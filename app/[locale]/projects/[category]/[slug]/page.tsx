import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { projects, getProjectBySlug, categories } from '@/app/data/projects-detail';
import ProjectDetailHero from '@/app/components/projects/ProjectDetailHero';
import ProjectAbout from '@/app/components/projects/ProjectAbout';
import ProjectChallenges from '@/app/components/projects/ProjectChallenges';
import ProjectTakeaways from '@/app/components/projects/ProjectTakeaways';
import ProjectSummary from '@/app/components/projects/ProjectSummary';
import ProjectRelated from '@/app/components/projects/ProjectRelated';
import CTA from '@/app/components/sections/CTA';

interface ProjectDetailPageProps {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { locale: string; category: string; slug: string }[] = [];

  const locales = ['es', 'en'];

  for (const locale of locales) {
    for (const project of projects) {
      params.push({
        locale,
        category: project.category,
        slug: project.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Nevada Tech`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);

  // Validate project exists and category matches
  if (!project || project.category !== category) {
    notFound();
  }

  // Validate category
  const validCategory = categories.some((c) => c.id === category);
  if (!validCategory) {
    notFound();
  }

  return (
    <main>
      <ProjectDetailHero project={project} />
      <ProjectAbout project={project} />
      <ProjectChallenges project={project} />
      <ProjectTakeaways project={project} />
      <ProjectSummary project={project} />
      <ProjectRelated project={project} />
      <CTA />
    </main>
  );
}
