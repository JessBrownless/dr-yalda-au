// MDX rendering: next-mdx-remote/rsc — compiles MDX strings read from content/
// at build time inside this Server Component. Cleaner than @next/mdx for files
// that live outside app/ and render through a single [slug] route.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import BookingCTA from "@/components/BookingCTA";
import { getAllSlugs, getPostBySlug, type BlogPost } from "@/lib/blog";
import { blogMdxComponents } from "../../../../mdx-components";

const SITE_URL = "https://dryalda.com.au";
const AUTHOR = "Dr Yalda Jamali";

// Only render slugs known at build time — unknown slugs 404 rather than render.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string): string {
  // Parse as UTC so a date-only string never shifts a day under local tz.
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function absoluteUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  return pathOrUrl.startsWith("http") ? pathOrUrl : `${SITE_URL}${pathOrUrl}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const canonical = `/blog/${post.slug}`;
  const ogImage = absoluteUrl(frontmatter.featuredImage);

  return {
    metadataBase: new URL(SITE_URL),
    title: `${frontmatter.title} — Blog | ${AUTHOR}`,
    description: frontmatter.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.description,
      url: canonical,
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt,
      authors: [AUTHOR],
      ...(ogImage
        ? { images: [{ url: ogImage, alt: frontmatter.featuredImageAlt ?? frontmatter.title }] }
        : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: frontmatter.title,
      description: frontmatter.description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const { frontmatter } = post;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt ?? frontmatter.publishedAt,
    articleSection: frontmatter.category,
    ...(frontmatter.featuredImage ? { image: absoluteUrl(frontmatter.featuredImage) } : {}),
    author: { "@type": "Person", name: AUTHOR },
    publisher: { "@type": "Person", name: AUTHOR },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, readingMinutes } = post;

  const { content } = await compileMDX({
    source: post.content,
    components: blogMdxComponents,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  const byline = `By ${AUTHOR} · ${readingMinutes} min read · ${formatDate(frontmatter.publishedAt)}`;

  return (
    <main className="bg-parchment text-brand-black">
      <ArticleJsonLd post={post} />

      <article className="pb-20 md:pb-28">
        {/* 1 — Metadata block (reading column) */}
        <header
          className="mx-auto max-w-[720px] px-6 md:px-8 pt-20 md:pt-28"
          data-aos="fade"
        >
          <div className="flex flex-col">
            <p className="overline">{frontmatter.category}</p>
            <h1 className="heading-2xl from-overline">{frontmatter.title}</h1>
          </div>
          <p className="lede body-sans text-on-light-low">{frontmatter.description}</p>
          <p className="body-xs-caps mt-8 text-on-light-low">{byline}</p>
        </header>

        {/* 2 — Featured image, breaks slightly wider than the reading column */}
        {frontmatter.featuredImage ? (
          <figure
            className="mx-auto max-w-[880px] px-6 md:px-8 mt-12 md:mt-16"
            data-aos="fade"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.featuredImageAlt ?? ""}
              loading="lazy"
              className="w-full h-auto"
            />
            {frontmatter.featuredImageCaption ? (
              <figcaption className="label-02 mt-3 text-on-light-low">
                {frontmatter.featuredImageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        {/* 3 — MDX body. Heading rhythm (more space above than below, so a heading
            groups with the content that follows it) is set here with child selectors,
            which outrank the .heading-* utilities' `margin: 0`. First child sits flush. */}
        <div className="mx-auto max-w-[720px] px-6 md:px-8 mt-12 md:mt-16 [&>h2]:mt-16 [&>h2+*]:mt-4 [&>h3]:mt-10 [&>*:first-child]:mt-0">
          {content}
        </div>

        {/* 4 — Author bio (single-author site, so the author is hardcoded) */}
        <aside className="mx-auto max-w-[720px] px-6 md:px-8 mt-16 md:mt-20 pt-10 border-t border-brand-line">
          <p className="overline">Written by</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-start">
            <div className="w-24 shrink-0 overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Yalda-17.avif"
                alt="Dr Yalda Jamali"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div>
              <p className="heading-md">Dr Yalda Jamali</p>
              <p className="body-serif mt-3 text-on-light-low">
                I&rsquo;m a cosmetic doctor based in Sydney. I write here about the thinking behind
                personalised care &mdash; what I tell my patients in consultation, and the reasoning
                underneath it. My practice is built on honest conversations and considered,
                patient-led care.
              </p>
              <a
                href="/about"
                className="overline text-brand-black inline-block mt-5 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black/40 rounded-sm"
              >
                Read more about me →
              </a>
            </div>
          </div>
        </aside>

        {/* 5 — Footer: back to index (not built yet) */}
        <div className="mx-auto max-w-[720px] px-6 md:px-8 mt-12 pt-8 border-t border-brand-line">
          <a
            href="/blog"
            className="overline text-brand-black transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black/40 rounded-sm"
          >
            More blog entries →
          </a>
        </div>
      </article>

      <BookingCTA />
    </main>
  );
}
