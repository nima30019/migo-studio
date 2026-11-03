import React from 'react';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SectionHeader } from '@/components/SectionHeader';
import { StartProjectForm } from '@/components/StartProjectForm';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';
import { Sparkles } from 'lucide-react';

interface StartProjectPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: StartProjectPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/start-project',
    title: locale === 'fa' ? 'شروع پروژه مشترک و برآورد زمان و هزینه' : 'Start a Project — Scoping & Estimation Onboarding',
    description:
      locale === 'fa'
        ? 'پرسشنامه آنلاین مشخصات پروژه استودیو MIGO جهت برآورد بودجه، انتخاب پلتفرم (VR/AR/3D) و دریافت پروپوزال فنی اولیه ظرف ۲۴ ساعت.'
        : 'Submit your interactive project vision to MIGO. Guided onboarding for scoping, platform selection (VR/AR/3D), timeline, and technical estimation.',
    keywords:
      locale === 'fa'
        ? ['سفارش ساخت واقعیت مجازی', 'برآورد هزینه نرم افزار سه بعدی', 'تعرفه غرفه تعاملی', 'پروپوزال فنی MIGO']
        : ['Start Interactive Project', 'VR Development Cost Estimate', 'Interactive Agency Scoping', 'XR Proposal'],
  });
}

export default function StartProjectPage({ params }: StartProjectPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'شروع پروژه' : 'Start a Project', path: '/start-project' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      <StructuredData id="start-project-breadcrumb-schema" data={breadcrumbSchema} />
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge={locale === 'en' ? 'Project Onboarding' : 'شروع همکاری'}
          title={UI_STRINGS.startProjectTitle[locale]}
          description={UI_STRINGS.startProjectSubtitle[locale]}
        />
      </section>

      {/* Interactive Questionnaire Form */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StartProjectForm locale={locale} />
      </section>
    </div>
  );
}
