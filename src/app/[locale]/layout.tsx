import React from 'react';
import { Metadata } from 'next';
import { Locale } from '@/data/translations';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { StructuredData } from '@/components/StructuredData';
import { getOrganizationSchema, getWebSiteSchema } from '@/utils/schema';
import { createLocalizedMetadata } from '@/utils/seo';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fa' }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '',
  });
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const organizationSchema = getOrganizationSchema(locale);
  const webSiteSchema = getWebSiteSchema(locale);

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className="dark">
      <head>
        {/* Core Global JSON-LD Schemas */}
        <StructuredData id="migo-organization-schema" data={organizationSchema} />
        <StructuredData id="migo-website-schema" data={webSiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#08090C] text-[#F3F4F6] antialiased selection:bg-brand-orange selection:text-black">
        {/* Google Analytics 4 integration */}
        <GoogleAnalytics />

        {/* Global Navigation */}
        <Navbar locale={locale} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
