'use client';

import React, { useState } from 'react';
import { ProjectItem, PROJECT_CATEGORIES } from '@/data/projects';
import { Locale } from '@/data/translations';
import { ProjectCard } from './ProjectCard';
import { Filter } from 'lucide-react';

interface PortfolioGridProps {
  projects: ProjectItem[];
  locale: Locale;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, locale }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B7280] px-2">
          <Filter className="w-3.5 h-3.5" />
          <span>{locale === 'en' ? 'Filter:' : 'دسته‌بندی:'}</span>
        </div>
        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-orange text-white shadow-glow-orange'
                  : 'bg-[#15191F] text-[#A0A6B0] hover:text-white border border-[#28303B] hover:border-brand-orange/40'
              }`}
            >
              {cat.label[locale]}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 rounded-2xl bg-[#15191F] border border-[#28303B]">
          <p className="text-sm text-[#A0A6B0]">
            {locale === 'en'
              ? 'No projects found in this category.'
              : 'پروژه‌ای در این دسته‌بندی یافت نشد.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
};
