import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
        //   disallow: '/private/',
        },
        sitemap: 'https://ludens-homepage.vercel.app/sitemap.xml', // 실제 배포 시 변경
      }
}