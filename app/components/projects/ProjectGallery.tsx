'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/app/data/projects-detail';

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Generate gallery items (3-5 placeholder images based on gradient)
  const galleryItems = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    gradient: adjustGradient(project.gradient, i * 20),
    label: `${project.title} - View ${i + 1}`,
  }));

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    const ref = scrollRef.current;
    ref?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      ref?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Gallery scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[80%] md:w-[60%] lg:w-[45%]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div
              className="aspect-[16/10] rounded-xl overflow-hidden"
              style={{ background: item.gradient }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/60 text-lg">{item.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Helper function to slightly adjust gradient colors for variety
function adjustGradient(gradient: string, offset: number): string {
  // Simple hue rotation simulation by adjusting the angle
  const match = gradient.match(/linear-gradient\((\d+)deg/);
  if (match) {
    const newAngle = (parseInt(match[1]) + offset) % 360;
    return gradient.replace(/linear-gradient\(\d+deg/, `linear-gradient(${newAngle}deg`);
  }
  return gradient;
}
