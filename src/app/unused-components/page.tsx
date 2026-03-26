import HeroExperiment from "@/components/HeroExperiment";

export default function UnusedComponentsPage() {
  return (
    <main>

      {/* ─── HERO EXPERIMENT ─────────────────────────────────────────────── */}
      <HeroExperiment />

      {/* ─── FULL-WIDTH CTA — Let's begin ────────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch" style={{ minHeight: "60vh" }}>
          <div className="relative overflow-hidden">
            <img src="/assets/dr-yalda-treatment-03.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-8 px-12 md:px-20 py-20" style={{ minWidth: "clamp(280px, 36vw, 560px)" }}>
            <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">Book a consultation</p>
            <h2 className="text-brand-black font-normal leading-[0.95]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "0.02em" }}>
              Let's<br /><em>begin.</em>
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[26ch]">Your consultation is the first step. No pressure, no commitment — just an honest conversation.</p>
            <a href="/appointments" className="mt-2 px-10 py-4 bg-brand-black text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300">Book Now</a>
          </div>
          <div className="relative overflow-hidden">
            <img src="/assets/Yalda-1.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ─── CLINICAL FOCUS — reference copy (pre-redesign) ──────────────── */}
      <section className="bg-cream py-24 md:py-36 overflow-hidden relative">
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />
        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5 relative">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src="/assets/dr-yalda-treatment-03.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-6">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">Clinical Focus &amp; Advanced Technology</p>
              <div className="flex flex-col gap-3">
                <h2 className="text-brand-black font-normal leading-[1.0] uppercase" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.03em" }}>
                  Clinical Focus &amp; Advanced Technology
                </h2>
              </div>
              <div className="flex flex-col gap-6 pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-brand-black font-normal leading-snug" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.2vw, 1.15rem)", letterSpacing: "0.02em" }}>Clinical Concerns</p>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">Dr. Yalda works across a broad range of concerns, including fine lines and wrinkles, skin laxity, uneven skin tone, facial balancing and contouring, changes in volume, and collagen loss.</p>
                </div>
                <div className="w-full h-px bg-neutral-200" />
                <div className="flex flex-col gap-1">
                  <p className="text-brand-black font-normal leading-snug" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.2vw, 1.15rem)", letterSpacing: "0.02em" }}>Advanced Modalities</p>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">A strong emphasis is placed on energy-based devices and laser technologies, including BBL, MOXI and Morpheus8, which form an important part of a multi-modality approach.</p>
                </div>
                <p className="text-neutral-400 text-[10px] font-light leading-relaxed italic">In accordance with Australian regulatory guidelines, specific treatments are not listed here. Our approach ensures that clinical decisions are made only after a thorough medical assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FLIPPED SECTION — text left, photo right ─────────────────── */}
      <section className="bg-cream py-24 md:py-36 overflow-hidden relative">
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />
        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
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
            </div>

            {/* Right — image */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
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

      {/* ─── WHAT WE ADDRESS — photo left, text + list right ─────────────── */}
      <section className="bg-cream py-24 md:py-36">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-10 md:gap-8 items-start">

            {/* Left — portrait */}
            <div className="col-span-12 md:col-span-5">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/Yalda-1.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right — text */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-10 md:pt-4">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                What we address
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  Not all treatments are intended to change how someone looks. Many are designed to support skin quality, encourage collagen production, and maintain healthy, resilient skin over time. The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage.
                </p>
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  A strong emphasis is placed on energy-based devices and laser technologies, which form an important part of a multi-modality approach. Dr Jamali has access to a range of advanced devices across her Sydney clinics, which can be incorporated into treatment plans where appropriate.
                </p>
              </div>

              <div className="flex flex-col gap-0">
                {[
                  "Fine lines & natural expression",
                  "Skin laxity & firming",
                  "Tone, texture & pigmentation",
                  "Facial harmony & structural balance",
                  "Collagen support & skin quality",
                  "Energy-based devices — BBL, MOXI & Morpheus8",
                ].map((item) => (
                  <div key={item} className="py-4 border-t border-neutral-200 last:border-b">
                    <p className="text-brand-black text-sm font-light tracking-wide">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/appointments"
                className="self-start px-8 py-4 bg-brand-black text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
              >
                Book a Consultation
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* ─── THE APPROACH — text + list left, photo right ─────────────────── */}
      <section className="bg-parchment py-24 md:py-36">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-10 md:gap-8 items-start">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-10 md:pt-4">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                The approach
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  Her approach is consultation-led rather than treatment-led. In keeping with Australian guidelines, specific treatments are not listed here and are instead discussed in detail during a clinical consultation, where suitability, risks, and alternatives can be properly explored.
                </p>
              </div>

              <div className="flex flex-col gap-0">
                {[
                  "A thorough assessment of your concerns and goals",
                  "Honest discussion of what is — and isn't — indicated",
                  "A personalised plan, with no pressure to proceed",
                  "Ongoing support and follow-up as part of the relationship",
                ].map((point) => (
                  <div key={point} className="py-4 border-t border-neutral-200 last:border-b flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="/appointments"
                className="self-start px-8 py-4 bg-brand-black text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
              >
                Book a Consultation
              </a>

            </div>

            {/* Right — portrait */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/dr-yalda-treatment.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EDITORIAL INTRO ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-44">
        <div className="pg-container flex flex-col gap-10 md:gap-14">

          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
            Dr Yalda Jamali
          </p>

          <h2
            className="text-brand-black font-normal leading-[1.0] uppercase"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 4.5vw, 4.5rem)", letterSpacing: "0.02em", maxWidth: "16ch" }}
          >
            Over a decade of experience in aesthetic medicine.
          </h2>

          <p
            className="text-brand-black font-normal"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontStyle: "italic", letterSpacing: "0.01em" }}
          >
            The philosophy is subtle and measured
          </p>

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

      {/* ─── IN THE CLINIC — numbered list + image ───────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12">In the clinic</p>
            {[
              { num: "01", title: "Facial Balancing & Contouring", body: "A personalised, meticulous approach to enhance and harmonise your features with natural, refined results." },
              { num: "02", title: "Anti-Wrinkle Treatments", body: "Precision muscle relaxant injections tailored to soften expression lines while preserving your natural movement." },
              { num: "03", title: "Skin Health & Dermal Therapy", body: "Evidence-based skin treatments combining her MSc in dermatology with a deep understanding of long-term skin wellbeing." },
            ].map(({ num, title, body }, i, arr) => (
              <div key={num}>
                <div className="py-8">
                  <div className="flex items-baseline gap-5 mb-3">
                    <span className="text-neutral-300 leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3vw, 2.5rem)" }}>{num}</span>
                    <h3 className="text-brand-black font-normal leading-tight italic" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}>{title}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed max-w-md pl-14">{body}</p>
                </div>
                {i < arr.length - 1 && <div className="w-full h-px bg-neutral-200" />}
              </div>
            ))}
          </div>
          <div className="relative">
            <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali in clinic" className="w-full aspect-[3/4] object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ─── APPROACH — three column dark ─────────────────────────────────── */}
      <section className="bg-brand-black py-24 md:py-36">
        <div className="pg-container flex flex-col items-center gap-16 md:gap-24">

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">The approach</p>
            <h2
              className="text-white font-normal leading-[1.1]"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              The Dr. Yalda <em>approach</em>
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:divide-x divide-neutral-800">
            {[
              { num: "01", label: "Consultation-Led", body: "Suitability, risks, and alternatives are discussed in detail during a clinical consultation before any treatment is considered." },
              { num: "02", label: "Identity Preservation", body: "The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage." },
              { num: "03", label: "Individualised Care", body: "Every treatment plan is considered and individualised, shaped by the understanding that no two faces—or ageing patterns—are the same." },
            ].map(({ num, label, body }) => (
              <div key={num} className="relative px-0 md:px-10 first:md:pl-0 last:md:pr-0 py-10 md:py-0 flex flex-col gap-4 overflow-hidden">
                <span
                  className="absolute top-0 right-2 md:right-4 font-normal leading-none select-none pointer-events-none"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", color: "rgba(255,255,255,0.06)", letterSpacing: "0.02em" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <p className="text-white font-normal leading-tight relative z-10" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.3vw, 1.2rem)", letterSpacing: "0.03em" }}>{label}</p>
                <p className="text-neutral-400 text-sm font-light leading-relaxed relative z-10">{body}</p>
              </div>
            ))}
          </div>

          <a
            href="/appointments"
            className="px-10 py-4 border border-neutral-700 text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:border-white transition-colors duration-300"
          >
            Book a Consultation
          </a>

        </div>
      </section>

    </main>
  );
}
