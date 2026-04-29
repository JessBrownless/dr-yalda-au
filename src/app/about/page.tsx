
export default function AboutPage() {
  return (
    <main className="bg-parchment">
      {/* Florence-style hero — full-width bg, overlayed portrait, overlayed text */}
      <section className="relative" style={{ marginTop: "-72px" }}>

        {/* Layer 1: Background image — full bleed behind nav */}
        <div className="relative overflow-hidden h-[20vh] md:h-[50vh]">
          <img src="/assets/chairs-hands.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
          {/* Base darkening */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)", zIndex: 1 }} />
          {/* Top vignette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)", zIndex: 2 }} />
          {/* Bottom vignette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />
          <div id="hero-end" aria-hidden="true" style={{ position: "absolute", bottom: 0, height: 0, pointerEvents: "none" }} />
        </div>

        {/* Parchment background for content below hero */}
        <div className="absolute left-0 right-0 bottom-0 bg-parchment top-[20vh] md:top-[50vh]" />

        {/* Layer 2: Overlayed portrait + text container, pulls up over the bg image */}
        <div className="pg-container relative z-10 -mt-[10vh] md:-mt-[35vh]" style={{ maxWidth: "1280px" }}>
          <div className="relative">

            {/* Portrait image */}
            <div className="hidden md:block" style={{ width: "47%" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "2/3" }}>
                <img
                  src="/assets/IMG_0008.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 10%", transform: "scale(1.3) translateY(-20%)" }}
                />
              </div>
            </div>

            {/* Mobile image */}
            <div className="md:hidden">
              <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/assets/IMG_0008.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 65%", transform: "scale(1.3)" }}
                />
              </div>
            </div>

            {/* Text card — overlaps portrait image */}
            <div
              className="hidden md:block absolute z-20"
              style={{ top: "20%", right: 0, width: "55%" }}
            >
              <div className="bg-parchment flex flex-col gap-8 p-12 lg:p-16">
                <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                  The story so far
                </p>

                <h2
                  className="text-brand-black font-normal leading-[1.05]"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 4rem)", letterSpacing: "0" }}
                >
                  My journey began in London.
                </h2>

                <p className="text-neutral-700 font-light leading-[1.9] text-sm md:text-base" style={{ fontFamily: "'Heading', serif" }}>
                  With 10 years of experience as a cosmetic doctor, I spent my first five years working alongside world-renowned specialists. I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin. I&apos;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to achieve refined, natural-looking results.
                </p>
              </div>
            </div>

            {/* Mobile text */}
            <div className="md:hidden flex flex-col gap-8 pt-8 pb-0">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                The story so far
              </p>
              <h2
                className="text-brand-black font-normal leading-[1.05]"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 6vw, 3rem)", letterSpacing: "0" }}
              >
                My journey began in London.
              </h2>
              <p className="text-neutral-700 font-light leading-[1.9] text-sm md:text-base" style={{ fontFamily: "'Heading', serif" }}>
                With 10 years of experience as a cosmetic doctor, I spent my first five years working alongside world-renowned specialists. I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin. I&apos;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to achieve refined, natural-looking results.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Credentials — stylised on desktop, flows like next paragraph on mobile */}
      <section className="bg-parchment pt-0 pb-12 md:py-32">
        <div className="pg-container md:max-w-[820px] md:mx-auto md:text-center">
          <p
            className="text-neutral-700 font-light leading-[1.9] text-sm md:text-brand-black md:leading-[1.35] md:text-2xl lg:text-[1.75rem]"
            style={{ fontFamily: "'Heading', serif" }}
          >
            I am also a Fellow of the Australasian College of Cosmetic Surgery and Medicine (ACCSM), have contributed to publications within the field, and continue to be involved in practitioner education as part of the Merz Aesthetics faculty.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-parchment pb-16 md:pb-24">
        <div className="pg-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {[
              { stat: "10+", label: "Years in cosmetic medicine" },
              { stat: "MSc", label: "Masters in Dermatology" },
              { stat: "ACCSM", label: "College member" },
              { stat: "2", label: "Locations — Paddington & Balgowlah" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-2 md:gap-3 px-0 md:px-8 md:first:pl-0 md:last:pr-0 py-5 md:py-0">
                <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3.5vw, 4rem)", letterSpacing: "0.02em" }}>
                  {stat}
                </p>
                <p className="text-neutral-500 font-light leading-snug" style={{ fontSize: "clamp(9px, 1.2vw, 12px)", letterSpacing: "0.08em", fontFamily: "'Heading', serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width parallax quote */}
      <section
        className="relative flex items-center justify-center py-24 md:py-32 xl:py-52"
        style={{
          minHeight: "clamp(320px, 45vw, 620px)",
          backgroundImage: "url('/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/40" />
        <blockquote className="relative z-10 pg-container w-full flex flex-col items-start gap-6">
          <span
            className="text-white/50 font-normal leading-none select-none"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className="text-white font-normal leading-[1.3]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.25rem, 4vw, 4.5rem)", fontStyle: "italic", letterSpacing: "0" }}
          >
            &ldquo;Medicine is an art. Every face tells a story — my role is simply to help it shine.&rdquo;
          </p>
          <cite
            className="text-white/60 font-normal not-italic uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
          >
            Dr. Yalda Jamali
          </cite>
        </blockquote>
      </section>

      {/* Values — quote layout */}
      <section className="bg-parchment py-24 md:py-48">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="hidden md:block col-span-3 pt-9">
              <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase">Values</p>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col">
              <p className="md:hidden text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase mb-6">Values</p>
              {[
                { num: "01", title: "Honesty", body: "Every consultation is grounded in transparency. Dr. Yalda will always tell you what is and isn't right for you — even if that means recommending nothing at all." },
                { num: "02", title: "Precision", body: "A meticulous, considered approach to every treatment. Results are refined, never overdone — shaped by anatomy, not trend." },
                { num: "03", title: "Evidence", body: "Every recommendation is backed by clinical evidence and ongoing education. No hype, no shortcuts — just what the science supports." },
                { num: "04", title: "Trust", body: "Long-term relationships built on consistent, honest care. The goal is always to earn your confidence through results that feel like you." },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex items-baseline gap-5 py-8 border-b border-neutral-300 last:border-b-0 first:border-t first:border-neutral-300">
                  <span className="text-neutral-400 font-light flex-shrink-0" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", letterSpacing: "0.05em", minWidth: "2.5em" }}>{num} /</span>
                  <div className="flex flex-col gap-3">
                    <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", letterSpacing: "0" }}>
                      {title}
                    </p>
                    <p className="text-neutral-600 font-light leading-relaxed text-base md:text-sm" style={{ fontFamily: "'Heading', serif" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — collage layout */}
      <div className="bg-parchment pt-0 pb-0 md:py-24">
      <section className="relative overflow-hidden bg-parchment md:min-h-[clamp(500px,68vh,820px)]">

        {/* Left image — square, anchored to top */}
        <div className="absolute left-0 top-0 hidden md:block overflow-hidden" style={{ width: "54%", height: "54vw" }}>
          <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>

        {/* Right image — rectangle, starts lower, bleeds past bottom */}
        <div className="absolute right-0 bottom-0 hidden md:block overflow-hidden" style={{ width: "34%", top: "18%" }}>
          <img src="/assets/dr-yalda-treatment.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>

        {/* Centre card — overlaps both images */}
        <div
          className="absolute z-10 hidden md:flex flex-col gap-7 justify-center"
          style={{
            left: "29%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "38%",
            background: "#F6F2EF",
            padding: "clamp(2rem, 3.5vw, 4rem)",
          }}
        >
          <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>
            Feeling overwhelmed?
          </p>
          <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.8vw, 3.25rem)", letterSpacing: "0" }}>
            Complimentary 15-minute online consultation.
          </h2>
          <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
            Dr Yalda offers a complimentary 15-minute online consultation to talk through your concerns and explore your options.
          </p>
          <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
            Book a consultation
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Mobile fallback — stacked */}
        <div className="md:hidden flex flex-col">
          <div className="aspect-square overflow-hidden">
            <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6 px-8 py-14" style={{ background: "#E5DCD7", color: "#2D2C2A" }}>
            <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>Feeling overwhelmed?</p>
            <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 6vw, 2.5rem)", letterSpacing: "0" }}>
              Complimentary 15-minute online consultation
            </h2>
            <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
              Dr Yalda offers a complimentary 15-minute online consultation to talk through your concerns and explore your options.
            </p>
            <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase px-7 py-3.5 transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
              Book a consultation
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

      </section>
      </div>

    </main>
  );
}
