import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  return (
    <main>

      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}

      {/* Desktop — editorial stagger */}
      <section
        className="hidden md:block bg-cream overflow-hidden"
        style={{ height: "100svh" }}
      >
        <div style={{ height: "96px" }} />

        <div className="relative" style={{ height: "calc(100svh - 96px)" }}>

          {/* Staggered heading — on top of the image */}
          <div className="absolute" style={{ top: "calc(14% + 32px)", left: "5.5%", zIndex: 20 }}>
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Services
            </p>
            <h1
              className="text-brand-black font-normal leading-[0.88] opacity-0 animate-fade-in-up"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(4rem, 9vw, 11rem)", letterSpacing: "0.02em", animationDelay: "400ms" }}
            >
              <span className="block">Evidence</span>
              <span className="block" style={{ paddingLeft: "calc(6vw - 16px)" }}><em style={{ letterSpacing: "-0.01em" }}>led</em> practice</span>
            </h1>
          </div>

          {/* Right image */}
          <div
            className="absolute overflow-hidden opacity-0 animate-fade-in"
            style={{ right: 0, top: 0, width: "42%", height: "95%", zIndex: 10, animationDelay: "100ms" }}
          >
            <img
              src="/assets/dr-yalda-treatment.avif"
              alt="Dr. Yalda Jamali"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bottom-left — small secondary image */}
          <div
            className="absolute overflow-hidden opacity-0 animate-fade-in"
            style={{ left: "clamp(1.25rem, 4vw, 2.5rem)", bottom: "5%", width: "17%", aspectRatio: "1/1", zIndex: 5, animationDelay: "700ms" }}
          >
            <img
              src="/assets/dr-yalda-treatment-02.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Bottom — descriptor text with left rule */}
          <div className="absolute flex gap-4 opacity-0 animate-fade-in" style={{ left: "calc(17% + clamp(2.5rem, 8vw, 5rem))", bottom: "8%", maxWidth: "300px", zIndex: 5, animationDelay: "900ms" }}>
            <div className="w-px bg-neutral-300 self-stretch flex-shrink-0" />
            <p className="text-neutral-600 text-sm font-light leading-relaxed">
              Consultation-led, always. Over a decade of experience in cosmetic medicine.
            </p>
          </div>

        </div>
      </section>

      {/* Mobile — stacked */}
      <section className="md:hidden bg-cream pt-32 pb-0">
        <div className="px-8 mb-8">
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-6">
            Services
          </p>
          <h1
            className="text-brand-black font-normal leading-[0.95]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 11vw, 5rem)", letterSpacing: "0.02em" }}
          >
            Evidence <em>led</em> practice
          </h1>
        </div>
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <img
            src="/assets/yalda-17.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* ─── 2. EDITORIAL INTRO ───────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-44">
        <div className="pg-container flex flex-col gap-10 md:gap-14">

          {/* Eyebrow */}
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
            Dr Yalda Jamali
          </p>

          {/* Large heading */}
          <h2
            className="text-brand-black font-normal leading-[1.0] uppercase"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 4.5vw, 4.5rem)", letterSpacing: "0.02em", maxWidth: "16ch" }}
          >
            Over a decade of experience in aesthetic medicine.
          </h2>

          {/* Italic subtitle */}
          <p
            className="text-brand-black font-normal"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontStyle: "italic", letterSpacing: "0.01em" }}
          >
            The philosophy is subtle and measured
          </p>

          {/* Two-column body text with left rule */}
          <div className="border-l border-neutral-300 pl-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-neutral-600 text-sm font-light leading-relaxed">
              Her work is grounded in evidence-based practice, with a focus on skin quality, facial harmony, and long-term skin health. Every treatment plan is considered and individualised — shaped by the understanding that no two faces, or ageing patterns, are the same. Her approach is consultation-led rather than treatment-led. In keeping with Australian guidelines, specific treatments are not listed here and are instead discussed in detail during a clinical consultation, where suitability, risks, and alternatives can be properly explored.
            </p>
            <p className="text-neutral-600 text-sm font-light leading-relaxed">
              By combining different approaches thoughtfully and conservatively, the aim is always balanced, natural results — with patient safety and education at the centre of every decision. Not all treatments are intended to change how someone looks. Many are designed to support skin quality, encourage collagen production, and maintain healthy, resilient skin over time. The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage.
            </p>
          </div>

        </div>
      </section>

      {/* ─── 3. CONSULTATION APPROACH ─────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-36 overflow-hidden relative">
        {/* Parchment box — left page edge to col-4 boundary (~⅔ behind the image) */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5 relative">
              <FadeIn up={false}>
                <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src="/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right — text */}
            <FadeIn delay={150} className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                The approach
              </p>
              <h2
                className="text-brand-black font-normal leading-[1.0] uppercase"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.03em" }}
              >
                The consultation approach
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Her approach is consultation-led rather than treatment-led. In keeping with Australian guidelines, specific treatments are not listed here and are instead discussed in detail during a clinical consultation, where suitability, risks, and alternatives can be properly explored.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  "Evaluation of anatomy and goals.",
                  "Transparent guidance on what is — and isn't — indicated.",
                  "A considered approach with no pressure to proceed.",
                  "Ongoing support and professional follow-up.",
                ].map((point) => (
                  <p key={point} className="text-neutral-600 text-sm font-light leading-relaxed">{point}</p>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── 4. FLIPPED SECTION ───────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-36 overflow-hidden relative">
        {/* Parchment box — right page edge to col-9 boundary */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <FadeIn delay={150} className="col-span-12 md:col-span-5 flex flex-col gap-8">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                What we address
              </p>
              <h2
                className="text-brand-black font-normal leading-[1.0] uppercase"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.03em" }}
              >
                The philosophy
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Not all treatments are intended to change how someone looks. Many are designed to support skin quality, encourage collagen production, and maintain healthy, resilient skin over time. The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  "Fine lines & natural expression.",
                  "Skin laxity & firming.",
                  "Tone, texture & pigmentation.",
                  "Facial harmony & structural balance.",
                  "Collagen support & skin quality.",
                  "Energy-based devices — BBL, MOXI & Morpheus8.",
                ].map((point) => (
                  <p key={point} className="text-neutral-600 text-sm font-light leading-relaxed">{point}</p>
                ))}
              </div>
            </FadeIn>

            {/* Right — image */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <FadeIn up={false}>
                <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src="/assets/Yalda-1.jpg"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>




      {/* ─── FULL-WIDTH PARALLAX STATEMENT ───────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/dr-yalda-treatment-02.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 z-10 bg-brand-black/55" />
        <div className="relative z-20">
          <p
            className="text-white font-normal leading-[1.0] whitespace-nowrap px-[clamp(1.25rem,4vw,2.5rem)]"
            style={{
              fontFamily: "'Heading', serif",
              fontSize: "clamp(2rem, 5.6vw, 6.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            A focus on skin quality,
          </p>
          <p
            className="text-white font-normal leading-[1.0] whitespace-nowrap px-[clamp(1.25rem,4vw,2.5rem)]"
            style={{
              fontFamily: "'Heading', serif",
              fontSize: "clamp(2rem, 5.6vw, 6.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            <em>facial harmony</em> &amp; long-term skin health.
          </p>
        </div>
      </section>

    </main>
  );
}
