'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Project } from '@/app/data/projects-detail';

interface ProjectChallengesProps {
  project: Project;
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
  const t = useTranslations('Projects.detail');

  return (
    <section className="section-light py-20 px-4">
      <div className="container-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-light text-neutral-900 mb-12"
            >
              {t('challenges')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Problem */}
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">
                  {t('problem')}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">
                  {t('solution')}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Challenge Image 1 */}
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden"
              style={{
                background: adjustGradient(project.gradient, 45),
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/60 text-lg">Challenge Visual 1</span>
              </div>
            </div>

            {/* Challenge Image 2 */}
            <div
              className="aspect-[16/9] rounded-xl overflow-hidden"
              style={{
                background: adjustGradient(project.gradient, 90),
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/60 text-lg">Challenge Visual 2</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function adjustGradient(gradient: string, offset: number): string {
  const match = gradient.match(/linear-gradient\((\d+)deg/);
  if (match) {
    const newAngle = (parseInt(match[1]) + offset) % 360;
    return gradient.replace(/linear-gradient\(\d+deg/, `linear-gradient(${newAngle}deg`);
  }
  return gradient;
}
