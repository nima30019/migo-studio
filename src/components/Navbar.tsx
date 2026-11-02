'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, NAV_ITEMS, UI_STRINGS } from '@/data/translations';
import { getAssetPath } from '@/utils/asset';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  locale: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherLocale: Locale = locale === 'en' ? 'fa' : 'en';
  let targetPath = pathname;
  if (pathname.startsWith('/en')) {
    targetPath = pathname.replace(/^\/en/, `/${otherLocale}`);
  } else if (pathname.startsWith('/fa')) {
    targetPath = pathname.replace(/^\/fa/, `/${otherLocale}`);
  } else {
    targetPath = `/${otherLocale}`;
  }

  const isRTL = locale === 'fa';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Elegant Transparent Logo */}
            <div className="flex items-center transition-transform duration-200 group-hover:scale-105">
              <img
                src={getAssetPath('/migo-logo-transparent.png')}
                alt="MIGO Studio Logo"
                className="h-10 sm:h-11 w-auto max-w-[90px] object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-lg text-white tracking-wide group-hover:text-brand-orange transition-colors">
                MIGO
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-mono">
                {locale === 'en' ? 'Creative Tech Studio' : 'استودیو فناوری خلاق'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12151B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            {NAV_ITEMS.map((item) => {
              const href = item.href(locale);
              const isActive =
                item.key === 'home'
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.startsWith(href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-brand-orange shadow-[0_0_15px_rgba(255,120,31,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={targetPath}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-400 hover:text-white bg-[#12151B] border border-white/[0.08] hover:border-brand-orange/60 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>{locale === 'en' ? 'فارسی' : 'EN'}</span>
            </Link>

            <Link
              href={`/${locale}/start-project`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-brand-orange hover:bg-brand-orange-hover transition-all duration-200 shadow-[0_0_20px_rgba(255,120,31,0.35)] hover:shadow-[0_0_25px_rgba(255,120,31,0.5)] hover:scale-105 active:scale-95"
            >
              <span>{UI_STRINGS.startProject[locale]}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href={targetPath}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-300 bg-[#12151B] border border-white/[0.08]"
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>{locale === 'en' ? 'فا' : 'EN'}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white bg-[#12151B] border border-white/[0.08] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-orange" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C]/95 backdrop-blur-2xl border-b border-white/[0.08] px-5 pt-4 pb-8 space-y-3">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const href = item.href(locale);
              const isActive =
                item.key === 'home'
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.startsWith(href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-brand-orange'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/[0.08]">
              <Link
                href={`/${locale}/start-project`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-brand-orange shadow-glow-orange"
              >
                <span>{UI_STRINGS.startProject[locale]}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
