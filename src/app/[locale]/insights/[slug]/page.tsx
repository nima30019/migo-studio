import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, UI_STRINGS } from '@/data/translations';
import { ARTICLES } from '@/data/articles';
import { ShareButton } from '@/components/ShareButton';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getArticleSchema, getBreadcrumbSchema } from '@/utils/schema';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
} from 'lucide-react';

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'fa'];
  const params: Array<{ locale: Locale; slug: string }> = [];

  locales.forEach((locale) => {
    ARTICLES.forEach((article) => {
      params.push({ locale, slug: article.slug });
    });
  });

  return params;
}

interface ArticleDetailPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    return createLocalizedMetadata({
      locale,
      title: 'Article Not Found',
      noIndex: true,
    });
  }

  return createLocalizedMetadata({
    locale,
    path: `/insights/${article.slug}`,
    title: article.title[locale],
    description: article.excerpt[locale],
    type: 'article',
    publishedTime: article.date,
    authors: [article.author],
    keywords: [
      ...article.tags,
      article.category[locale],
      locale === 'fa' ? 'مقاله MIGO' : 'MIGO Article',
    ],
  });
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const articleSchema = getArticleSchema(article, locale);
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'مقالات' : 'Insights', path: '/insights' },
      { name: article.title[locale], path: `/insights/${article.slug}` },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      <StructuredData id="article-jsonld-schema" data={[articleSchema, breadcrumbSchema]} />
      {/* 1. ARTICLE HEADER */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/insights`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A0A6B0] hover:text-white bg-[#15191F] px-3.5 py-1.5 rounded-full border border-[#28303B] hover:border-brand-orange transition-colors mb-8"
        >
          <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{locale === 'en' ? 'Back to All Articles' : 'بازگشت به فهرست مقالات'}</span>
        </Link>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#A0A6B0] mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-white bg-brand-orange px-2.5 py-1 rounded-md">
            {article.category[locale]}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime[locale]}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            <span>{article.author}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-8 leading-tight">
          {article.title[locale]}
        </h1>

        {/* Excerpt Lead */}
        <div className="p-6 rounded-2xl bg-[#15191F] border-l-4 border-brand-orange text-base sm:text-lg text-[#F5F5F5] leading-relaxed mb-12">
          {article.excerpt[locale]}
        </div>

        {/* Structured Content */}
        <div className="space-y-10 text-sm sm:text-base text-[#A0A6B0] leading-relaxed">
          {article.content[locale].map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white pt-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Tags & Sharing */}
        <div className="mt-14 pt-8 border-t border-[#28303B] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-brand-orange" />
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#15191F] border border-[#28303B] text-xs text-[#A0A6B0]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#6B7280]">
              {locale === 'en' ? 'Share:' : 'اشتراک‌گذاری:'}
            </span>
            <ShareButton locale={locale} />
          </div>
        </div>
      </article>

      {/* 2. RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-[#28303B]/60">
          <h3 className="font-display font-bold text-xl text-white mb-6">
            {locale === 'en' ? 'Related Reading' : 'مطالب مرتبط'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/${locale}/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-semibold text-brand-orange uppercase mb-2 block">
                    {rel.category[locale]}
                  </span>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-brand-orange transition-colors mb-2">
                    {rel.title[locale]}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-xs text-brand-orange font-semibold mt-4">
                  <span>{UI_STRINGS.readArticle[locale]}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
