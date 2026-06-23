import type { Metadata } from "next";

import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://dryalda.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blog — Notes from the practice | Dr Yalda Jamali",
  description:
    "Essays and notes from Dr Yalda Jamali, a Sydney cosmetic doctor — on natural-looking results, the consultation, and a considered approach to skin.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog — Notes from the practice",
    description:
      "Essays and notes from Dr Yalda Jamali, a Sydney cosmetic doctor — on natural-looking results, the consultation, and a considered approach to skin.",
    url: "/blog",
    images: [{ url: "/assets/Yalda-17.avif", alt: "Dr Yalda Jamali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Notes from the practice",
    description:
      "Essays and notes from Dr Yalda Jamali, a Sydney cosmetic doctor — on natural-looking results, the consultation, and a considered approach to skin.",
    images: ["/assets/Yalda-17.avif"],
  },
};

// Shared arrow used on the site's text links (copied from the homepage CTA).
function ArrowGlyph() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path
        d="M1 4h10M7 1l3 3-3 3"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogJsonLd({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog — Dr Yalda Jamali",
    description:
      "Notes from the practice of Dr Yalda Jamali, a Sydney cosmetic doctor.",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.frontmatter.title,
      description: post.frontmatter.description,
      datePublished: post.frontmatter.publishedAt,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="bg-parchment text-brand-black">
      <BlogJsonLd posts={posts} />

      {/* Editorial masthead — distinguished from the grid by extra air and a
          hairline index rule (a recognisable editorial device). */}
      <section className="pg-container pt-28 md:pt-40 pb-12 md:pb-16">
        <div className="flex flex-col" data-aos="fade">
          <p className="overline">Blog</p>
          <h1 className="heading-2xl from-overline">Notes from the practice</h1>
        </div>
        <p className="lede body-sans max-w-[58ch] text-on-light-low" data-aos="fade">
          Honest writing on natural-looking results, what to expect from a consultation, and the
          thinking behind a considered approach to skin.
        </p>
        <div
          className="mt-14 md:mt-20 pt-4 border-t border-brand-line flex items-baseline justify-between"
          data-aos="fade"
        >
          <p className="body-xs-caps text-on-light-low">Latest entries</p>
          <p className="body-xs-caps text-on-light-low">
            {posts.length} {posts.length === 1 ? "entry" : "entries"}
          </p>
        </div>
      </section>

      {/* Featured — newest post */}
      {featured ? (
        <section className="pg-container pb-16 md:pb-24">
          <a
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            data-aos="fade"
          >
            {featured.frontmatter.featuredImage ? (
              <div className="md:col-span-7 overflow-hidden">
                {/* Natural proportions — no fixed-ratio crop on the featured image. */}
                <img
                  src={featured.frontmatter.featuredImage}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            ) : null}
            <div className={featured.frontmatter.featuredImage ? "md:col-span-5" : "md:col-span-8"}>
              <p className="overline">
                {featured.frontmatter.category} · {featured.readingMinutes} min read
              </p>
              <h2 className="heading-lg from-overline group-hover:opacity-70 transition-opacity duration-300">
                {featured.frontmatter.title}
              </h2>
              <p className="lede body-sans text-on-light-low">{featured.frontmatter.description}</p>
              <span className="mt-8 self-start inline-flex items-center gap-3 body-xs-caps border-b border-brand-black/20 pb-1 group-hover:border-brand-black/60 transition-colors duration-300">
                Read entry
                <ArrowGlyph />
              </span>
            </div>
          </a>
        </section>
      ) : null}

      {/* Grid — remaining posts */}
      {rest.length > 0 ? (
        <section className="pg-container pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 md:gap-8">
            {rest.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-5 md:col-span-4"
                data-aos="fade"
                data-aos-delay={i * 120}
                data-aos-duration="1000"
              >
                <div className="overflow-hidden aspect-[4/5]">
                  {post.frontmatter.featuredImage ? (
                    <img
                      src={post.frontmatter.featuredImage}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-3">
                  <p className="overline">
                    {post.frontmatter.category} · {post.readingMinutes} min read
                  </p>
                  {/* Card titles use the uniform-length `cardTitle` (falling back
                      to the full title), balanced and reserving 3 lines so a row of
                      cards lines up. text-balance evens the line split. */}
                  <h3 className="heading-md text-balance sm:min-h-[3.9em] group-hover:opacity-70 transition-opacity duration-300">
                    {post.frontmatter.cardTitle ?? post.frontmatter.title}
                  </h3>
                  <p className="body-serif">{post.frontmatter.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <BookingCTA />
      <InstagramFeed />
    </main>
  );
}
