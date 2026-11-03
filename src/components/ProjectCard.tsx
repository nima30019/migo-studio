'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/data/projects';
import { Locale, UI_STRINGS } from '@/data/translations';
import { TiltCard } from './TiltCard';
import { soundFx } from '@/utils/audio';
import { ArrowUpRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  locale: Locale;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, locale }) => {
  const isRTL = locale === 'fa';

  return (
    <TiltCard maxTilt={6} className="rounded-3xl h-full">
      <div className="group h-full rounded-3xl bg-[#15191F]/90 backdrop-blur-md border border-[#28303B] hover:border-brand-orange/60 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xl">
        {/* Visual Banner Canvas */}
        <div
          className={`relative h-60 sm:h-64 w-full bg-gradient-to-br ${project.visualGradient} border-b border-[#28303B] flex items-center justify-center overflow-hidden p-6`}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div
            className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ backgroundColor: project.heroAccent }}
          />

          {/* 3D Holographic Artifact Emblem */}
          <div className="relative z-10 w-24 h-24 rounded-3xl bg-[#0B0D10]/80 backdrop-blur-md border border-[#28303B] group-hover:border-brand-orange flex items-center justify-center text-brand-orange shadow-[0_0_30px_rgba(255,120,31,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <Layers className="w-10 h-10" />
          </div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-brand-orange bg-[#0B0D10]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#28303B]">
              {project.category[locale]}
            </span>
            <span className="text-xs font-mono text-[#A0A6B0] bg-[#0B0D10]/85 px-2.5 py-1 rounded-full border border-[#28303B]">
              {project.year}
            </span>
          </div>

          {/* Studio Prototype Disclaimer Badge */}
          <div className="absolute bottom-3 left-4 z-10">
            <span className="text-[10px] text-[#A0A6B0] bg-[#0B0D10]/80 px-2 py-0.5 rounded border border-[#28303B]">
              {locale === 'en' ? 'MIGO R&D Lab Prototype' : 'پروژه نمایشی استودیو MIGO'}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-orange transition-colors">
              {project.title[locale]}
            </h3>

            <p className="text-sm text-[#A0A6B0] line-clamp-2 leading-relaxed mb-6 font-light">
              {project.shortDescription[locale]}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] text-[#A0A6B0] bg-[#0B0D10] px-2.5 py-1 rounded-lg border border-[#28303B]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[11px] text-[#6B7280] px-1 py-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#28303B]/60 flex items-center justify-between">
            <Link
              href={`/${locale}/work/${project.slug}`}
              aria-label={`${UI_STRINGS.viewProject[locale]}: ${project.title[locale]}`}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors cursor-pointer"
            >
              <span>{UI_STRINGS.viewProject[locale]}</span>
              <ArrowUpRight
                aria-hidden="true"
                className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`}
              />
            </Link>
            <span className="text-xs text-[#6B7280] font-mono">
              {project.clientSample[locale].split('(')[0].trim()}
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};
