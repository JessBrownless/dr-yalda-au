export default function AboutHeroOriginalPage() {
  return (
    <main className="bg-parchment text-brand-black">
      {/* Florence-style hero — full-width bg, overlayed portrait, overlayed text */}
      <section className="relative" style={{ marginTop: "-80px" }}>

        {/* Layer 1: Background image — full bleed behind nav, fades in last over black */}
        <div className="relative overflow-hidden h-[28vh] md:h-[50vh] bg-brand-black">
          <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: "0s", animationDuration: "1.0s" }}>
            <img src="/assets/chairs-hands.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
          {/* Base darkening */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)", zIndex: 1 }} />
          {/* Top vignette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)", zIndex: 2 }} />
          {/* Bottom vignette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />
          <div id="hero-end" aria-hidden="true" style={{ position: "absolute", bottom: 0, height: 0, pointerEvents: "none" }} />
        </div>

        {/* Parchment background for content below hero */}
        <div className="absolute left-0 right-0 bottom-0 bg-parchment top-[28vh] md:top-[50vh]" />

        {/* Layer 2: Overlayed portrait + text container, pulls up over the bg image */}
        <div className="pg-container relative z-10 -mt-[18vh] md:-mt-[35vh]">
          <div className="relative">

            {/* Portrait image */}
            <div className="hidden md:block opacity-0 animate-fade-in" style={{ width: "58%", animationDelay: "0s", animationDuration: "1.0s" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/Yalda-1.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
            </div>

            {/* Mobile image */}
            <div className="md:hidden opacity-0 animate-fade-in" style={{ animationDelay: "0s", animationDuration: "1.0s" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/Yalda-1.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
            </div>

            {/* Text card — overlaps portrait image, vertically centered along image height */}
            <div
              className="hidden md:block absolute z-20"
              style={{ top: "50%", right: 0, width: "62%", transform: "translateY(-50%)" }}
            >
              <div className="opacity-0 animate-fade-in bg-brand-white flex flex-col gap-8 p-16 lg:p-20" style={{ animationDelay: "0s", animationDuration: "1.0s" }}>
                <div className="flex flex-col gap-6">
                  <p className="opacity-0 animate-fade-in overline" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
                    The story so far
                  </p>
                  <h1
                    className="heading-xl opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}
                  >
                    About Dr Yalda Jamali
                  </h1>
                </div>

                <p className="opacity-0 animate-fade-in body-serif" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
                  I&apos;m a Sydney cosmetic doctor recognised for facial balancing and contouring. After ten years in the field, five of those alongside world-renowned specialists, my practice is built on personalised, evidence-based care, with refined results that feel like you.
                </p>
                <a href="/appointments" className="opacity-0 animate-fade-in self-start border border-brand-black text-brand-black font-normal uppercase mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", animationDelay: "0.4s", animationDuration: "1.0s" }}>
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Mobile text */}
            <div className="md:hidden flex flex-col pt-16 pb-0">
              <p className="opacity-0 animate-fade-in overline mb-6" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
                The story so far
              </p>
              <h1
                className="heading-xl opacity-0 animate-fade-in"
                style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}
              >
                About Dr Yalda Jamali
              </h1>
              <p className="opacity-0 animate-fade-in body-serif mt-8" style={{ animationDelay: "0.4s", animationDuration: "1.0s" }}>
                I&apos;m a Sydney cosmetic doctor recognised for facial balancing and contouring. After ten years in the field, five of those alongside world-renowned specialists, my practice is built on personalised, evidence-based care, with refined results that feel like you.
              </p>
              <a href="/appointments" className="opacity-0 animate-fade-in self-start border border-brand-black text-brand-black font-normal uppercase mt-8 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", animationDelay: "0.4s", animationDuration: "1.0s" }}>
                Book a consultation
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
