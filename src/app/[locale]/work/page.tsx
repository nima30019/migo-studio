import React from 'react';
import { Locale, UI_STRINGS } from '@/data/translations';
import { PROJECTS } from '@/data/projects';
import { SectionHeader } from '@/components/SectionHeader';
import { PortfolioGrid } from '@/components/PortfolioGrid';

interface WorkPageProps {
  params: {
    locale: Locale;
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';

  return (
    <div className="pt-32 pb-24 space-y-16">
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
