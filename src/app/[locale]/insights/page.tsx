import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { ARTICLES } from '@/data/articles';
import { SectionHeader } from '@/components/SectionHeader';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';
import { Clock, Calendar, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';

interface InsightsPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: InsightsPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/insights',
    title: locale === 'fa' ? 'مقالات و بینش‌های تخصصی فناوری خلاق' : 'Insights & Technical Editorial in Spatial Computing',
    description:
      locale === 'fa'
        ? 'مجموعه مقالات و بررسی‌های تخصصی استودیو MIGO پیرامون آینده واقعیت مجازی، استانداردهای WebAR، تعاملات نمایشگاهی و شبیه‌سازها.'
        : 'In-depth articles and technical analysis from MIGO Studio on the future of virtual reality, WebAR engineering, and interactive systems.',
    keywords:
      locale === 'fa'
        ? ['مقالات واقعیت مجازی', 'آموزش WebAR', 'فناوری نمایشگاهی', 'شبیه‌سازی صنعتی', 'نشریه MIGO']
        : ['Spatial Computing Articles', 'VR Insights', 'WebAR Tutorials', 'Interactive Tech Editorial'],
  });
}

export default function InsightsPage({ params }: InsightsPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const standardArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id);

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'مقالات' : 'Insights', path: '/insights' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      <StructuredData id="insights-breadcrumb-schema" data={breadcrumbSchema} />
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge={locale === 'en' ? 'MIGO Editorial' : 'دانشنامه و نشریه MIGO'}
          title={
            locale === 'en' ? (
              <>
                Insights in <span className="text-gradient-orange">Spatial Computing</span>
              </>
            ) : (
              <>
                تحلیل‌ها و مقالات تخصصی <span className="text-gradient-orange">رایانش فضایی</span>
              </>
            )
          }
          description={
            locale === 'en'
              ? 'In-depth perspectives on virtual reality, WebAR trends, exhibition engagement, and interactive engineering.'
              : 'دیدگاه‌های تحلیلی پیرامون آینده واقعیت مجازی، استانداردهای WebAR، چیدمان‌های تعاملی و فناوری‌های بازی‌های جدی.'
          }
        />
      </section>

      {/* Featured Article Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#15191F] via-[#20252D] to-[#15191F] border border-[#28303B] hover:border-brand-orange/60 transition-all p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs text-[#A0A6B0] mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-brand-orange px-2.5 py-1 rounded-md">
                  {locale === 'en' ? 'Featured Story' : 'مقاله برگزیده'}
                </span>
                <span className="text-brand-orange font-semibold">
                  {featuredArticle.category[locale]}
                </span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredArticle.readTime[locale]}</span>
                </div>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-4 leading-tight">
                {featuredArticle.title[locale]}
              </h2>

              <p className="text-sm sm:text-base text-[#A0A6B0] leading-relaxed mb-6">
                {featuredArticle.excerpt[locale]}
              </p>

              <Link
                href={`/${locale}/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange transition-all text-sm"
              >
                <span>{UI_STRINGS.readArticle[locale]}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            <div className="hidden lg:flex w-48 h-48 rounded-2xl bg-[#0B0D10] border border-[#28303B] items-center justify-center text-brand-orange shadow-inner shrink-0">
              <BookOpen className="w-16 h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-display font-bold text-xl text-white mb-8">
          {locale === 'en' ? 'Recent Publications' : 'سایر مقالات منتشر شده'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {standardArticles.map((article) => (
            <div
              key={article.id}
              className="group rounded-2xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/60 p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
                  <span className="text-brand-orange font-semibold">
                    {article.category[locale]}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime[locale]}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {article.title[locale]}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt[locale]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#28303B]/60 flex items-center justify-between">
                <span className="text-xs text-[#6B7280] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </span>

                <Link
                  href={`/${locale}/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-brand-orange transition-colors"
                >
                  <span>{UI_STRINGS.readArticle[locale]}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
