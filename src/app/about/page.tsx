import type { Metadata } from "next";
import ParallaxQuote from "@/components/ParallaxQuote";
import ImageReveal from "@/components/ImageReveal";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr Yalda Jamali — Sydney cosmetic doctor with a Master's in Dermatology, offering ethical, consultation-led care focused on personalised, balanced results.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Dr Yalda Jamali",
    description:
      "Meet Dr Yalda Jamali — Sydney cosmetic doctor with a Master's in Dermatology, offering ethical, consultation-led care focused on personalised, balanced results.",
    url: "/about",
    images: [{ url: "/assets/og-dr-yalda-hero.jpg", width: 1200, height: 630, alt: "Dr Yalda Jamali — Sydney cosmetic doctor" }],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-parchment text-brand-black">
      {/* Hero — dark bg as an absolute layer; content flows with FIXED spacing */}
      <section className="relative bg-parchment" style={{ marginTop: "-80px" }}>

        {/* Background image — absolute layer behind content, capped height (tablet-safe) */}
        <div className="about-hero-bg absolute top-0 inset-x-0 overflow-hidden bg-brand-black">
          <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: "0s", animationDuration: "1.0s" }}>
            <img src="/assets/chairs-hands.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
          {/* Darkening overlay for legibility */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
          {/* Top vignette behind nav */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)", zIndex: 2 }} />
          {/* Sentinel for nav dark/light state observer — bottom of the dark layer */}
          <div id="hero-end" aria-hidden="true" style={{ position: "absolute", bottom: 0, height: 0, pointerEvents: "none" }} />
        </div>

        {/* Hero content — natural flow, fixed luxury padding above overline + fixed gap to portrait */}
        <div
          className="relative z-10 flex flex-col items-center text-center text-parchment"
          style={{ paddingTop: "clamp(8rem, 5rem + 9vw, 14rem)" }}
        >
          {/* Overline — standard page gutter (matches pg-container) */}
          <div
            className="w-full flex flex-col items-center"
            style={{ paddingLeft: "clamp(1.75rem, 5vw, 5rem)", paddingRight: "clamp(1.75rem, 5vw, 5rem)" }}
          >
            <p className="opacity-0 animate-fade-in overline" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
              The story so far
            </p>
          </div>

          {/* H1 — capped to the portrait's width below it; wraps if it must */}
          <div className="w-[82%] md:w-[64%] lg:w-[52%] max-w-[720px] mx-auto">
            {/* from-overline (0.7em), not an ad-hoc mb on the overline — this hero
                was the only one off the canonical overline->heading rhythm */}
            <h1
              className="heading-hero from-overline opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}
            >
              Dr Yalda <br className="md:hidden" />Jamali
            </h1>
          </div>

          {/* Portrait — FIXED distance below the H1 (matches the space above the overline) */}
          <div
            className="opacity-0 animate-fade-in w-[82%] md:w-[64%] lg:w-[52%] max-w-[720px]"
            style={{ marginTop: "clamp(3rem, 1.5rem + 5vw, 8rem)", animationDelay: "0.2s", animationDuration: "1.0s" }}
          >
            <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/assets/IMG_0008.avif"
                alt="Dr. Yalda Jamali"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 10%", transform: "scale(1.3) translateY(-20%)" }}
              />
            </div>
          </div>
        </div>

        {/* Intro — centered overline, pull quote, body (10-col measure) */}
        <div className="pg-container pt-10 md:pt-32" style={{ paddingBottom: "clamp(6.75rem, 5.25rem + 6vw, 8.25rem)" }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-10 md:col-start-2 flex flex-col items-start text-left md:items-center md:text-center">
              {/* Canonical rhythm: from-overline under the kicker, .lede above the body —
                  this block previously used ad-hoc inline clamp margins for both gaps */}
              <p className="opacity-0 animate-fade-in overline" style={{ animationDelay: "0.3s", animationDuration: "1.0s" }}>
                About Dr Yalda
              </p>
              <h2
                className="heading-lg from-overline opacity-0 animate-fade-in"
                style={{
                  textWrap: "balance",
                  animationDelay: "0.4s",
                  animationDuration: "1.0s",
                }}
              >
                With over 10 years of experience as a cosmetic doctor, I spent the initial part of my career working alongside world-renowned specialists.
              </h2>
              <p
                className="opacity-0 animate-fade-in body-serif lede"
                style={{
                  maxWidth: "820px",
                  textWrap: "pretty",
                  animationDelay: "0.5s",
                  animationDuration: "1.0s",
                }}
              >
                I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin. I&apos;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to achieve refined results.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Two-image interlude — staggered on all breakpoints */}
      <section className="bg-parchment pb-16 md:pb-16">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-x-3 md:gap-x-10">

            {/* Left — treatment shot (top, no offset). Long, soft fades on the pair —
                the default 900ms read as "appearing" rather than arriving */}
            <div className="col-span-7 col-start-1 md:col-span-6 row-start-1" data-aos="fade" data-aos-duration="1800" data-aos-easing="ease-out-sine">
              <ImageReveal className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/assets/IMG_0028.avif"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </ImageReveal>
            </div>

            {/* Right — portrait, offset down, with logo overlay on its bottom-left corner */}
            <div className="col-span-7 col-start-6 md:col-span-6 md:col-start-7 row-start-1 mt-[28vw] md:mt-32 relative z-10" data-aos="fade" data-aos-delay="250" data-aos-duration="1800" data-aos-easing="ease-out-sine">
              <div className="relative">
                <ImageReveal className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img
                    src="/assets/Yalda-17.avif"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </ImageReveal>
                {/* No data-aos here — AOS's [data-aos^=fade] rules out-specify
                    Tailwind's translate utilities and strip the corner-straddling
                    transform (the logo drifted inside the image). It fades with
                    its parent instead. */}
                <img
                  src="/assets/logo-circle.svg"
                  alt="Dr. Yalda Jamali"
                  className="absolute z-10 left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
                  style={{ width: "clamp(80px, 12vw, 128px)" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials — trusted-voice layout, directly under hero */}
      <section id="credentials" className="bg-parchment pt-12 md:pt-32 pb-16 md:pb-20 scroll-mt-20">
        <div className="pg-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

            {/* Left — heading + body */}
            <div className="md:col-span-8 flex flex-col gap-6" data-aos="fade" data-aos-duration="1000">

              <div className="flex flex-col">
                <p className="overline">Credentials</p>
                <h2 className="heading-lg from-overline">A foundation in medical dermatology.</h2>
              </div>

              <div className="flex gap-6 md:gap-10">
                <div className="hidden md:block w-px bg-brand-black/20 flex-shrink-0 self-stretch" />
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <p className="body-serif">
                      My training in medicine started long before injectables. I hold a Bachelor of Medicine and Bachelor of Surgery (MBChB) and a Master&apos;s degree in Dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables.
                    </p>
                    <p className="body-serif">
                      I&apos;m a Fellow of the Australasian College of Cosmetic Surgery and Medicine (FACCSM), have contributed to publications in the field, and continue to teach as part of the Merz Aesthetics faculty.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — qualifications list. Extra mobile-only top margin: stacked
                under the Credentials copy, the grid's 24px gap read cramped
                (same fix as the media-page enquiries block) */}
            <div className="mt-10 md:mt-0 md:col-span-3 md:col-start-10 flex flex-col gap-6" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              {/* Invisible spacer — pushes Qualifications overline down to baseline-align with first line of the big heading */}
              <p className="overline hidden md:block invisible" aria-hidden="true">spacer</p>
              <h2 className="overline">Qualifications</h2>
              <div className="flex flex-col">
                {[
                  { name: "MBChB", detail: "Bachelor of Medicine & Surgery" },
                  { name: "MSc Dermatology", detail: "with distinction" },
                  { name: "FACCSM", detail: "Fellow, ACCSM" },
                  { name: "Faculty member", detail: "Merz Aesthetics" },
                  { name: "AHPRA registration", detail: "MED0002486778" },
                ].map(({ name, detail }) => (
                  <div key={name} className="flex flex-col gap-1.5 py-4 border-b border-brand-black/10 last:border-b-0 first:border-t first:border-brand-black/10">
                    {/* heading-list (28px flat): matches the section title on phones,
                        but never rivals its 40px desktop size in this narrow sidebar */}
                    <p className="heading-list">{name}</p>
                    <p className="body-xs">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-width parallax quote */}
      <ParallaxQuote
        image="/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif"
        quote="Medicine is an art. Every face tells a story — my role is simply to help it shine."
      />

      {/* Values — quote layout */}
      <section className="bg-parchment py-16 md:py-32">
        <div className="pg-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="hidden md:block col-span-3 pt-9">
              <h2 className="overline">Values</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 flex flex-col">
              <h2 className="md:hidden overline mb-6">Values</h2>
              {[
                { num: "01", title: "Honesty", body: "Every consultation is grounded in transparency. I'll always tell you what is — and isn't — right for you, even if that means recommending nothing at all." },
                { num: "02", title: "Precision", body: "I take a meticulous, considered approach to every treatment. Results are refined, never overdone — shaped by anatomy, not trend." },
                { num: "03", title: "Evidence", body: "Every recommendation is backed by clinical evidence and ongoing education. No hype, no shortcuts — just what the science supports." },
                { num: "04", title: "Trust", body: "I build long-term relationships through consistent, honest care. The goal is always to earn your confidence with results that feel like you." },
              ].map(({ num, title, body }, i) => (
                <div key={num} data-aos="fade" data-aos-delay={i * 250} className="flex items-baseline gap-5 py-8 border-b border-brand-black/10 last:border-b-0 first:border-t first:border-brand-black/10">
                  <span className="list-index flex-shrink-0" style={{ minWidth: "2.5em" }}>{num} /</span>
                  <div className="flex flex-col gap-3">
                    <h3 className="heading-lg">
                      {title}
                    </h3>
                    <p className="body-serif">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
      <InstagramFeed />

    </main>
  );
}
