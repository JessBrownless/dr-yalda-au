import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import ImageReveal from "@/components/ImageReveal";
import HeroHome from "@/components/HeroHome";
import BookingCTA from "@/components/BookingCTA";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "Cosmetic Services, Sydney",
  description:
    "Consultation-led cosmetic services in Sydney with Dr Yalda Jamali — anti-wrinkle treatments, skin quality and facial balancing, guided by medical evidence.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cosmetic Services, Sydney — Dr Yalda Jamali",
    description:
      "Consultation-led cosmetic services in Sydney with Dr Yalda Jamali — anti-wrinkle treatments, skin quality and facial balancing, guided by medical evidence.",
    url: "/services",
    images: [{ url: "/assets/og-dr-yalda.jpg", width: 1200, height: 630, alt: "Dr Yalda Jamali — Sydney cosmetic doctor" }],
  },
};

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
          {/* Kicker sits above the grid so items-baseline can align the right-column
              body to the HEADING's first line (with the kicker inside the column,
              baseline alignment latched onto the kicker instead). The gap below it
              still comes from the heading's from-overline margin. */}
          <p className="overline">
            How Dr Yalda can help
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-baseline">

            {/* Left — heading */}
            <div className="md:col-span-6">
              <h2 className="heading-lg from-overline">
                Personalised results, built on a decade of clinical practice.
              </h2>
            </div>

            {/* Right — body */}
            <div className="md:col-span-5 md:col-start-8">
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
            <div className="md:col-span-6 relative">
              <div>
                <ImageReveal className="overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <img
                    src="/assets/dr-yalda-treatment-03.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 35%" }}
                  />
                </ImageReveal>
              </div>
            </div>

            {/* Right — text */}
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-6">

              {/* Eyebrow + heading */}
              <div>
                <h2 className="overline">
                  Specialism
                </h2>
                <h3 className="heading-lg from-overline">
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
            <div className="md:col-span-5 flex flex-col order-2 md:order-1">
              <h2 className="overline mb-6">
                The Dr Yalda approach
              </h2>
              {[
                { num: "01", label: "Consultation-Led", body: "Suitability, risks, and alternatives are discussed before any treatment begins." },
                { num: "02", label: "Identity Preservation", body: "Not a different face, but the best version of your own at your current stage." },
                { num: "03", label: "Individualised Care", body: "Every plan reflects that no two faces—or ageing patterns—are alike." },
              ].map(({ num, label, body }) => (
                <div key={num} className="flex items-baseline gap-5 py-8 border-b border-brand-black/10 first:border-t first:border-brand-black/10">
                  <span className="stat-lg text-brand-black/10 flex-shrink-0">
                    {num}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="heading-md">
                      {label}
                    </h3>
                    <p className="body-serif">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — portrait */}
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <ImageReveal className="overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <img
                  src="/assets/Yalda-1.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 35%" }}
                />
              </ImageReveal>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-brand-black text-on-dark-high py-24 md:py-32">
        <div className="pg-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 md:items-start">

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="overline">
                  Common questions
                </p>
                <h2 className="heading-lg from-overline">
                  FAQs
                </h2>
              </div>
              <p className="body-serif text-on-dark-low max-w-sm">
                A few things patients often ask before booking. If your question isn&apos;t answered here, I&apos;m happy to talk it through in a consultation.
              </p>
              <a
                href="/appointments"
                className="btn btn-secondary-dark self-start mt-2"
                data-aos="fade"
                data-aos-delay="150"
              >
                Book a consultation
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <FaqAccordion />
            </div>

          </div>
        </div>
      </section>

      <BookingCTA />
      <InstagramFeed />

    </main>
  );
}
