import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/services',
    title: locale === 'fa' ? 'زمینه‌های فعالیت و خدمات تخصصی' : 'Specialized Creative Technology Services',
    description:
      locale === 'fa'
        ? 'مشاهده ۷ زمینه تخصصی استودیو MIGO: واقعیت مجازی و ترکیبی، واقعیت افزوده، بازی‌های تعاملی، فناوری‌های نمایشگاهی، مدل‌سازی سه‌بعدی و شبیه‌سازی صنعتی.'
        : 'Explore MIGO studio capabilities: VR/MR, Augmented Reality, Game Development, Kinetic Exhibition Installations, 3D Visualization, and Industrial Simulation.',
    keywords:
      locale === 'fa'
        ? ['خدمات واقعیت مجازی', 'فناوری نمایشگاهی', 'طراحی بازی تعاملی', 'شبیه‌سازی صنعتی', 'توسعه WebAR']
        : ['VR Development Services', 'Interactive Exhibitions', 'Enterprise Game Dev', 'Industrial VR Simulation'],
  });
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';
  const showcaseProjects = PROJECTS.slice(0, 3);

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'خدمات' : 'Services', path: '/services' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-24">
      <StructuredData id="services-breadcrumb-schema" data={breadcrumbSchema} />
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge={locale === 'en' ? 'MIGO Studio Capabilities' : 'قابلیت‌ها و حوزه‌های تخصصی MIGO'}
          title={
            locale === 'en' ? (
              <>
                End-to-End <span className="text-gradient-orange">Interactive</span> Engineering
              </>
            ) : (
              <>
                مهندسی جامع راهکارهای <span className="text-gradient-orange">تعاملی و سه‌بعدی</span>
              </>
            )
          }
          description={
            locale === 'en'
              ? 'From standalone spatial computing and kinetic exhibitions to industrial simulation and serious games, we deliver turnkey interactive systems built for enterprise impact.'
              : 'از رایانش فضایی و چیدمان‌های تعاملی نمایشگاهی تا شبیه‌سازی‌های پیشرفته صنعتی و بازی‌های جدی، استودیو MIGO سیستم‌های تعاملی کامل با استانداردهای سازمانی ارائه می‌دهد.'
          }
        />
      </section>

      {/* All 7 Services Disciplines Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>
      </section>

      {/* Selected Relevant Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <SectionHeader
            badge={locale === 'en' ? 'Applied Work' : 'پروژه‌های اجرا شده'}
            title={locale === 'en' ? 'How Our Services Come to Life' : 'نمونه پیاده‌سازی خدمات در پروژه‌ها'}
            description={
              locale === 'en'
                ? 'Explore practical implementations of our core interactive capabilities.'
                : 'بررسی پیاده‌سازی‌های عملی توانمندی‌های تعاملی MIGO در قالب پروژه‌های واقعی.'
            }
            align="start"
            className="mb-0"
          />
          <Link
            href={`/${locale}/work`}
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-white transition-colors"
          >
            <span>{UI_STRINGS.viewAllWork[locale]}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {showcaseProjects.map((p) => (
            <ProjectCard key={p.id} project={p} locale={locale} />
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#15191F] via-[#20252D] to-[#15191F] border border-[#28303B] p-10 sm:p-14 text-center">
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-3">
            {locale === 'en'
              ? 'Need a Tailored Interactive Solution?'
              : 'نیاز به راهکار تعاملی اختصاصی دارید؟'}
          </h2>
          <p className="text-sm sm:text-base text-[#A0A6B0] max-w-xl mx-auto mb-8">
            {locale === 'en'
              ? 'Our software architects and 3D artists will audit your requirements and propose the optimal interactive stack.'
              : 'معماران نرم‌افزار و هنرمندان سه‌بعدی ما نیازمندی‌های پروژه شما را ارزیابی کرده و بهترین معماری فنی را پیشنهاد می‌دهند.'}
          </p>
          <Link
            href={`/${locale}/start-project`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange transition-all"
          >
            <span>{UI_STRINGS.startProject[locale]}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
