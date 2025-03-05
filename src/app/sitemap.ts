// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // url: 'https://odunayodauda.com',
      url: 'https://odunayodauda.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      // url: 'https://odunayodauda.com/projects',
      url: 'https://odunayodauda.netlify.app/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      // url: 'https://odunayodauda.com/resume',
      url: 'https://odunayodauda.netlify.app/resume',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      // url: 'https://odunayodauda.com/contact',
      url: 'https://odunayodauda.netlify.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ]
}