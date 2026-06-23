import TestimonialSection from "@/components/TestimonialSection";
import LogoStripDark from "@/components/LogoStripDark";
import HeroHome from "@/components/HeroHome";
import StickyScrollSection from "@/components/StickyScrollSection";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";
import ParallaxQuote from "@/components/ParallaxQuote";

export default function Home() {
  return (
    <main className="text-brand-black">
      <HeroHome
        title="Dr Yalda Jamali"
        tagline="Cosmetic doctor, educator, and brand collaborator in Sydney — combining medical expertise with innovation"
      />

      {/* Her Story — statement block. Billboard rhythm: 2× the standard section spacing (py-20 md:py-32). */}
      <section className="bg-parchment py-40 md:py-64 flex flex-col items-center justify-center text-center relative">
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
      <section className="bg-parchment overflow-hidden relative pt-0 pb-24 md:py-40">

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0" style={{ width: "36%", background: "#E9E3D8" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — image over parchment */}
            <div className="md:col-span-6" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                <img src="/assets/IMG_004.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-8" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

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
                data-aos="fade"
                data-aos-delay="300"
              >
                About Dr Yalda
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

          </div>
        </div>
      </section>

      <LogoStripDark />

      {/* Reversed section — parchment-backed image right, text left */}
      <section className="bg-parchment overflow-hidden relative py-24 md:py-40">

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0" style={{ width: "36%", background: "#E9E3D8" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — text */}
            <div className="md:col-span-5 flex flex-col gap-8 order-2 md:order-1" data-aos="fade" data-aos-duration="1000">

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
                data-aos="fade"
                data-aos-delay="300"
              >
                Services
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:aspect-[3/4] md:scale-105 md:origin-center">
                <img src="/assets/IMG_0037_color.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 40%" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <StickyScrollSection />

      <TestimonialSection />

      <ParallaxQuote />

      {/* Three blog post cards */}
      <section className="bg-parchment pt-24 md:pt-40 pb-36 md:pb-56">
        <div className="pg-container">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16 md:mb-20" data-aos="fade" data-aos-duration="1000">
            <div className="flex flex-col">
              <p className="overline">Blog</p>
              <h2 className="heading-lg from-overline">Notes from the practice</h2>
            </div>
            <a
              href="/blog"
              className="hidden md:inline-flex body-xs-caps border-b border-brand-black/20 pb-1 hover:text-brand-black hover:border-brand-black/60 transition-colors duration-300 items-center gap-3 whitespace-nowrap"
            >
              View all
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Cards — swipeable scroll-snap carousel on mobile; aligned to the 12-col content grid (each card col-span-4) on desktop */}
          <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-6 md:grid md:grid-cols-12 md:gap-8 md:overflow-visible md:snap-none">
            {[
              {
                image: "/assets/IMG_0036.avif",
                category: "Philosophy",
                readTime: "4 min read",
                title: "What a Decade in Medicine Has Taught Me About Skin",
                excerpt: "Ten years and thousands of patients in — what I've come to believe about skin and ageing.",
                href: "/blog/what-i-learnt-about-skin",
              },
              {
                image: "/assets/IMG_0003.jpg",
                category: "Philosophy",
                readTime: "3 min read",
                title: 'What "Natural-Looking" Results Actually Mean to Me',
                excerpt: "Natural doesn't mean untreated. It means looking like the best version of yourself.",
                href: "/blog/natural-looking",
              },
              {
                image: "/assets/IMG_0025.jpg",
                category: "Consultation",
                readTime: "4 min read",
                title: "Five Things to Ask Any Practitioner Before Booking",
                excerpt: "The practitioner matters more than the device — five questions worth asking first.",
                href: "/blog/five-things-to-ask",
              },
            ].map(({ image, category, readTime, title, excerpt, href }, i) => (
              <a
                key={title}
                href={href}
                className="group flex flex-col gap-5 shrink-0 w-[80%] snap-start md:w-auto md:shrink md:col-span-4"
                data-aos="fade"
                data-aos-delay={i * 120}
                data-aos-duration="1000"
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="overline">{category} · {readTime}</p>
                  <h3 className="heading-md text-balance md:min-h-[3.9em] group-hover:opacity-70 transition-opacity duration-300">{title}</h3>
                  <p className="body-serif">{excerpt}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile "view all" link */}
          <a
            href="/blog"
            className="md:hidden mt-12 self-start body-xs-caps border-b border-brand-black/20 pb-1 hover:text-brand-black hover:border-brand-black/60 transition-colors duration-300 inline-flex items-center gap-3 whitespace-nowrap"
          >
            View all
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      <BookingCTA />
      <InstagramFeed />
    </main>
  );
}
