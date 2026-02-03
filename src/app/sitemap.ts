import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sol-lebris.com'; // À remplacer par le vrai domaine

  const routes = [
    '',
    '/about',
    '/contact',
    '/projets/affiches',
    '/projets/edition',
    '/projets/identite-visuelle',
    '/projets/illustrations',
    '/projets/diplome',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/about' ? 0.9 : 0.8,
  }));
}
