import React from 'react';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { PROJECTS } from '@/data/projects';
import { SectionHeader } from '@/components/SectionHeader';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';

interface WorkPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/work',
    title: locale === 'fa' ? 'نمونه‌کارها و پروژه‌های تعاملی' : 'Selected Work & Interactive Case Studies',
    description:
      locale === 'fa'
        ? 'مشاهده پروژه‌های برگزیده استودیو MIGO: شبیه‌سازهای صنعتی واقعیت مجازی، دیوارهای تعاملی نمایشگاهی، WebAR و بازی‌های تجاری.'
        : 'Explore MIGO studio portfolio: Industrial VR Maintenance trainers, Kinetic Exhibition walls, WebAR configurators, and Serious Games.',
    keywords:
      locale === 'fa'
        ? ['نمونه کار واقعیت مجازی', 'پروژه‌های نمایشگاهی', 'نمونه کار WebAR', 'شبیه‌ساز سه بعدی', 'پروژه‌های استودیو MIGO']
        : ['VR Portfolio', 'Interactive Installations Showcase', 'WebAR Case Studies', 'Creative Tech Projects'],
  });
}

export default function WorkPage({ params }: WorkPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'نمونه‌کارها' : 'Work', path: '/work' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      <StructuredData id="work-breadcrumb-schema" data={breadcrumbSchema} />
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge={locale === 'en' ? 'Portfolio System' : 'آرشیو پروژه‌ها'}
          title={
            locale === 'en' ? (
              <>
                Selected <span className="text-gradient-orange">Interactive</span> Work
              </>
            ) : (
              <>
                مجموعه پروژه‌های <span className="text-gradient-orange">تعاملی و دیجیتال</span>
              </>
            )
          }
          description={
            locale === 'en'
              ? 'Browse our multidisciplinary projects across Virtual Reality, WebAR, Kinetic Exhibition walls, and Real-Time 3D.'
              : 'کاوش در پروژه‌های چندرشته‌ای استودیو MIGO در حوزه‌های واقعیت مجازی، واقعیت افزوده وب، چیدمان‌های نمایشگاهی و شبیه‌سازی‌های صنعتی.'
          }
        />
      </section>

      {/* Interactive Filter Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGrid projects={PROJECTS} locale={locale} />
      </section>
    </div>
  );
}
