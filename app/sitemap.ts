import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arvuta.eu'

  const routes = [
    '',
    '/automaks',
    '/netopalk',
    '/brutopalk',
    '/laen',
    '/dividend',
    '/privaatsuspoliitika',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
