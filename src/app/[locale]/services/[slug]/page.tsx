import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/utils/schema';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Layers,
  Sparkles,
  Compass,
} from 'lucide-react';

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'fa'];
  const params: Array<{ locale: Locale; slug: string }> = [];

  locales.forEach((locale) => {
    SERVICES.forEach((service) => {
      params.push({ locale, slug: service.slug });
    });
  });

  return params;
}

interface ServiceDetailPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return createLocalizedMetadata({
      locale,
      title: 'Service Not Found',
      noIndex: true,
    });
  }

  return createLocalizedMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: service.title[locale],
    description: service.shortDescription[locale],
    keywords: [
      ...service.technologies,
      service.badge[locale],
      locale === 'fa' ? 'خدمات تعاملی MIGO' : 'MIGO Interactive Services',
    ],
  });
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  // Find relevant projects
  const relevantProjects = PROJECTS.filter((p) =>
    service.relevantProjects.includes(p.id)
  );

  const serviceSchema = getServiceSchema(service, locale);
  const faqSchema = getFAQSchema(service.faqs, locale);
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'خدمات' : 'Services', path: '/services' },
      { name: service.title[locale], path: `/services/${service.slug}` },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-24">
      <StructuredData id="service-page-schema" data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href={`/${locale}/services`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A0A6B0] hover:text-white bg-[#15191F] px-3.5 py-1.5 rounded-full border border-[#28303B] hover:border-brand-orange transition-colors mb-8"
        >
          <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{locale === 'en' ? 'Back to All Services' : 'بازگشت به فهرست خدمات'}</span>
        </Link>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/20 mb-4">
          {service.badge[locale]}
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
          {service.title[locale]}
        </h1>

        <p className="text-lg sm:text-xl text-[#A0A6B0] max-w-3xl mx-auto leading-relaxed">
          {service.shortDescription[locale]}
        </p>
      </section>

      {/* 2. DETAILED OVERVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#15191F] border border-[#28303B] p-8 sm:p-12 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 text-brand-orange">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {UI_STRINGS.overview[locale]}
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#F5F5F5] leading-relaxed">
            {service.overview[locale]}
          </p>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Scope of Execution' : 'محدوده اجرایی'}
          title={UI_STRINGS.capabilities[locale]}
          description={
            locale === 'en'
              ? 'Our end-to-end technical scope covers design, development, sensor integration, and maintenance.'
              : 'دامنه فنی استودیو MIGO شامل طراحی مفهومی، کدنویسی، اتصال سنسورها و استقرار نهایی است.'
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.capabilities[locale].map((cap, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/50 flex items-start gap-3.5 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <span className="text-sm text-[#F5F5F5] leading-relaxed">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REAL-WORLD USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Industry Applications' : 'کاربردها'}
          title={UI_STRINGS.useCases[locale]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.useCases.map((uc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#20252D] text-brand-orange flex items-center justify-center font-mono font-bold text-xs mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {uc.title[locale]}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed">
                {uc.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECHNOLOGIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#15191F] border border-[#28303B] p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-brand-orange" />
            <h3 className="font-display font-bold text-xl text-white">
              {UI_STRINGS.technologiesUsed[locale]}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0B0D10] border border-[#28303B]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELEVANT PROJECTS */}
      {relevantProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={locale === 'en' ? 'Case Demonstrations' : 'نمونه‌های مرتبط'}
            title={UI_STRINGS.relatedProjects[locale]}
            description={
              locale === 'en'
                ? 'Selected projects showcasing this technical discipline in action.'
                : 'منتخبی از پروژه‌هایی که این تخصص فنی در آن‌ها به کار گرفته شده است.'
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {relevantProjects.map((p) => (
              <ProjectCard key={p.id} project={p} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={locale === 'en' ? 'Clarifications' : 'سوالات پرتکرار'}
            title={UI_STRINGS.faq[locale]}
          />

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#15191F] border border-[#28303B]"
              >
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <h4 className="font-display font-bold text-base text-white">
                    {faq.q[locale]}
                  </h4>
                </div>
                <p className="text-sm text-[#A0A6B0] leading-relaxed ps-8">
                  {faq.a[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. CONTACT CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-radial-glow border border-brand-orange/40 p-10 sm:p-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-3">
            {locale === 'en'
              ? `Ready to Deploy ${service.title[locale]}?`
              : `آماده پیاده‌سازی پروژه در حوزه ${service.title[locale]} هستید؟`}
          </h2>
          <p className="text-sm sm:text-base text-[#A0A6B0] max-w-xl mx-auto mb-8 leading-relaxed">
            {locale === 'en'
              ? 'Schedule a scoping call with our technical lead to discuss architecture, timeline, and deliverables.'
              : 'جلسه‌ای جهت بررسی ابعاد فنی، زمان‌بندی و معماری اجرایی پروژه با تیم فنی MIGO هماهنگ کنید.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/start-project`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange transition-all"
            >
              <span>{UI_STRINGS.startProject[locale]}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#15191F] border border-[#28303B] hover:border-brand-orange transition-all"
            >
              <span>{UI_STRINGS.contactUs[locale]}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
