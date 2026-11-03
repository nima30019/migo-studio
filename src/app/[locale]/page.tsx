import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { ARTICLES } from '@/data/articles';
import { INDUSTRIES, TECH_STACK, APPROACH_STEPS } from '@/data/general';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { StudioStatsMarquee } from '@/components/StudioStatsMarquee';
import { InteractiveScrollShowcase } from '@/components/InteractiveScrollShowcase';
import { TiltCard } from '@/components/TiltCard';
import { createLocalizedMetadata } from '@/utils/seo';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Clock,
  Calendar,
  Factory,
  GraduationCap,
  Landmark,
  Gamepad2,
  Presentation,
  Megaphone,
  Building2,
  LucideIcon,
} from 'lucide-react';

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  Factory,
  GraduationCap,
  Landmark,
  Gamepad2,
  Presentation,
  Megaphone,
  Building2,
};

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '',
    title:
      locale === 'fa'
        ? 'خلق تجربیات تعاملی، واقعیت مجازی و استودیو سه‌بعدی'
        : 'Creative Technology Studio — We Create Interactive Experiences',
    description:
      locale === 'fa'
        ? 'استودیو MIGO طراح و توسعه‌دهنده تجربیات تعاملی، سیستم‌های نمایشگاهی هوشمند، واقعیت مجازی (VR/MR)، بازی‌های سازمانی و شبیه‌سازی سه‌بعدی.'
        : 'MIGO designs and develops immersive digital experiences, interactive exhibitions, VR/AR, serious games, and photorealistic 3D simulations.',
    keywords:
      locale === 'fa'
        ? ['واقعیت مجازی', 'فناوری نمایشگاهی', 'طراحی سه‌بعدی', 'WebAR', 'شبیه‌سازی صنعتی', 'بازی تعاملی']
        : ['Interactive Experiences', 'Virtual Reality', 'Exhibition Tech', 'WebAR', 'Industrial VR'],
  });
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <div className="space-y-28 sm:space-y-36 pb-24">
      {/* 1. HERO WITH THREE.JS CANVAS & BRAND EMBLEM SHOWCASE */}
      <Hero locale={locale} />

      {/* 2. LIVE STUDIO STATS & MARQUEE TICKER */}
      <StudioStatsMarquee locale={locale} />

      {/* 3. CORE SERVICES WITH 3D PERSPECTIVE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Core Capabilities' : 'زمینه‌های فعالیت و خدمات'}
          title={UI_STRINGS.whatWeDo[locale]}
          description={UI_STRINGS.whatWeDoDesc[locale]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-[#15191F] border border-[#28303B] hover:border-brand-orange hover:shadow-glow-orange transition-all duration-300 cursor-pointer"
          >
            <span>{locale === 'en' ? 'Explore All 7 Specialized Disciplines' : 'مشاهده تمام خدمات و راهکارهای تخصصی'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* 4. APPLE / LUSION-INSPIRED INTERACTIVE CAPABILITY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveScrollShowcase locale={locale} />
      </section>

      {/* 5. SELECTED WORK WITH 3D TILT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            badge={locale === 'en' ? 'Portfolio System' : 'منتخب پروژه‌های تعاملی'}
            title={UI_STRINGS.selectedWork[locale]}
            description={UI_STRINGS.selectedWorkDesc[locale]}
            align="start"
            className="mb-0"
          />

          <Link
            href={`/${locale}/work`}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors cursor-pointer"
          >
            <span>{UI_STRINGS.viewAllWork[locale]}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      </section>

      {/* 6. OUR APPROACH (Process Timeline) */}
      <section className="bg-[#15191F]/40 border-y border-[#28303B]/60 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={locale === 'en' ? 'Methodology' : 'متدولوژی چهارمرحله‌ای'}
            title={UI_STRINGS.ourApproach[locale]}
            description={UI_STRINGS.ourApproachDesc[locale]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((item, idx) => (
              <TiltCard key={idx} maxTilt={6} className="rounded-3xl">
                <div className="h-full relative p-7 sm:p-8 rounded-3xl bg-[#0B0D10]/90 backdrop-blur-md border border-[#28303B] hover:border-brand-orange/60 transition-all flex flex-col justify-between group shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#28303B] group-hover:text-brand-orange transition-colors">
                        {item.step}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-brand-orange/40 group-hover:bg-brand-orange shadow-[0_0_12px_#FF781F] transition-all" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors">
                      {item.title[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed font-light">
                      {item.desc[locale]}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Key Sectors' : 'صنایع هدف'}
          title={UI_STRINGS.industries[locale]}
          description={
            locale === 'en'
              ? 'Our spatial interactive solutions solve high-stakes challenges across diverse industries.'
              : 'راهکارهای فضایی و تعاملی ما چالش‌های کلیدی صنایع مختلف را با بهره‌وری بالا برطرف می‌سازند.'
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind) => {
            const IconComp = INDUSTRY_ICONS[ind.icon] || Layers;
            return (
              <TiltCard key={ind.id} maxTilt={6} className="rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-[#15191F]/90 border border-[#28303B] hover:border-brand-orange/60 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#0B0D10] border border-[#28303B] flex items-center justify-center text-brand-orange mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white mb-2">
                      {ind.name[locale]}
                    </h3>
                    <p className="text-xs text-[#A0A6B0] leading-relaxed font-light">
                      {ind.desc[locale]}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Engine Ecosystem' : 'زیرساخت‌های فنی'}
          title={UI_STRINGS.techStackHeadline[locale]}
          description={UI_STRINGS.techStackDesc[locale]}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#15191F]/90 border border-[#28303B] hover:border-brand-orange/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-brand-orange" />
                <h4 className="font-display font-bold text-sm text-white">{tech.name}</h4>
              </div>
              <p className="text-[11px] font-semibold text-brand-orange mb-1 font-mono">{tech.category}</p>
              <p className="text-xs text-[#A0A6B0] leading-relaxed font-light">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#15191F] via-[#20252D] to-[#0B0D10] border border-[#28303B] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-orange mb-3 block">
              {locale === 'en' ? 'ABOUT MIGO STUDIO' : 'درباره استودیو MIGO'}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mb-6 leading-tight">
              {UI_STRINGS.aboutPreviewHeadline[locale]}
            </h2>
            <p className="text-base sm:text-lg text-[#A0A6B0] leading-relaxed mb-8 font-light">
              {UI_STRINGS.aboutPreviewText[locale]}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange hover:shadow-glow-orange-lg transition-all"
            >
              <span>{UI_STRINGS.learnMoreAboutUs[locale]}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. INSIGHTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge={locale === 'en' ? 'Editorial' : 'دانش و نوآوری'}
            title={UI_STRINGS.insightsHeadline[locale]}
            description={
              locale === 'en'
                ? 'Engineering thoughts, spatial trends, and architectural breakdowns from our creative team.'
                : 'دیدگاه‌های فنی، روندهای رایانش فضایی و تحلیل‌های معماری دیجیتال از تیم تحقیق و توسعه MIGO.'
            }
            align="start"
            className="mb-0"
          />

          <Link
            href={`/${locale}/insights`}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors cursor-pointer"
          >
            <span>{locale === 'en' ? 'View All Articles' : 'مشاهده تمام مقالات'}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {recentArticles.map((article) => (
            <TiltCard key={article.id} maxTilt={6} className="rounded-3xl">
              <div className="h-full rounded-3xl bg-[#15191F]/90 backdrop-blur-md border border-[#28303B] hover:border-brand-orange/60 p-7 flex flex-col justify-between transition-all shadow-xl">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
                    <span className="text-brand-orange font-mono font-semibold">{article.category[locale]}</span>
                    <div className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime[locale]}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {article.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed line-clamp-3 mb-6 font-light">
                    {article.excerpt[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#28303B]/60 flex items-center justify-between">
                  <span className="text-xs text-[#6B7280] font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </span>
                  <Link
                    href={`/${locale}/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    <span>{UI_STRINGS.readArticle[locale]}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 11. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-radial-glow border border-brand-orange/50 p-10 sm:p-20 text-center relative overflow-hidden shadow-[0_0_60px_rgba(255,120,31,0.25)]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange mx-auto mb-6 shadow-glow-orange">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight">
              {UI_STRINGS.finalCtaHeadline[locale]}
            </h2>

            <p className="text-base sm:text-lg text-[#A0A6B0] mb-10 leading-relaxed font-light">
              {UI_STRINGS.finalCtaDesc[locale]}
            </p>

            <Link
              href={`/${locale}/start-project`}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-extrabold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
            >
              <span>{UI_STRINGS.startProject[locale]}</span>
              <ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
