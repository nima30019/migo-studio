import { Locale } from '@/data/translations';
import { ServiceItem } from '@/data/services';
import { ProjectItem } from '@/data/projects';
import { ArticleItem } from '@/data/articles';
import { getBaseUrl, SITE_CONFIG } from './seo';

/**
 * Returns Organization & ProfessionalService JSON-LD schema
 */
export function getOrganizationSchema(locale: Locale) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: locale === 'fa' ? SITE_CONFIG.alternateName : SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: `${baseUrl}/${locale}`,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/migo-logo-transparent.png`,
      caption: 'MIGO Studio Logo',
    },
    image: `${baseUrl}/migo-logo.png`,
    description: SITE_CONFIG.description[locale],
    email: SITE_CONFIG.email,
    telephone: '+98-21-88880000', // Standard studio contact line format
    priceRange: '$$$$',
    knowsAbout: [
      'Virtual Reality (VR)',
      'Mixed Reality (MR)',
      'Augmented Reality (AR)',
      'WebAR',
      'Real-Time WebGL',
      'Interactive Exhibitions',
      'Game Development',
      'Serious Games',
      '3D Visualization',
      'Industrial Safety Simulation',
      'Physical Sensor Integration (Kinect, LiDAR)',
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IR',
      addressLocality: 'Tehran',
    },
    sameAs: [
      'https://linkedin.com/company/migo-studio',
      'https://instagram.com/migo.studio',
      'https://github.com/nima30019/migo-studio',
    ],
  };
}

/**
 * Returns WebSite JSON-LD schema with search / multi-language specification
 */
export function getWebSiteSchema(locale: Locale) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: `${baseUrl}/${locale}`,
    name: locale === 'fa' ? 'استودیو تجربیات تعاملی MIGO' : 'MIGO Interactive Experiences Studio',
    description: SITE_CONFIG.description[locale],
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: ['fa-IR', 'en-US'],
  };
}

/**
 * Returns BreadcrumbList JSON-LD schema for any hierarchical page
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  locale: Locale
) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http')
        ? item.path
        : `${baseUrl}/${locale}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

/**
 * Returns Service JSON-LD schema for individual service disciplines
 */
export function getServiceSchema(service: ServiceItem, locale: Locale) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/${locale}/services/${service.slug}#service`,
    name: service.title[locale],
    description: service.overview[locale],
    serviceType: service.badge[locale],
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title[locale] + ' Capabilities',
      itemListElement: service.capabilities[locale].map((cap, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap,
        },
      })),
    },
  };
}

/**
 * Returns FAQPage JSON-LD schema
 */
export function getFAQSchema(
  faqs: Array<{ q: Record<Locale, string>; a: Record<Locale, string> }>,
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q[locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a[locale],
      },
    })),
  };
}

/**
 * Returns CreativeWork / Case Study JSON-LD schema
 */
export function getCreativeWorkSchema(project: ProjectItem, locale: Locale) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${baseUrl}/${locale}/work/${project.slug}#work`,
    name: project.title[locale],
    headline: project.title[locale],
    description: project.fullOverview[locale],
    creator: {
      '@id': `${baseUrl}/#organization`,
    },
    dateCreated: project.year,
    about: project.category[locale],
    keywords: project.technologies.join(', '),
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  };
}

/**
 * Returns Article JSON-LD schema
 */
export function getArticleSchema(article: ArticleItem, locale: Locale) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${baseUrl}/${locale}/insights/${article.slug}#article`,
    headline: article.title[locale],
    description: article.excerpt[locale],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    keywords: article.tags.join(', '),
  };
}
