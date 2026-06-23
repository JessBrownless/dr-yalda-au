import type { MetadataRoute } from "next";

const SITE_URL = "https://dryalda.com.au";

// Dev sandboxes — kept out of search results (also excluded from the sitemap).
const DISALLOWED = ["/unused-components", "/stylesheet", "/about-hero-original"];

// Generates /robots.txt: allows crawling of the public site, blocks the dev
// pages, and points search engines (incl. Search Console) at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: DISALLOWED,
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
