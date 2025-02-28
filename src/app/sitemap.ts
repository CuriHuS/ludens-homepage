/*
실제 배포 시 url 변경
*/

import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://khuludens.com/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://khuludens.com/activity',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://khuludens.com/project',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://khuludens.com/sponsor',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
    ]
}