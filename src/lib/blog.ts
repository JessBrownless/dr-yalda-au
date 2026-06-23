import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

// Blog posts live as MDX files in `content/blog/*.mdx`, read from disk at
// build time. No CMS — the repo is the source of truth.
export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const CATEGORIES = [
  "philosophy",
  "consultation",
  "education",
  "personal",
] as const;

export type BlogCategory = (typeof CATEGORIES)[number];

export interface BlogFrontmatter {
  title: string;
  /** Optional shorter title for the index grid cards. Keeps the full `title`
   *  as the post H1 / SEO headline while letting card titles be a uniform
   *  length so a row of cards lines up. Falls back to `title` when unset. */
  cardTitle?: string;
  slug?: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageCaption?: string;
  category: BlogCategory;
  readingTime?: number;
}

export interface BlogPost {
  /** Resolved slug — frontmatter `slug` if present, else the filename. */
  slug: string;
  /** Raw MDX body with frontmatter stripped — compile this in the page. */
  content: string;
  frontmatter: BlogFrontmatter;
  /** Reading-time estimate in minutes (frontmatter override or auto-computed). */
  readingMinutes: number;
}

function isMdxFile(file: string): boolean {
  return file.endsWith(".mdx") || file.endsWith(".md");
}

// Files starting with "_" are templates or drafts: the reader skips them, so
// they never publish, never hit a route, and never run through validation.
// Authoring flow: `cp _template.mdx my-post.mdx` (drop the underscore) and edit.
function isPublishablePost(file: string): boolean {
  return isMdxFile(file) && !file.startsWith("_");
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isIsoDate(v: unknown): boolean {
  return (
    typeof v === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(v) &&
    !Number.isNaN(new Date(v).getTime())
  );
}

const REQUIRED_STRING_FIELDS = ["title", "description", "publishedAt", "category"] as const;

/**
 * Build-time guard. Every post is read through readPostFile, which calls this,
 * so a malformed post throws and fails the build (or the dev render) loudly
 * instead of shipping broken. Errors are aggregated and file-scoped so an author
 * sees every problem at once. This is the single gate that makes it impossible
 * to publish a post that doesn't conform to the content model.
 */
export function validateFrontmatter(
  fileName: string,
  data: Record<string, unknown>,
): void {
  const errors: string[] = [];

  for (const field of REQUIRED_STRING_FIELDS) {
    if (!isNonEmptyString(data[field])) {
      errors.push(`"${field}" is required and must be a non-empty string`);
    }
  }

  if (
    isNonEmptyString(data.category) &&
    !CATEGORIES.includes(data.category as BlogCategory)
  ) {
    errors.push(
      `"category" must be one of: ${CATEGORIES.join(", ")} (got "${data.category}")`,
    );
  }

  if (data.publishedAt !== undefined && !isIsoDate(data.publishedAt)) {
    errors.push(`"publishedAt" must be a YYYY-MM-DD date (got "${data.publishedAt}")`);
  }

  if (data.updatedAt !== undefined && !isIsoDate(data.updatedAt)) {
    errors.push(`"updatedAt", when set, must be a YYYY-MM-DD date (got "${data.updatedAt}")`);
  }

  if (data.featuredImage !== undefined) {
    if (!isNonEmptyString(data.featuredImage)) {
      errors.push(`"featuredImage", when set, must be a non-empty path string`);
    }
    if (!isNonEmptyString(data.featuredImageAlt)) {
      errors.push(`"featuredImageAlt" is required when "featuredImage" is set (accessibility)`);
    }
  }

  if (
    data.readingTime !== undefined &&
    (typeof data.readingTime !== "number" || data.readingTime <= 0)
  ) {
    errors.push(`"readingTime", when set, must be a positive number`);
  }

  if (
    data.slug !== undefined &&
    (!isNonEmptyString(data.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(data.slug)))
  ) {
    errors.push(`"slug", when set, must be lowercase kebab-case (got "${data.slug}")`);
  }

  if (errors.length > 0) {
    throw new Error(
      `Invalid Blog post "${fileName}":\n${errors.map((e) => `  - ${e}`).join("\n")}`,
    );
  }
}

function fileToSlug(file: string): string {
  return file.replace(/\.mdx?$/, "");
}

/** Read + parse a single file by its on-disk filename (without extension). */
function readPostFile(fileSlug: string): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${fileSlug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${fileSlug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Gate: a post that fails validation throws here and stops the build.
  validateFrontmatter(path.basename(filePath), data);
  const frontmatter = data as BlogFrontmatter;

  // Slug derives from filename when frontmatter omits it.
  const slug = frontmatter.slug?.trim() || fileSlug;

  const readingMinutes =
    frontmatter.readingTime ?? Math.max(1, Math.round(readingTime(content).minutes));

  return { slug, content, frontmatter, readingMinutes };
}

/** Every post, newest first. Used by the (future) index page and the sitemap. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter(isPublishablePost)
    .map((file) => readPostFile(fileToSlug(file)))
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
}

/** All resolved slugs — feeds `generateStaticParams`. */
export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

/** Look up one post by its resolved slug (frontmatter slug or filename). */
export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}
