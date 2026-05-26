import FaqAccordion from "@/components/FaqAccordion";
import HeroHome from "@/components/HeroHome";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";

export default function ServicesPage() {
  return (
    <main className="text-brand-black">
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
          <p className="overline mb-6">
            How Dr Yalda can help
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-baseline">

            {/* Left — heading */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="heading-lg">
                Natural-looking results, built on a decade of clinical practice.
              </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

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
                  <div key={item} className="flex items-center gap-4 py-3 border-t border-brand-black/10 first:border-t-0">
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

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
                  {i > 0 && <div className="w-full h-px bg-brand-black/10 my-8" />}
                  <div className="flex items-baseline gap-5">
                    <span
                      className="stat-lg text-brand-black/10 flex-shrink-0 select-none"
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
      <section className="bg-brand-black text-on-dark-high py-24 md:py-32">
        <div className="pg-container">
          <h2 className="overline mb-6">
            FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 md:items-baseline">

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

      <div className="mt-32 md:mt-52">
        <BookingCTA />
      </div>
      <InstagramFeed />

    </main>
  );
}
