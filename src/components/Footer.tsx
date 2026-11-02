'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, NAV_ITEMS, UI_STRINGS } from '@/data/translations';
import { SERVICES } from '@/data/services';
import { getAssetPath } from '@/utils/asset';
import { Globe, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isRTL = locale === 'fa';

  const otherLocale: Locale = locale === 'en' ? 'fa' : 'en';
  let targetPath = pathname;
  if (pathname.startsWith('/en')) {
    targetPath = pathname.replace(/^\/en/, `/${otherLocale}`);
  } else if (pathname.startsWith('/fa')) {
    targetPath = pathname.replace(/^\/fa/, `/${otherLocale}`);
  } else {
    targetPath = `/${otherLocale}`;
  }

  return (
    <footer className="bg-[#08090C] border-t border-white/[0.08] text-neutral-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 group">
              <div className="flex items-center">
                <img
                  src={getAssetPath('/migo-logo-transparent.png')}
                  alt="MIGO Studio Logo"
                  className="h-10 sm:h-11 w-auto max-w-[90px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-wider group-hover:text-brand-orange transition-colors">
                  MIGO
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-orange font-mono">
                  {locale === 'en' ? 'Interactive Experiences Studio' : 'استودیو تجربیات تعاملی'}
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm font-light">
              {UI_STRINGS.footerDesc[locale]}
            </p>

            <div className="pt-2">
              <Link
                href={targetPath}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-[#12151B] border border-white/[0.08] hover:border-brand-orange transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-brand-orange" />
                <span>{locale === 'en' ? 'تغییر به نسخه فارسی' : 'Switch to English Version'}</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              {locale === 'en' ? 'Studio' : 'استودیو'}
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href(locale)}
                    className="hover:text-white transition-colors flex items-center gap-1 group text-xs"
                  >
                    <span>{item.label[locale]}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${locale}/start-project`}
                  className="text-brand-orange hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <span>{UI_STRINGS.startProject[locale]}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              {locale === 'en' ? 'Capabilities' : 'حوزه‌های تخصصی'}
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="hover:text-white transition-colors text-xs line-clamp-1"
                  >
                    {service.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              {locale === 'en' ? 'Connect' : 'ارتباط با ما'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-500">
                    {locale === 'en' ? 'Project Inquiries' : 'درخواست پروژه و استعلام'}
                  </span>
                  <span className="text-white font-mono">projects@migo-studio.com</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-500">
                    {locale === 'en' ? 'Studio Phone' : 'تلفن تماس'}
                  </span>
                  <span className="text-white font-mono" dir="ltr">+98 (21) 8800-MIGO</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-500">
                    {locale === 'en' ? 'Headquarters' : 'آدرس استودیو'}
                  </span>
                  <span className="text-white">
                    {locale === 'en' ? 'Creative Tech Campus' : 'تهران، پارک فناوری و نوآوری دیجیتال'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {currentYear} MIGO Creative Technology Studio. {UI_STRINGS.rightsReserved[locale]}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              {locale === 'en' ? 'Privacy Policy' : 'حریم خصوصی'}
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              {locale === 'en' ? 'Terms of Service' : 'شرایط استفاده'}
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              {locale === 'en' ? 'Security Standards' : 'استانداردها'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
