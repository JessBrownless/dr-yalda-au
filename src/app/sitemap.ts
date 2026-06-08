import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/journal";

const SITE_URL = "https://dryalda.com.au";

// Public, indexable routes. Dev sandboxes (/stylesheet, /unused-components,
// /about-hero-original) are intentionally excluded.
const STATIC_ROUTES = ["", "/about", "/services", "/media", "/appointments", "/journal"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.publishedAt,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
