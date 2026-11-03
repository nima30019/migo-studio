import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { ARTICLES } from '@/data/articles';
import { getBaseUrl } from '@/utils/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const locales = ['fa', 'en'] as const;
  const routes: MetadataRoute.Sitemap = [];

  // Helper to add bilingual route with hreflang alternates
  const addLocalizedEntry = (
    path: string,
    priority: number,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly',
    lastModifiedDate: Date = new Date()
  ) => {
    locales.forEach((locale) => {
      const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
      routes.push({
        url: `${baseUrl}/${locale}${cleanPath}`,
        lastModified: lastModifiedDate,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            fa: `${baseUrl}/fa${cleanPath}`,
            en: `${baseUrl}/en${cleanPath}`,
          },
        },
      });
    });
  };

  // 1. Core Top-Level Routes
  addLocalizedEntry('', 1.0, 'daily');
  addLocalizedEntry('/services', 0.9, 'weekly');
  addLocalizedEntry('/work', 0.9, 'weekly');
  addLocalizedEntry('/about', 0.8, 'monthly');
  addLocalizedEntry('/insights', 0.85, 'daily');
  addLocalizedEntry('/contact', 0.8, 'monthly');
  addLocalizedEntry('/start-project', 0.9, 'monthly');

  // 2. Services Detail Pages
  SERVICES.forEach((service) => {
    addLocalizedEntry(`/services/${service.slug}`, 0.85, 'weekly');
  });

  // 3. Projects Showcase Detail Pages
  PROJECTS.forEach((project) => {
    addLocalizedEntry(`/work/${project.slug}`, 0.85, 'monthly');
  });

  // 4. Insights / Articles Detail Pages
  ARTICLES.forEach((article) => {
    addLocalizedEntry(`/insights/${article.slug}`, 0.8, 'monthly', new Date(article.date));
  });

  return routes;
}
