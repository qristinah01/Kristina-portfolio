import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://kristina-portfolio-oaom.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  return [
    { url: BASE, lastModified: new Date(), priority: 1 },
    { url: `${BASE}/work`, lastModified: new Date(), priority: 0.9 },
    ...projectUrls,
  ];
}
