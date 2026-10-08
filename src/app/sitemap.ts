import type { MetadataRoute } from "next";
import { programs } from "@/lib/data";

const BASE_URL = "https://www.wisespire.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/programs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/solutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/certificate`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${BASE_URL}/programs/${program.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes];
}
