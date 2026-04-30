import FaqAccordion from "@/components/FaqAccordion";
import HeroHome from "@/components/HeroHome";

export default function ServicesPage() {
  return (
    <main>
      <HeroHome
        title="Services"
        tagline="Evidence-based cosmetic services across Sydney, delivered through consultation-led care."
        height="90dvh"
        align="left"
        verticalAlign="bottom"
        bottomRight={{ label: "See services", href: "#intro" }}
        showScroll={false}
        showSocials={false}
        parallax={false}
        images={[{ src: "/assets/IMG_0029.avif", position: "center" }]}
      />

      {/* ─── INTRO STATEMENT ─────────────────────────────────────────────── */}
      <section id="intro" className="bg-brand-white pt-24 md:pt-40 pb-12 md:pb-40 relative scroll-mt-20">
        <div className="pg-container">
          {/* Eyebrow */}
          <p className="eyebrow text-neutral-500 mb-8 md:mb-10">
            How Dr Yalda can help
          </p>

          <div className="grid grid-cols-12 gap-8 md:gap-16 items-baseline">

            {/* Left — heading */}
            <div className="col-span-12 md:col-span-6">
              <h2
                className="text-brand-black font-normal leading-[1.15]"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)", letterSpacing: "-0.005em" }}
              >
                Natural-looking results, built on a decade of clinical practice.
              </h2>
            </div>

            {/* Right — body */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <p className="text-neutral-600 font-light leading-[1.85] tracking-[0.01em]" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
                Dr. Yalda's practice centres on skin quality, facial harmony, and long-term skin health — but in accordance with Australian guidelines, specific cosmetic treatments are only discussed during a private clinical consultation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. CONSULTATION APPROACH ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative pt-12 md:pt-16 pb-12 md:pb-16 md:flex md:items-center" style={{ minHeight: "100vh" }}>
        {/* Cream box — left page edge to col-4 boundary (~⅔ behind the image) */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-y-14 gap-x-8 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5 relative">
              <div>
                <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                  <img
                    src="/assets/dr-yalda-treatment-03.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 35%" }}
                  />
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col gap-8">

              {/* Eyebrow + heading */}
              <div>
                <p className="eyebrow text-neutral-500 mb-8 md:mb-10">
                  Specialism
                </p>
                <h2
                  className="text-brand-black font-normal leading-[1.15] uppercase"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)", letterSpacing: "0.02em" }}
                >
                  Clinical focus
                </h2>
              </div>

              {/* Numbered index */}
              <div className="flex flex-col">
                {[
                  "Fine lines & wrinkles",
                  "Skin laxity",
                  "Uneven skin tone",
                  "Facial balancing & contouring",
                  "Volume & collagen loss",
                  "Preventative skin health",
                ].map((item, i) => (
                  <div key={item} className="flex items-baseline gap-4 py-3 border-t border-neutral-200 first:border-t-0">
                    <span
                      className="text-neutral-300 flex-shrink-0 leading-none"
                      style={{ fontFamily: "'Heading', serif", fontSize: "0.6rem", letterSpacing: "0.15em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-neutral-600 font-light tracking-wide" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* Device row */}
              <div>
                <p className="eyebrow text-neutral-500 mb-8 md:mb-10">
                  Advanced Modalities
                </p>
                <p className="text-neutral-600 font-light tracking-[0.2em]" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
                  BBL &nbsp;·&nbsp; MOXI &nbsp;·&nbsp; Morpheus8
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── APPROACH — numbered list + image ────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative pt-12 md:pt-16 pb-24 md:pb-32 flex items-center" style={{ minHeight: "100vh" }}>
        {/* Cream box — right page edge, behind image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />
        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Left — numbered list */}
            <div className="col-span-12 md:col-span-6 flex flex-col order-2 md:order-1">
              <p className="eyebrow text-neutral-500 mb-8 md:mb-10">
                Methodology
              </p>
              <h2
                className="text-brand-black font-normal leading-[1.15] uppercase mb-8 md:mb-10"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)", letterSpacing: "0.02em" }}
              >
                The Dr. Yalda approach
              </h2>
              {[
                { num: "01", label: "Consultation-Led", body: "Suitability, risks, and alternatives are discussed in detail during a clinical consultation before any treatment is considered." },
                { num: "02", label: "Identity Preservation", body: "The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage." },
                { num: "03", label: "Individualised Care", body: "Every treatment plan is considered and individualised, shaped by the understanding that no two faces—or ageing patterns—are the same." },
              ].map(({ num, label, body }, i) => (
                <div key={num}>
                  {i > 0 && <div className="w-full h-px bg-neutral-200 my-8" />}
                  <div className="flex items-baseline gap-5">
                    <span
                      className="font-normal leading-none flex-shrink-0 select-none"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "rgba(45,44,42,0.06)", letterSpacing: "0.02em" }}
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-brand-black font-normal leading-[1.15] uppercase"
                        style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", letterSpacing: "0.02em" }}
                      >
                        {label}
                      </h3>
                      <p className="text-neutral-600 font-light leading-relaxed" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — portrait */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
              <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                <img
                  src="/assets/Yalda-1.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 35%" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-brand-black py-24 md:py-32">
        <div className="pg-container">
          <p className="eyebrow text-neutral-400 mb-8 md:mb-10">
            FAQs
          </p>
          <div className="grid grid-cols-12 gap-6 md:gap-12 md:items-baseline">

            <div className="col-span-12 md:col-span-4">
              <h2
                className="text-cream font-normal uppercase"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)", lineHeight: 1.15, letterSpacing: "0.02em" }}
              >
                Common questions
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <FaqAccordion />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-parchment md:py-24">
      <section className="relative overflow-hidden bg-parchment" style={{ minHeight: "clamp(500px, 68vh, 820px)" }}>
        <div className="absolute left-0 top-0 hidden md:block overflow-hidden" style={{ width: "54%", height: "54vw" }}>
          <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
        <div className="absolute right-0 bottom-0 hidden md:block overflow-hidden" style={{ width: "34%", top: "18%" }}>
          <img src="/assets/dr-yalda-treatment.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
        <div className="absolute z-10 hidden md:flex flex-col gap-7 justify-center" style={{ left: "29%", top: "50%", transform: "translateY(-50%)", width: "38%", background: "#F6F2EF", padding: "clamp(2rem, 3.5vw, 4rem)" }}>
          <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>Book a consultation</p>
          <h2 className="text-brand-black font-normal leading-[1.15] uppercase" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)", letterSpacing: "0.02em" }}>
            Let's begin with a conversation
          </h2>
          <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
            Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
          </p>
          <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
            Book a consultation
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6 p-8" style={{ background: "#F6F2EF", color: "#2D2C2A" }}>
            <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>Book a consultation</p>
            <h2 className="text-brand-black font-normal leading-[1.15] uppercase" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 6vw, 2.875rem)", letterSpacing: "0.02em" }}>Let's begin with a conversation</h2>
            <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.</p>
            <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase rounded-full px-7 py-3.5 transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
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
