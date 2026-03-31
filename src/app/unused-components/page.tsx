import HeroExperiment from "@/components/HeroExperiment";
import HeroExperimentSaved from "@/components/HeroExperimentSaved";
import HeroSplit from "@/components/HeroSplit";
import SplitSection from "@/components/SplitSection";
import StickyScrollSection from "@/components/StickyScrollSection";
import ParallaxHero from "@/components/ParallaxHero";
import TwoPanelHero from "@/components/TwoPanelHero";

export default function UnusedComponentsPage() {
  return (
    <main>

      {/* ─── 50/50 SPLIT (TwoPanelHero) ──────────────────────────────────── */}
      <TwoPanelHero />

      {/* ─── ABOUT PAGE HERO ─────────────────────────────────────────────── */}

      {/* Hero — mobile */}
      <section className="md:hidden bg-parchment flex flex-col pt-32 pb-8">

        <div className="flex flex-col items-start text-left px-8 pb-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-neutral-400 text-[10px] font-light tracking-[0.4em] uppercase mb-4">
            About
          </p>
          <h1
            className="text-brand-black font-normal leading-[1.05]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 10vw, 4.5rem)", letterSpacing: "0.15em" }}
          >
            Dr. Yalda Jamali
          </h1>
        </div>

        <div className="flex gap-8 px-8 pb-6">
          <div className="relative flex-1 overflow-hidden opacity-0 animate-fade-in" style={{ aspectRatio: "1/2", animationDelay: "0.25s" }}>
            <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
            <div className="hero-noise" />
          </div>
          <div className="relative flex-1 overflow-hidden opacity-0 animate-fade-in" style={{ aspectRatio: "1/2", animationDelay: "0.4s" }}>
            <img src="/assets/IMG_0012.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-top" />
            <div className="hero-noise" />
          </div>
        </div>

      </section>

      {/* Hero — desktop */}
      <section className="hidden md:grid md:grid-cols-2 relative" style={{ height: "75vh" }}>

        <div className="relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <img
            src="/assets/Yalda-17.avif"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="hero-noise" />
        </div>

        <h1
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-normal leading-none pointer-events-none"
          style={{ fontFamily: "'Heading', serif", fontSize: "clamp(4rem, 8vw, 8rem)", letterSpacing: "0.15em" }}
        >
          About
        </h1>

        <div className="relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src="/assets/IMG_0012.avif"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="hero-noise" />
        </div>

      </section>

      {/* ─── HER STORY ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-32 md:py-52 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12">Her story</p>
          <h2
            className="text-brand-black font-normal leading-[1.1]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.02em", maxWidth: "18ch" }}
          >
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* ─── HERO EXPERIMENT ─────────────────────────────────────────────── */}
      <HeroExperimentSaved />
      <HeroExperiment />
      <HeroSplit />

      {/* ─── MEDIA PAGE HERO (old) ───────────────────────────────────────── */}
      <section className="bg-parchment relative grid grid-cols-12 overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="hidden md:block col-span-4 relative">
          <img src="/assets/IMG_0031.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "65% top" }} />
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center gap-6 px-8 py-32 md:py-0">
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">Media &amp; Press</p>
          <h1 className="text-brand-black font-normal leading-[1.0]" style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)", letterSpacing: "-0.01em" }}>
            AS SEEN<br /><em>in press.</em>
          </h1>
          <p className="text-neutral-600 text-sm font-light leading-relaxed max-w-[28ch]">Features, interviews, and brand collaborations with some of Australia&rsquo;s most trusted publications.</p>
          <a href="#features" className="mt-2 px-10 py-4 border border-brand-black/30 text-brand-black text-[9px] font-light tracking-[0.4em] uppercase hover:bg-brand-black hover:text-white transition-all duration-300">View Features</a>
        </div>
        <div className="hidden md:flex col-span-4 flex-col justify-center pr-10 pl-4 py-24">
          <div className="relative">
            <div className="self-start" style={{ width: "78%", aspectRatio: "3/4" }}>
              <img src="/assets/IMG_0041.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute" style={{ width: "55%", aspectRatio: "4/3", top: "-8%", right: 0, zIndex: 10 }}>
              <img src="/assets/IMG_0038.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY SCROLL — Collaborator / Cosmetic Doctor / Educator ────── */}
      <StickyScrollSection />

      {/* ─── HER APPROACH — SplitSection ─────────────────────────────────── */}
      <SplitSection imageSrc="/assets/Yalda-1.avif" imageAlt="Dr. Yalda Jamali" imagePosition="left">
        <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-8">
          Her approach
        </p>
        <h2
          className="text-brand-black font-normal leading-tight mb-8"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
          Natural results,<br />always.
        </h2>
        <div className="w-8 h-px bg-neutral-400 mb-8" />
        <p className="text-neutral-600 text-base font-light leading-relaxed mb-4 max-w-sm">
          I&rsquo;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to enhance and harmonise features with natural, refined results.
        </p>
        <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
          My aim is always to boost your confidence and deliver outcomes that reflect your unique beauty.
        </p>
        <a
          href="/about"
          className="self-start text-brand-black text-[10px] font-light tracking-[0.35em] uppercase border-b border-neutral-400 pb-1 hover:border-brand-black transition-colors duration-300"
        >
          About Dr. Yalda
        </a>
      </SplitSection>

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

      {/* ─── ABOUT PAGE — Bio statement ──────────────────────────────────── */}
      <section className="bg-cream py-32 md:py-52 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12">Her story</p>
          <h2 className="text-brand-black" style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", maxWidth: "20ch", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* ─── ABOUT PAGE — Credentials bar ────────────────────────────────── */}
      <section className="bg-parchment py-16">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { stat: "8+", label: "Years of experience" },
            { stat: "MBChB", label: "Medical degree" },
            { stat: "MSc", label: "Dermatology" },
            { stat: "FACCSM", label: "Cosmetic physician" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <p className="text-brand-black leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>{stat}</p>
              <p className="text-neutral-500 text-[10px] font-light tracking-[0.35em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT PAGE — ParallaxHero ───────────────────────────────────── */}
      <ParallaxHero />

      {/* ─── ABOUT PAGE — 50/50 bottom hero ─────────────────────────────── */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
        <div className="bg-parchment relative flex flex-col justify-between px-12 md:px-16 pt-36 pb-0 overflow-hidden">
          <div className="flex justify-end">
            <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-[180px] text-right">Sydney-based cosmetic doctor specialising in facial aesthetics.</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-neutral-300 text-[10px] font-light tracking-[0.4em] uppercase">MBChB · MSc Dermatology · FACCSM</p>
            <img src="/assets/dr-yalda-logo-long.svg" alt="Dr. Yalda Jamali" className="w-full h-auto" style={{ filter: "invert(1) brightness(0)" }} />
          </div>
          <div className="relative overflow-hidden mt-6 mb-0">
            <div className="flex animate-marquee whitespace-nowrap py-6">
              {[...Array(6)].map((_, i) => (<img key={`a-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />))}
              {[...Array(6)].map((_, i) => (<img key={`b-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[60vw] md:min-h-0">
          <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
      </section>

      {/* ─── EDITORIAL INTRO ─────────────────────────────────────────────── */}
      <section className="bg-cream pt-24 pb-24 md:pt-36 md:pb-44">
        <div className="pg-container flex flex-col gap-10 md:gap-14">

          {/* Three-image composition */}
          <div className="flex items-end justify-center gap-4 md:gap-6 mb-4">
            <div className="overflow-hidden flex-shrink-0" style={{ width: "clamp(100px, 18vw, 240px)", aspectRatio: "3/4" }}>
              <img src="/assets/IMG_0028.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
            </div>
            <div className="overflow-hidden flex-shrink-0" style={{ width: "clamp(140px, 24vw, 320px)", aspectRatio: "2/3" }}>
              <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
            </div>
            <div className="overflow-hidden flex-shrink-0" style={{ width: "clamp(100px, 18vw, 240px)", aspectRatio: "3/4" }}>
              <img src="/assets/IMG_0012.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
            </div>
          </div>

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

      {/* What to expect */}
      <section className="bg-parchment py-24 md:py-40">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            <div className="col-span-12 md:col-span-4">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-6">
                What to expect
              </p>
              <h2
                className="text-brand-black font-normal leading-tight"
                style={{ fontSize: "clamp(2.25rem, 3vw, 2.5rem)" }}
              >
                YOUR FIRST<br /><em>visit.</em>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col divide-y divide-neutral-300">
              {[
                { num: "01", title: "Choose your clinic", body: "Select the location most convenient for you. Dr. Yalda consults across three Sydney clinics." },
                { num: "02", title: "Book your consultation", body: "All new patients begin with a thorough consultation. This is your time to ask questions and explore your options without pressure." },
                { num: "03", title: "Your treatment plan", body: "Dr. Yalda will develop a personalised plan tailored to your goals, anatomy, and what naturally suits you." },
              ].map(({ num, title, body }) => (
                <div key={num} className="py-8 flex gap-8 items-start">
                  <span
                    className="text-neutral-300 leading-none flex-shrink-0"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-brand-black font-normal"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", letterSpacing: "0.03em" }}
                    >
                      {title.toUpperCase()}
                    </h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Quote variant 1 — honesty */}
      <section className="bg-cream py-24 md:py-40">
        <div className="pg-container">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
              A note from Dr. Yalda
            </p>
            <blockquote
              className="text-brand-black font-normal leading-relaxed"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.3rem, 2vw, 1.5rem)" }}
            >
              &ldquo;I believe every patient deserves honesty above all else. My consultations are a space for you to ask anything — I&rsquo;ll always tell you what I genuinely think, even if that means doing nothing at all.&rdquo;
            </blockquote>
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.35em] uppercase">
              Dr. Yalda Jamali — MBChB · MSc Dermatology · FACCSM
            </p>
          </div>
        </div>
      </section>

      {/* Quote variant 2 — natural results */}
      <section className="bg-parchment py-24 md:py-40">
        <div className="pg-container">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
              A note from Dr. Yalda
            </p>
            <blockquote
              className="text-brand-black font-normal leading-relaxed"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.3rem, 2vw, 1.5rem)" }}
            >
              &ldquo;I believe the most beautiful results are the ones no one can quite put their finger on. My approach is always to enhance what&rsquo;s already there — to help you look like yourself, only more rested, more confident, more you.&rdquo;
            </blockquote>
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.35em] uppercase">
              Dr. Yalda Jamali
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
