import React from 'react';
import { Locale } from '@/data/translations';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fa' }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className="dark">
      <body className="min-h-screen flex flex-col bg-[#08090C] text-[#F3F4F6] antialiased selection:bg-brand-orange selection:text-black">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
