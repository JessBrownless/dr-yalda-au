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

      {/* Her Story — statement block */}
      <section className="bg-parchment py-40 md:py-64 flex flex-col items-center justify-center text-center relative">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p
            data-aos="fade"
            className="overline mb-6"
          >
            Sydney based cosmetic doctor
          </p>
          <h2
            data-aos="fade"
            data-aos-delay="120"
            className="heading-lg"
          >
            A doctor who listens first, treats with precision, and focuses on achieving natural, balanced, and long-term results.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-parchment overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0" style={{ width: "36%", background: "#E9E3D8" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — image over parchment */}
            <div className="col-span-12 md:col-span-6" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                <img src="/assets/IMG_004.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <h2 className="flex flex-col">
                <span className="overline">About </span>
                <span className="heading-lg mt-4 md:mt-5">Dr Yalda Jamali </span>
                <span className="overline mt-2">MBChB · MSc Dermatology · FACCSM</span>
              </h2>

              <p
                className="body-serif"
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your wellbeing. I focus on delivering safe, considered results tailored to you, guided by current medical evidence. With honesty and transparency, I aim to improve skin health while maintaining results that feel balanced, subtle, and true to you.
              </p>

              <svg
                viewBox="0 0 220 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "150px", height: "auto", opacity: 0.6 }}
                aria-hidden="true"
              >
                {/* Y — left arm and tail */}
                <path d="M 14,8 C 17,18 21,30 22,42 C 22,50 20,58 17,64" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* Y — right arm */}
                <path d="M 38,6 C 32,16 27,28 22,42" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* alda */}
                <path d="M 22,42 C 30,34 40,32 46,37 C 52,42 50,54 44,56 C 38,58 34,50 38,44 C 42,38 52,36 60,38 C 66,28 68,16 72,6" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* J */}
                <path d="M 94,6 C 96,20 96,38 92,52 C 88,62 82,66 76,66" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* amali */}
                <path d="M 94,40 C 102,32 114,30 120,35 C 126,40 124,52 118,54 C 112,58 106,50 110,44 C 114,38 124,36 132,38 L 134,54 C 144,42 156,38 164,42 C 170,46 168,56 162,58" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* underline flourish */}
                <path d="M 76,66 C 104,70 172,64 210,60" stroke="#2D2C2A" strokeWidth="0.9" strokeLinecap="round"/>
              </svg>

              <a
                href="/about"
                className="cta-label self-start border border-brand-black text-brand-black mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
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
      <section className="bg-parchment overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0" style={{ width: "36%", background: "#E9E3D8" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8 order-2 md:order-1" data-aos="fade" data-aos-duration="1000">

              <div className="flex flex-col gap-6">
                <h2 className="overline">
                  Cosmetic Services
                </h2>

                <h3 className="heading-lg">
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
                className="cta-label self-start border border-brand-black text-brand-black mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
              >
                Services
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
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
      <section className="bg-parchment py-24 md:py-40">
        <div className="pg-container">

          {/* Section header */}
          <div className="flex items-end justify-between mb-12 md:mb-16" data-aos="fade" data-aos-duration="1000">
            <div className="flex flex-col gap-4">
              <p className="overline">Journal</p>
              <h2 className="heading-lg">Notes from the practice</h2>
            </div>
            <a
              href="/journal"
              className="hidden md:inline-flex body-xs-caps border-b border-brand-black/20 pb-1 hover:text-brand-black hover:border-brand-black/60 transition-colors duration-300 items-center gap-3 whitespace-nowrap"
            >
              View all
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Card grid — aligned to the 12-col content grid (each card col-span-4) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {[
              {
                image: "/assets/IMG_0036.avif",
                category: "Skin",
                readTime: "5 min read",
                title: "The case for a slower approach to skin",
                excerpt: "Why short-term fixes rarely deliver long-term skin health — and what to do instead.",
                href: "/journal/slower-approach",
              },
              {
                image: "/assets/IMG_0025.jpg",
                category: "Consultation",
                readTime: "3 min read",
                title: "Questions to bring to your first consultation",
                excerpt: "A short guide for anyone considering cosmetic medicine for the first time.",
                href: "/journal/first-consultation",
              },
              {
                image: "/assets/IMG_0003.jpg",
                category: "Treatment",
                readTime: "4 min read",
                title: "What 'natural-looking' actually means",
                excerpt: "The phrase is everywhere — but the work behind it is rarely talked about.",
                href: "/journal/natural-looking",
              },
            ].map(({ image, category, readTime, title, excerpt, href }, i) => (
              <a
                key={title}
                href={href}
                className="group flex flex-col gap-5 col-span-12 md:col-span-4"
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
                  <h3 className="heading-md group-hover:opacity-70 transition-opacity duration-300">{title}</h3>
                  <p className="body-serif">{excerpt}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile "view all" link */}
          <a
            href="/journal"
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
