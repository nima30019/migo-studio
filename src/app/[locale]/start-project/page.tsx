import React from 'react';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SectionHeader } from '@/components/SectionHeader';
import { StartProjectForm } from '@/components/StartProjectForm';
import { Sparkles } from 'lucide-react';

interface StartProjectPageProps {
  params: {
    locale: Locale;
  };
}

export default function StartProjectPage({ params }: StartProjectPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';

  return (
    <div className="pt-32 pb-24 space-y-16">
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
