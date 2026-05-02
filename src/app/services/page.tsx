import FaqAccordion from "@/components/FaqAccordion";
import HeroHome from "@/components/HeroHome";

export default function ServicesPage() {
  return (
    <main>
      <HeroHome
        title="Services"
        tagline={<>Evidence-based cosmetic services across Sydney, delivered through <em>consultation-led</em> care.</>}
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
      <section id="intro" className="bg-parchment py-32 md:py-52 relative scroll-mt-20">
        <div className="pg-container">
          {/* Eyebrow */}
          <h2 className="overline mb-6">
            How Dr Yalda can help
          </h2>

          <div className="grid grid-cols-12 gap-8 md:gap-16 items-baseline">

            {/* Left — heading */}
            <div className="col-span-12 md:col-span-6">
              <h3 className="heading-lg">
                Natural-looking results, built on a decade of clinical practice.
              </h3>
            </div>

            {/* Right — body */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <p className="body-serif">
                Dr. Yalda's practice centres on skin quality, facial harmony, and long-term skin health — but in accordance with Australian guidelines, specific cosmetic treatments are only discussed during a private clinical consultation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. CONSULTATION APPROACH ─────────────────────────────────────── */}
      <section className="bg-parchment overflow-hidden relative pb-12 md:pb-16 md:flex md:items-start">

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-10 md:gap-12 items-center">

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
                <h2 className="overline mb-6">
                  Specialism
                </h2>
                <h3 className="heading-lg">
                  Clinical focus
                </h3>
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
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 py-3 border-t border-neutral-200 first:border-t-0">
                    <svg
                      className="flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 7l3.5 3.5L12 4" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="body-serif">{item}</p>
                  </div>
                ))}
              </div>

              {/* Device row */}
              <div>
                <p className="overline mb-6">
                  Advanced Modalities
                </p>
                <p className="body-serif">
                  BBL &nbsp;·&nbsp; MOXI &nbsp;·&nbsp; Morpheus8
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── APPROACH — numbered list + image ────────────────────────────── */}
      <section className="bg-parchment overflow-hidden relative pt-12 md:pt-16 pb-24 md:pb-32 flex items-center" style={{ minHeight: "100vh" }}>
        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Left — numbered list */}
            <div className="col-span-12 md:col-span-6 flex flex-col order-2 md:order-1">
              <h2 className="overline mb-6">
                Methodology
              </h2>
              <h3 className="heading-lg mb-8">
                The Dr. Yalda approach
              </h3>
              {[
                { num: "01", label: "Consultation-Led", body: "Suitability, risks, and alternatives are discussed in detail during a clinical consultation before any treatment is considered." },
                { num: "02", label: "Identity Preservation", body: "The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage." },
                { num: "03", label: "Individualised Care", body: "Every treatment plan is considered and individualised, shaped by the understanding that no two faces—or ageing patterns—are the same." },
              ].map(({ num, label, body }, i) => (
                <div key={num}>
                  {i > 0 && <div className="w-full h-px bg-neutral-200 my-8" />}
                  <div className="flex items-baseline gap-5">
                    <span
                      className="stat-lg flex-shrink-0 select-none"
                      style={{ color: "rgba(45,44,42,0.06)" }}
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                    <div className="flex flex-col gap-4">
                      <h3 className="heading-md">
                        {label}
                      </h3>
                      <p className="body-serif">{body}</p>
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
          <h2 className="overline mb-6">
            FAQs
          </h2>
          <div className="grid grid-cols-12 gap-6 md:gap-12 md:items-baseline">

            <div className="col-span-12 md:col-span-4">
              <p className="heading-lg">
                Common questions
              </p>
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
        <div className="absolute z-10 hidden md:flex flex-col gap-8 justify-center" style={{ left: "29%", top: "50%", transform: "translateY(-50%)", width: "38%", background: "#F6F2EF", padding: "clamp(2rem, 3.5vw, 4rem)" }}>
          <div className="flex flex-col gap-6">
            <p className="overline">Book a consultation</p>
            <h3 className="heading-lg">
              Let's begin with a conversation
            </h3>
          </div>
          <p className="body-serif">
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
          <div className="flex flex-col gap-8 p-8" style={{ background: "#F6F2EF", color: "#2D2C2A" }}>
            <div className="flex flex-col gap-6">
              <p className="overline">Book a consultation</p>
              <h3 className="heading-lg">Let's begin with a conversation</h3>
            </div>
            <p className="body-serif">Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.</p>
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
