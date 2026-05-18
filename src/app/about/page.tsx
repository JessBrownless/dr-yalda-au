import ParallaxQuote from "@/components/ParallaxQuote";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";

export default function AboutPage() {
  return (
    <main className="bg-parchment text-brand-black">
      {/* Lillet-style hero — full-bleed bg, centered title, portrait overlapping below */}
      <section className="relative" style={{ marginTop: "-80px" }}>

        {/* Background image — full bleed, tall (overflow-hidden clips the bg img) */}
        <div className="relative overflow-hidden h-[55vh] md:h-[82vh] bg-brand-black">
          <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: "0s", animationDuration: "1.0s" }}>
            <img src="/assets/chairs-hands.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
          {/* Darkening overlay for legibility */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
          {/* Top vignette behind nav */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)", zIndex: 2 }} />

          {/* Centered overline + heading */}
          <div className="absolute inset-x-0 z-10 flex flex-col items-center text-parchment text-center px-6" style={{ top: "20%" }}>
            <p className="opacity-0 animate-fade-in overline mb-8" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
              The story so far
            </p>
            <div className="w-full mx-auto" style={{ maxWidth: "920px" }}>
              <h1
                className="heading-xl opacity-0 animate-fade-in"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1.05, animationDelay: "0.4s", animationDuration: "1.0s" }}
              >
                Dr Yalda Jamali
              </h1>
            </div>
          </div>

          {/* Sentinel for nav dark/light state observer */}
          <div id="hero-end" aria-hidden="true" style={{ position: "absolute", bottom: 0, height: 0, pointerEvents: "none" }} />
        </div>

        {/* Portrait — sibling of hero, negative margin-top so it overlaps both regions */}
        <div className="about-hero-portrait relative z-30 flex justify-center">
          <div className="opacity-0 animate-fade-in w-[82%] md:w-[52%] max-w-[720px]" style={{ animationDelay: "0.2s", animationDuration: "1.0s" }}>
            <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/assets/Yalda-1.avif"
                alt="Dr. Yalda Jamali"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
        </div>

        {/* Intro — centered overline, pull quote, body (10-col measure) */}
        <div className="pg-container pt-28 md:pt-40 pb-20 md:pb-28">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col items-center text-center">
              <p className="opacity-0 animate-fade-in overline mb-8 md:mb-10" style={{ animationDelay: "0.3s", animationDuration: "1.0s" }}>
                About Dr Yalda
              </p>
              <p
                className="opacity-0 animate-fade-in mb-8 md:mb-12"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.625rem, 5vw, 3rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.005em",
                  textWrap: "balance",
                  animationDelay: "0.4s",
                  animationDuration: "1.0s",
                }}
              >
                With 10 years of experience as a cosmetic doctor, I spent my first five years working alongside world-renowned specialists.
              </p>
              <p
                className="opacity-0 animate-fade-in body-serif"
                style={{
                  maxWidth: "820px",
                  textWrap: "pretty",
                  animationDelay: "0.5s",
                  animationDuration: "1.0s",
                }}
              >
                I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin. I&apos;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to achieve refined, <em>natural-looking</em> results.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Two-image interlude — staggered on all breakpoints */}
      <section className="bg-parchment pb-16 md:pb-16">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-x-3 md:gap-x-10">

            {/* Left — portrait */}
            <div className="col-span-7 col-start-1 md:col-span-6 row-start-1" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/assets/IMG_0019.avif"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right — offset down, with logo overlay */}
            <div className="col-span-7 col-start-6 md:col-span-6 md:col-start-7 row-start-1 mt-[28vw] md:mt-32" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <div className="relative">
                <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img
                    src="/assets/IMG_004.avif"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src="/assets/logo-circle.svg"
                  alt="Dr. Yalda Jamali"
                  className="absolute z-10"
                  style={{ width: "clamp(64px, 10vw, 140px)", bottom: "-1.5rem", left: "-1.5rem" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials — trusted-voice layout, directly under hero */}
      <section id="credentials" className="bg-parchment pt-12 md:pt-32 pb-16 md:pb-20 scroll-mt-20">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            {/* Left — heading + body */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-8" data-aos="fade" data-aos-duration="1000">

              <div className="flex flex-col gap-6">
                <p className="overline">Credentials</p>
                <h2 className="heading-lg">A foundation in medical dermatology.</h2>
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

            {/* Right — qualifications list */}
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-6" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              {/* Invisible spacer — pushes Qualifications overline down to baseline-align with first line of the big heading */}
              <p className="overline hidden md:block invisible" aria-hidden="true">spacer</p>
              <h2 className="overline">Qualifications</h2>
              <div className="flex flex-col">
                {[
                  { name: "MBChB", detail: "Bachelor of Medicine & Surgery" },
                  { name: "MSc Dermatology", detail: "with distinction" },
                  { name: "FACCSM", detail: "Fellow, ACCSM" },
                  { name: "Faculty member", detail: "Merz Aesthetics" },
                ].map(({ name, detail }) => (
                  <div key={name} className="flex flex-col gap-1.5 py-4 border-b border-brand-black/20 last:border-b-0 first:border-t first:border-brand-black/20">
                    <p className="heading-md" style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)" }}>{name}</p>
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
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="hidden md:block col-span-3 pt-9">
              <h2 className="overline">Values</h2>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col">
              <h2 className="md:hidden overline mb-6">Values</h2>
              {[
                { num: "01", title: "Honesty", body: "Every consultation is grounded in transparency. I'll always tell you what is — and isn't — right for you, even if that means recommending nothing at all." },
                { num: "02", title: "Precision", body: "I take a meticulous, considered approach to every treatment. Results are refined, never overdone — shaped by anatomy, not trend." },
                { num: "03", title: "Evidence", body: "Every recommendation is backed by clinical evidence and ongoing education. No hype, no shortcuts — just what the science supports." },
                { num: "04", title: "Trust", body: "I build long-term relationships through consistent, honest care. The goal is always to earn your confidence with results that feel like you." },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex items-baseline gap-5 py-8 border-b border-brand-black/20 last:border-b-0 first:border-t first:border-brand-black/20">
                  <span className="text-brand-black/60 font-light flex-shrink-0" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", letterSpacing: "0.05em", minWidth: "2.5em" }}>{num} /</span>
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
