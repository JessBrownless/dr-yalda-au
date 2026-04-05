import FaqAccordion from "@/components/FaqAccordion";

export default function ServicesPage() {
  return (
    <main>
      {/* ─── INTRO STATEMENT ─────────────────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-44 flex items-center justify-center">
        <div className="max-w-[640px] mx-auto px-8 flex flex-col items-center gap-8 text-center">

          {/* Headline */}
          <p
            className="text-brand-black font-normal leading-[1.05]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", letterSpacing: "-0.01em" }}
          >
            Over a decade of clinical expertise in aesthetic medicine.
          </p>


          {/* Disciplined paragraph */}
          <p className="text-neutral-500 font-light leading-[1.85] tracking-[0.03em]" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
            In accordance with Australian guidelines, specific treatments are discussed only during a clinical consultation. Our evidence-based practice prioritises your skin quality, facial harmony, and long-term health.
          </p>

        </div>
      </section>

      {/* ─── 3. CONSULTATION APPROACH ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative py-24 md:flex md:items-center" style={{ minHeight: "100vh" }}>
        {/* Cream box — left page edge to col-4 boundary (~⅔ behind the image) */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5 relative">
              <div>
                <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                  <img
                    src="/assets/dr-yalda-treatment-03.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover object-center md:object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col gap-8">

              {/* Eyebrow + heading */}
              <div className="flex flex-col gap-3">
                <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                  Specialism
                </p>
                <h2
                  className="text-brand-black font-normal leading-[1.0] uppercase"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.03em" }}
                >
                  Clinical Focus
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
                ].map((item, i) => (
                  <div key={item} className="flex items-baseline gap-4 py-3 border-t border-neutral-200 last:border-b">
                    <span
                      className="text-neutral-300 flex-shrink-0 leading-none"
                      style={{ fontFamily: "'Heading', serif", fontSize: "0.6rem", letterSpacing: "0.15em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-brand-black font-light tracking-wide" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* Device row */}
              <div className="flex flex-col gap-3 pb-0">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Advanced Modalities
                </p>
                <p className="text-brand-black font-light tracking-[0.2em]" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
                  BBL &nbsp;·&nbsp; MOXI &nbsp;·&nbsp; Morpheus8
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── APPROACH — numbered list + image ────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative flex items-center" style={{ minHeight: "100vh" }}>
        {/* Cream box — right page edge, behind image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />
        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Left — numbered list */}
            <div className="col-span-12 md:col-span-6 flex flex-col order-2 md:order-1">
              <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase mb-12">
                The Dr. Yalda approach
              </p>
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
                      <p
                        className="text-brand-black font-normal leading-tight"
                        style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", fontStyle: "italic", letterSpacing: "0.01em" }}
                      >
                        {label}
                      </p>
                      <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>{body}</p>
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
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-brand-black py-24 md:py-40">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            <div className="col-span-12 md:col-span-4">
              <p className="text-neutral-600 text-[9px] font-light tracking-[0.5em] uppercase mb-6">
                FAQs
              </p>
              <h2
                className="text-white font-normal"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.4vw, 3rem)", lineHeight: 1.05, letterSpacing: "0.04em", textTransform: "uppercase" }}
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
      <div className="bg-parchment py-16 md:py-24">
      <section className="relative overflow-hidden bg-parchment" style={{ minHeight: "clamp(500px, 68vh, 820px)" }}>
        <div className="absolute left-0 top-0 hidden md:block overflow-hidden" style={{ width: "54%", height: "54vw" }}>
          <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
        <div className="absolute right-0 bottom-0 hidden md:block overflow-hidden" style={{ width: "34%", top: "18%" }}>
          <img src="/assets/dr-yalda-treatment.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
        <div className="absolute z-10 hidden md:flex flex-col gap-7 justify-center" style={{ left: "29%", top: "50%", transform: "translateY(-50%)", width: "38%", background: "#F6F2EF", padding: "clamp(2rem, 3.5vw, 4rem)" }}>
          <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>Book a consultation</p>
          <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.8vw, 3.25rem)", letterSpacing: "0" }}>
            Let's begin with a conversation
          </h2>
          <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
            Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
          </p>
          <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
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
            <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 6vw, 2.5rem)", letterSpacing: "0" }}>Let's begin with a conversation</h2>
            <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.</p>
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
