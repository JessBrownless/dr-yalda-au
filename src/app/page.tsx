import TestimonialSection from "@/components/TestimonialSection";
import LogoStripDark from "@/components/LogoStripDark";
import HeroHome from "@/components/HeroHome";
import StickyScrollSection from "@/components/StickyScrollSection";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";
import ParallaxQuote from "@/components/ParallaxQuote";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  // Three latest posts, read from the same source as /blog so the teaser's
  // images and titles can't drift from the blog (they previously did, because
  // this section was hardcoded separately).
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="text-brand-black">
      <HeroHome
        title="Dr Yalda Jamali"
        tagline="Cosmetic doctor, educator, and brand collaborator in Sydney — combining medical expertise with innovation"
      />

      {/* Her Story — statement block. Generous top air below the hero, then a trimmed bottom so it
          reads as the opening of a continuous parchment run (no coloured panels now to break it up). */}
      <section className="bg-parchment pt-44 md:pt-64 pb-28 md:pb-36 flex flex-col items-center justify-center text-center relative">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p
            data-aos="fade"
            className="overline"
          >
            Sydney based cosmetic doctor
          </p>
          <h2
            data-aos="fade"
            data-aos-delay="120"
            className="heading-lg from-overline"
          >
            A doctor who listens first, treats with precision, and focuses on achieving natural, balanced, and long-term results.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-parchment overflow-hidden relative pt-12 md:pt-20 pb-16 md:pb-20">

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 w-[36%] bg-linen" />

        <div className="pg-container relative">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — image over parchment */}
            <div className="md:col-span-6">
              <ImageReveal className="overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <img src="/assets/IMG_004.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
              </ImageReveal>
            </div>

            {/* Right — introduction text */}
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-6">

              <h2 className="flex flex-col">
                <span className="overline">About </span>
                <span className="heading-lg from-overline">Meet the doctor</span>
              </h2>

              <p
                className="body-serif"
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your wellbeing. I focus on delivering safe, considered results tailored to you, guided by current medical evidence. With honesty and transparency, I aim to improve skin health while maintaining results that feel balanced, subtle, and true to you.
              </p>

              {/* Signature — temporarily hidden
              <img
                src="/assets/signature-dr-yalda-jamali.svg"
                alt="Dr Yalda Jamali signature"
                className="self-start w-44 md:w-52 h-auto opacity-80"
              />
              */}

              <a
                href="/about"
                className="link-arrow self-start mt-2"
              >
                About Dr Yalda
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

          </ScrollReveal>
        </div>
      </section>

      <LogoStripDark />

      {/* Reversed section — parchment-backed image right, text left.
          Bottom padding is heavier than top: the sticky billboard below is a
          hard visual cut, so the section needs more exit air. */}
      <section className="bg-parchment overflow-hidden relative pt-16 md:pt-20 pb-24 md:pb-32">

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 w-[36%] bg-linen" />

        <div className="pg-container relative">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — text */}
            <div className="md:col-span-5 flex flex-col gap-6 order-2 md:order-1">

              <div className="flex flex-col">
                <h2 className="overline">
                  Cosmetic Services
                </h2>

                <h3 className="heading-lg from-overline">
                  Consultation-led care across Sydney
                </h3>
              </div>

              <p
                className="body-serif"
              >
                Dr Yalda Jamali combines medical expertise with a personalised approach to cosmetic medicine. Each treatment is consultation-led, focused on skin quality and long-term results.
              </p>

              <a
                href="/services"
                className="link-arrow self-start mt-2"
              >
                Services
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <ImageReveal className="overflow-hidden aspect-[4/5] md:aspect-[3/4] md:scale-105 md:origin-center">
                <img src="/assets/IMG_0037_color.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 40%" }} />
              </ImageReveal>
            </div>

          </ScrollReveal>
        </div>
      </section>

      <StickyScrollSection />

      <TestimonialSection />

      <ParallaxQuote />

      {/* Three blog post cards */}
      <section className="bg-parchment pt-24 md:pt-40 pb-36 md:pb-56">
        <div className="pg-container">

          {/* Section header */}
          <div className="flex items-end justify-between mb-12 md:mb-20" data-aos="fade" data-aos-duration="1000">
            <div className="flex flex-col">
              <p className="overline">Blog</p>
              <h2 className="heading-lg from-overline">Notes from the practice</h2>
            </div>
            <a
              href="/blog"
              className="hidden md:inline-flex body-xs-caps link-caps items-center gap-3"
            >
              View all
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Cards — swipeable scroll-snap carousel on mobile; aligned to the 12-col content grid (each card col-span-4) on desktop */}
          <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-6 md:grid md:grid-cols-12 md:gap-8 md:overflow-visible md:snap-none">
            {latestPosts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-5 shrink-0 w-[80%] snap-start md:w-auto md:shrink md:col-span-4"
                data-aos="fade"
                data-aos-delay={i * 120}
                data-aos-duration="1000"
              >
                <ImageReveal className="overflow-hidden aspect-[4/5]">
                  <img
                    src={post.frontmatter.featuredImage}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </ImageReveal>
                <div className="flex flex-col gap-3">
                  {/* Gap-less wrapper so the kicker->title gap comes from from-overline, not the parent gap-3 */}
                  <div className="flex flex-col">
                    <p className="overline">{post.frontmatter.category} · {post.readingMinutes} min read</p>
                    <h3 className="heading-md from-overline text-balance md:min-h-[3.9em] group-hover:opacity-70 transition-opacity duration-300">{post.frontmatter.title}</h3>
                  </div>
                  <span className="mt-1 self-start inline-flex items-center gap-3 body-xs-caps link-caps">
                    Read now
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile "view all" — a button, so it reads as a distinct action rather
              than blending in with the "Read now" card links beside it */}
          <a href="/blog" className="btn btn-sm btn-secondary-light md:hidden mt-12">
            View all
          </a>
        </div>
      </section>

      <BookingCTA />
      <InstagramFeed />
    </main>
  );
}
