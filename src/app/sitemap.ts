import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await client.fetch<
    {
      slug: { current: string };
      _updatedAt: string;
    }[]
  >(`
    *[_type == "event"]{
      slug,
      _updatedAt
    }
  `);

  const baseUrl = "https://baltimorecorgis.com";

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tickets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug.current}`,
    lastModified: new Date(event._updatedAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes] as MetadataRoute.Sitemap;
}
