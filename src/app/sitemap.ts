import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { ARTICLES } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://migo-studio.com';
  const locales = ['en', 'fa'];
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Core pages
    routes.push(
      { url: `${baseUrl}/${locale}`, lastModified: new Date(), priority: 1.0 },
      { url: `${baseUrl}/${locale}/services`, lastModified: new Date(), priority: 0.9 },
      { url: `${baseUrl}/${locale}/work`, lastModified: new Date(), priority: 0.9 },
      { url: `${baseUrl}/${locale}/about`, lastModified: new Date(), priority: 0.8 },
      { url: `${baseUrl}/${locale}/insights`, lastModified: new Date(), priority: 0.8 },
      { url: `${baseUrl}/${locale}/contact`, lastModified: new Date(), priority: 0.8 },
      { url: `${baseUrl}/${locale}/start-project`, lastModified: new Date(), priority: 0.9 }
    );

    // Services
    SERVICES.forEach((service) => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        priority: 0.85,
      });
    });

    // Projects
    PROJECTS.forEach((project) => {
      routes.push({
        url: `${baseUrl}/${locale}/work/${project.slug}`,
        lastModified: new Date(),
        priority: 0.8,
      });
    });

    // Articles
    ARTICLES.forEach((article) => {
      routes.push({
        url: `${baseUrl}/${locale}/insights/${article.slug}`,
        lastModified: new Date(),
        priority: 0.75,
      });
    });
  });

  return routes;
}
