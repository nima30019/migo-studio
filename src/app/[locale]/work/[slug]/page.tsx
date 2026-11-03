import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, UI_STRINGS } from '@/data/translations';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/utils/schema';
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Cpu,
  Target,
  Lightbulb,
  Wrench,
  Trophy,
} from 'lucide-react';

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'fa'];
  const params: Array<{ locale: Locale; slug: string }> = [];

  locales.forEach((locale) => {
    PROJECTS.forEach((project) => {
      params.push({ locale, slug: project.slug });
    });
  });

  return params;
}

interface ProjectDetailPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return createLocalizedMetadata({
      locale,
      title: 'Project Not Found',
      noIndex: true,
    });
  }

  return createLocalizedMetadata({
    locale,
    path: `/work/${project.slug}`,
    title: project.title[locale],
    description: project.shortDescription[locale],
    keywords: [
      ...project.technologies,
      project.category[locale],
      locale === 'fa' ? 'پروژه استودیو MIGO' : 'MIGO Studio Project',
    ],
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id && p.categoryKey === project.categoryKey
  ).slice(0, 2);

  const fallbackRelated =
    relatedProjects.length > 0
      ? relatedProjects
      : PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  const creativeWorkSchema = getCreativeWorkSchema(project, locale);
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'نمونه‌کارها' : 'Work', path: '/work' },
      { name: project.title[locale], path: `/work/${project.slug}` },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-20">
      <StructuredData id="project-case-study-schema" data={[creativeWorkSchema, breadcrumbSchema]} />
      {/* 1. HERO HEADER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/work`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A0A6B0] hover:text-white bg-[#15191F] px-3.5 py-1.5 rounded-full border border-[#28303B] hover:border-brand-orange transition-colors mb-8"
        >
          <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{locale === 'en' ? 'Back to All Projects' : 'بازگشت به آرشیو پروژه‌ها'}</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
            {project.category[locale]}
          </span>
          <span className="text-xs text-[#A0A6B0] font-mono bg-[#15191F] px-2.5 py-1 rounded-full border border-[#28303B]">
            {project.year}
          </span>
          <span className="text-xs text-[#6B7280] bg-[#15191F] px-2.5 py-1 rounded-full border border-[#28303B]">
            {project.clientSample[locale]}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
          {project.title[locale]}
        </h1>

        <p className="text-lg sm:text-xl text-[#A0A6B0] leading-relaxed">
          {project.fullOverview[locale]}
        </p>
      </section>

      {/* 2. VISUAL SHOWCASE BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`h-72 sm:h-96 rounded-3xl bg-gradient-to-br ${project.visualGradient} border border-[#28303B] relative flex items-center justify-center overflow-hidden p-8`}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div
            className="w-40 h-40 rounded-full blur-3xl opacity-30 absolute"
            style={{ backgroundColor: project.heroAccent }}
          />

          <div className="relative z-10 text-center">
            <div className="w-24 h-24 rounded-3xl bg-[#0B0D10]/80 border border-[#28303B] flex items-center justify-center text-brand-orange shadow-glow-orange mx-auto mb-4">
              <Layers className="w-12 h-12" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A0A6B0]">
              {locale === 'en' ? 'MIGO Interactive Rig & Simulation' : 'شبیه‌ساز و بستر تعاملی استودیو'}
            </span>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGE, SOLUTION, IMPLEMENTATION TRIO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Challenge */}
          <div className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B]">
            <div className="flex items-center gap-2 mb-3 text-red-400">
              <Target className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-base text-white">
                {UI_STRINGS.projectChallenge[locale]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed">
              {project.challenge[locale]}
            </p>
          </div>

          {/* Solution */}
          <div className="p-7 rounded-2xl bg-[#15191F] border border-brand-orange/40 shadow-glow-orange">
            <div className="flex items-center gap-2 mb-3 text-brand-orange">
              <Lightbulb className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-base text-white">
                {UI_STRINGS.creativeSolution[locale]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed">
              {project.solution[locale]}
            </p>
          </div>

          {/* Technical Implementation */}
          <div className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B]">
            <div className="flex items-center gap-2 mb-3 text-brand-orange">
              <Wrench className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-base text-white">
                {UI_STRINGS.technicalImplementation[locale]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed">
              {project.technicalImplementation[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES & OUTCOMES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technologies */}
          <div className="p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-lg text-white">
                {UI_STRINGS.technologiesUsed[locale]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0B0D10] border border-[#28303B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-brand-orange" />
              <h3 className="font-display font-bold text-lg text-white">
                {UI_STRINGS.outcomes[locale]}
              </h3>
            </div>

            <ul className="space-y-3">
              {project.outcomes[locale].map((metric, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0A6B0]">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. RELATED PROJECTS */}
      {fallbackRelated.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display font-bold text-2xl text-white mb-8">
            {UI_STRINGS.relatedProjects[locale]}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            {fallbackRelated.map((p) => (
              <ProjectCard key={p.id} project={p} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* 6. PROJECT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-radial-glow border border-brand-orange/40">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            {locale === 'en'
              ? 'Have a Similar Vision in Mind?'
              : 'ایده مشابهی برای پروژه خود دارید؟'}
          </h2>
          <p className="text-sm text-[#A0A6B0] max-w-md mx-auto mb-6">
            {locale === 'en'
              ? 'We will consult on the technical feasibility, sensor selection, and production timeline.'
              : 'ما امکان‌سنجی فنی، انتخاب سنسورها و سخت‌افزار مناسب و زمان‌بندی دقیق تولید را برای شما مشخص می‌کنیم.'}
          </p>
          <Link
            href={`/${locale}/start-project`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange transition-all"
          >
            <span>{UI_STRINGS.startProject[locale]}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
