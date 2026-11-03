import { Metadata } from 'next';
import { Locale } from '@/data/translations';

/**
 * Global Site Configuration for SEO & Social Graph
 */
export const SITE_CONFIG = {
  name: 'MIGO',
  legalName: 'MIGO Creative Technology Studio',
  alternateName: 'استودیو فناوری خلاق MIGO',
  tagline: {
    en: 'We Create Interactive Experiences',
    fa: 'ما تجربیات تعاملی خلق می‌کنیم',
  },
  subtagline: {
    en: 'From Virtual Reality to Interactive Worlds',
    fa: 'از واقعیت مجازی تا جهان‌های تعاملی و سه‌بعدی',
  },
  description: {
    en: 'MIGO is an international creative technology studio specializing in Virtual Reality (VR/MR), WebAR, Interactive Exhibitions, Game Development, and High-Fidelity 3D Simulation.',
    fa: 'استودیو فناوری خلاق MIGO؛ پیشگام در طراحی و توسعه واقعیت مجازی (VR/MR)، واقعیت افزوده وب (WebAR)، فناوری‌های تعاملی نمایشگاهی، بازی‌سازی و شبیه‌سازی‌های پیشرفته سه‌بعدی.',
  },
  defaultOgImage: '/migo-logo.png',
  twitterHandle: '@migostudio',
  email: 'hello@migo-studio.com',
  locales: ['fa', 'en'] as const,
  defaultLocale: 'fa' as const,
};

/**
 * Resolves the absolute canonical base URL for the project.
 * Supports environment overrides (custom domains, Vercel, or GitHub Pages).
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }

  // GitHub Pages default URL
  if (process.env.GITHUB_ACTIONS === 'true') {
    return 'https://nima30019.github.io/migo-studio';
  }

  return 'https://nima30019.github.io/migo-studio';
}

export interface LocalizedMetadataOptions {
  locale: Locale;
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string; // e.g. "/services" or "/services/virtual-reality"
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

/**
 * Creates full, production-grade localized Metadata for any route
 * including title templates, meta description, keywords, canonical URLs,
 * hreflang alternate links, OpenGraph, and Twitter Cards.
 */
export function createLocalizedMetadata({
  locale,
  title,
  description,
  keywords = [],
  path = '',
  ogImage,
  type = 'website',
  publishedTime,
  authors,
  noIndex = false,
}: LocalizedMetadataOptions): Metadata {
  const baseUrl = getBaseUrl();
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';

  // Formatted page title
  const siteTitle =
    locale === 'fa'
      ? `${title ? `${title} | ` : ''}استودیو فناوری خلاق MIGO`
      : `${title ? `${title} | ` : ''}MIGO Creative Technology Studio`;

  // Localized description fallback
  const pageDescription = description || SITE_CONFIG.description[locale];

  // Default keywords combined with page-specific keywords
  const defaultKeywords =
    locale === 'fa'
      ? [
          'استودیو MIGO',
          'فناوری خلاق',
          'واقعیت مجازی',
          'واقعیت افزوده',
          'فناوری نمایشگاهی',
          'بازی سازی',
          'طراحی سه بعدی',
          'شبیه سازی صنعتی',
          'رایانش فضایی',
          'WebAR',
        ]
      : [
          'MIGO Studio',
          'Creative Technology Studio',
          'Virtual Reality',
          'Augmented Reality',
          'Interactive Exhibitions',
          'Game Development',
          '3D Visualization',
          'Industrial Simulation',
          'Spatial Computing',
          'WebAR',
        ];

  const combinedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  // Canonical and localized alternate URLs (International SEO)
  const canonicalUrl = `${baseUrl}/${locale}${cleanPath}`;
  const faUrl = `${baseUrl}/fa${cleanPath}`;
  const enUrl = `${baseUrl}/en${cleanPath}`;

  // Image absolute URL
  const resolvedOgImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${baseUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`
    : `${baseUrl}${SITE_CONFIG.defaultOgImage}`;

  return {
    title: siteTitle,
    description: pageDescription,
    keywords: combinedKeywords,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: 'MIGO Creative Technology Studio' }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fa': faUrl,
        'en': enUrl,
        'x-default': faUrl,
      },
    },
    openGraph: {
      title: siteTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: locale === 'fa' ? 'استودیو فناوری خلاق MIGO' : 'MIGO Studio',
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      type: type,
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: pageDescription,
      images: [resolvedOgImage],
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-placeholder-migo',
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || 'bing-site-verification-placeholder-migo',
      },
    },
  };
}
