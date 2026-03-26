import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  return (
    <main>

      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}

      {/* Desktop — editorial stagger */}
      <section
        className="hidden md:block bg-parchment overflow-hidden"
        style={{ height: "100svh" }}
      >
        <div style={{ height: "96px" }} />

        <div className="relative" style={{ height: "calc(100svh - 96px)" }}>

          {/* Staggered heading — on top of the image */}
          <div className="absolute" style={{ top: "calc(14% + 32px)", left: "5.5%", zIndex: 20 }}>
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Services
            </p>
            <h1
              className="text-brand-black font-normal leading-[0.88] opacity-0 animate-fade-in-up"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.75rem, 8.5vw, 10.5rem)", letterSpacing: "0.04em", animationDelay: "600ms" }}
            >
              <span className="block">Evidence</span>
              <span className="block" style={{ paddingLeft: "calc(6vw - 18px)" }}><em style={{ letterSpacing: "-0.01em" }}>led</em> practice</span>
            </h1>
          </div>

          {/* Right image */}
          <div
            className="absolute overflow-hidden opacity-0 animate-fade-in"
            style={{ right: 0, top: 0, width: "43%", height: "95%", zIndex: 10, animationDelay: "0ms" }}
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
            style={{ left: "clamp(1.25rem, 4vw, 2.5rem)", bottom: "5%", width: "17%", aspectRatio: "1/1", zIndex: 5, animationDelay: "1100ms" }}
          >
            <img
              src="/assets/IMG_00372.avif"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Bottom — descriptor text with left rule */}
          <div className="absolute flex gap-4 opacity-0 animate-fade-in" style={{ left: "calc(17% + clamp(2.5rem, 8vw, 5rem))", bottom: "8%", maxWidth: "300px", zIndex: 5, animationDelay: "900ms" }}>
            <div className="w-px bg-neutral-300 self-stretch flex-shrink-0" />
            <p className="text-neutral-600 text-sm font-light leading-relaxed">
              Dr Yalda Jamali. A private, consultation-led clinical practice based in Sydney.
            </p>
          </div>

        </div>
      </section>

      {/* Mobile — stacked */}
      <section className="md:hidden bg-parchment pt-16 pb-0">
        <div className="px-8 mb-20">
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-10">
            Services
          </p>
          <h1
            className="text-brand-black font-normal leading-[0.95]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 11vw, 5rem)", letterSpacing: "0.02em" }}
          >
            Evidence <em>led</em> practice
          </h1>
        </div>
        <div className="relative overflow-hidden aspect-square">
          <img
            src="/assets/dr-yalda-treatment.avif"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 flex gap-4 px-6 py-5 backdrop-blur-md bg-white/10">
            <div className="w-px bg-white/50 flex-shrink-0" />
            <p className="text-white text-[0.8rem] font-light leading-relaxed">
              Dr Yalda Jamali. A private, consultation-led clinical practice based in Sydney.
            </p>
          </div>
        </div>
      </section>


      {/* ─── CONNECTOR ────────────────────────────────────────────────────── */}
      <div className="bg-cream hidden md:flex justify-center">
        <div className="w-px bg-neutral-200" style={{ height: "100px" }} />
      </div>

      {/* ─── INTRO STATEMENT ─────────────────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-44 flex items-center justify-center">
        <FadeIn className="max-w-[640px] mx-auto px-8 flex flex-col items-center gap-8 text-center">

          {/* Headline */}
          <p
            className="text-brand-black font-normal leading-[1.05]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", letterSpacing: "-0.01em" }}
          >
            Over a decade of clinical expertise in aesthetic medicine.
          </p>


          {/* Disciplined paragraph */}
          <p className="text-neutral-500 text-[0.92rem] font-light leading-[1.85] tracking-[0.03em]">
            In accordance with Australian guidelines, specific treatments are discussed only during a clinical consultation. Our evidence-based practice prioritises your skin quality, facial harmony, and long-term health.
          </p>

        </FadeIn>
      </section>

      {/* ─── 3. CONSULTATION APPROACH ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative flex items-center" style={{ minHeight: "100vh" }}>
        {/* Parchment box — left page edge to col-4 boundary (~⅔ behind the image) */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5 relative">
              <FadeIn up={false}>
                <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                  <img
                    src="/assets/dr-yalda-treatment-03.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover object-center md:object-top"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right — text */}
            <FadeIn delay={150} className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col gap-8">

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
                    <p className="text-brand-black text-sm font-light tracking-wide">{item}</p>
                  </div>
                ))}
              </div>

              {/* Device row */}
              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Advanced Modalities
                </p>
                <p className="text-brand-black text-sm font-light tracking-[0.2em]">
                  BBL &nbsp;·&nbsp; MOXI &nbsp;·&nbsp; Morpheus8
                </p>
              </div>

            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY STATEMENT ─────────────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-48 flex items-center justify-center relative overflow-hidden">
        <img src="/assets/logo-circle.svg" alt="" aria-hidden="true" className="absolute w-[160px] h-[160px] md:w-[280px] md:h-[280px] opacity-[0.04] pointer-events-none select-none" />
        <FadeIn className="relative max-w-[640px] mx-auto px-10 md:px-8 text-center flex flex-col items-center gap-8 md:gap-6">
          <p className="text-neutral-400 text-[8px] font-light tracking-[0.45em] uppercase">
            The philosophy
          </p>
          <p
            className="text-brand-black font-normal leading-[1.05]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", letterSpacing: "-0.01em" }}
          >
            Balanced, <em>natural results</em> — with patient safety and education at the centre of every decision.
          </p>
        </FadeIn>
      </section>

      {/* ─── APPROACH — numbered list + image ────────────────────────────── */}
      <section className="bg-cream overflow-hidden relative flex items-center" style={{ minHeight: "100vh" }}>
        {/* Parchment box — right page edge, behind image */}
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
                      <p className="text-neutral-500 text-sm font-light leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — portrait */}
            <FadeIn up={false} className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
              <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                <img
                  src="/assets/Yalda-1.jpg"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── FOOTER SIGNATURE ─────────────────────────────────────────────── */}
      <div className="bg-cream border-t border-neutral-100 py-16 flex flex-col items-center gap-4">
        <img src="/assets/logo-circle.svg" alt="" aria-hidden="true" className="w-5 h-5 opacity-20" />
        <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
          Dr. Yalda Jamali · Sydney
        </p>
      </div>

    </main>
  );
}
