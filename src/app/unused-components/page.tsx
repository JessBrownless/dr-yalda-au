import { FaInstagram } from "react-icons/fa";
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

      {/* ─── ABOUT HERO + OVERLAY (duplicate for layout experiments) ─────── */}
      <div className="relative overflow-hidden" style={{ height: "30vh", marginTop: "-72px" }}>
        <img src="/assets/chairs-hands.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)" }} />
      </div>

      <section className="relative bg-parchment">
        <div className="pg-container" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            <div className="col-span-12 md:col-span-6" style={{ marginTop: "-14vh" }}>
              <div className="overflow-hidden relative z-10" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/IMG_0008.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 10%", transform: "scale(1.3) translateY(-20%)" }}
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8 pt-8 md:pt-32 pb-20 md:pb-36">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                The story so far
              </p>

              <h2
                className="text-brand-black font-normal leading-[1.1]"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)", letterSpacing: "0", maxWidth: "22ch" }}
              >
                My journey began in London, working alongside world-renowned specialists.
              </h2>

              <p className="text-neutral-700 font-light leading-[1.9] text-sm md:text-base" style={{ fontFamily: "'Heading', serif" }}>
                With 10 years of experience as a cosmetic doctor, my journey began in London, where I spent the first five years working alongside world-renowned specialists. I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ─── EDITORIAL INTRO (moved from about page) ──────────────────────── */}
      <section className="bg-brand-white pt-20 pb-20 md:pt-36 md:pb-44">
        <div className="pg-container flex flex-col gap-10 md:gap-14 items-start text-left">
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
            The story so far
          </p>
          <h2
            className="text-brand-black font-normal leading-[1.1]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0", maxWidth: "22ch" }}
          >
            My journey began in London, working alongside world-renowned specialists.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-neutral-700 font-light leading-[1.9] text-base md:text-lg" style={{ fontFamily: "'Heading', serif" }}>
              With 10 years of experience as a cosmetic doctor, my journey began in London, where I spent the first five years working alongside world-renowned specialists. I hold a master&apos;s degree in dermatology, graduating with distinction, alongside a postgraduate qualification in facial injectables, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term wellbeing of your skin.
            </p>
            <p className="text-neutral-700 font-light leading-[1.9] text-base md:text-lg" style={{ fontFamily: "'Heading', serif" }}>
              I am also a Fellow of the Australasian College of Cosmetic Surgery and Medicine (ACCSM), have contributed to publications within the field, and continue to be involved in practitioner education as part of the Merz Aesthetics faculty. I&apos;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to achieve refined, natural-looking results.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE (moved from homepage) ─────────────────────────────────── */}
      <div className="bg-parchment pt-24 pb-12 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-brand-black font-normal leading-[1.1] flex-shrink-0 inline-flex items-center gap-6"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              Cosmetic Doctor
              <img src="/assets/key-visual-dark.svg" aria-hidden="true" style={{ height: "0.7em", width: "auto", opacity: 0.6, flexShrink: 0 }} />
              Brand Collaborator
              <img src="/assets/key-visual-dark.svg" aria-hidden="true" style={{ height: "0.7em", width: "auto", opacity: 0.6, flexShrink: 0 }} />
              Educator
              <img src="/assets/key-visual-dark.svg" aria-hidden="true" style={{ height: "0.7em", width: "auto", opacity: 0.6, flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT HERO (moved from about/page.tsx) ────────────────────────── */}
      <HeroExperiment />

      {/* ─── MEDIA HERO (moved from media/page.tsx) ────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#EEEDE7" }}>
        <div className="hidden md:block absolute inset-0">
          <div className="absolute" style={{ left: 0, top: 0, bottom: 0, width: "calc(4 * (100% - 11 * 16px) / 12 + 3 * 16px)", zIndex: 0, backgroundColor: "#E0DED8" }} />
          <div className="absolute overflow-hidden opacity-0 animate-fade-in" style={{ left: "48px", top: "48px", width: "calc(4 * (100% - 11 * 16px) / 12 + 3 * 16px)", bottom: "8%", zIndex: 1, animationDelay: "0.1s" }}>
            <img src="/assets/IMG_0038.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute overflow-hidden opacity-0 animate-fade-in" style={{ right: "32px", top: "32%", width: "calc((100% - 11 * 16px) / 6 + 16px)", height: "calc(((100vw - 11 * 16px) / 6 + 16px) * 4 / 3)", animationDelay: "0.4s" }}>
            <img src="/assets/dr-yalda-Caudalie-speaking-caudalie.avif" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ objectPosition: "40% center" }} />
          </div>
          <div className="absolute flex flex-col justify-center gap-4 opacity-0 animate-fade-in-up" style={{ left: "calc(5 * (100% - 11 * 16px) / 12 + 5 * 16px)", right: "calc(3 * (100% - 11 * 16px) / 12 + 3 * 16px)", top: 0, bottom: 0, padding: "24px", animationDelay: "0.7s" }}>
            <p className="text-neutral-400 font-light tracking-[0.5em] uppercase" style={{ fontSize: "10px" }}>In the</p>
            <h1 className="text-brand-black font-normal leading-[1.0]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 6vw, 8rem)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: "0.85" }}>
              MEDIA<br />&amp; PRESS
            </h1>
            <div className="flex flex-col gap-6">
              <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "20px", fontFamily: "'Heading', serif" }}>
                Features, interviews, expert commentary and brand collaborations for global publications and leading cosmetic brands.
              </p>
              <a href="mailto:hello@dryalda.com.au?subject=Work%20Together%20Enquiry" className="self-start px-8 py-4 border border-brand-black text-brand-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-brand-black hover:text-cream transition-colors duration-300" style={{ fontFamily: "sans-serif" }}>Work Together</a>
            </div>
          </div>
        </div>
        <div className="md:hidden relative" style={{ backgroundColor: "#121110" }}>
          <div className="overflow-hidden opacity-0 animate-fade-in ml-auto" style={{ width: "90%", aspectRatio: "3/4", animationDelay: "0.1s" }}>
            <img src="/assets/IMG_0038.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
          </div>
          <div className="relative px-8 pb-12 flex flex-col opacity-0 animate-fade-in-up" style={{ marginTop: "-48px", zIndex: 10, animationDelay: "0.4s" }}>
            <span className="font-light uppercase" style={{ fontSize: "12px", letterSpacing: "0.2em", marginBottom: "16px", color: "#F4F1EE", fontFamily: "sans-serif", opacity: 0.6 }}>In the</span>
            <h1 className="font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(40px, 10vw, 56px)", lineHeight: "0.95", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#F4F1EE" }}>MEDIA<br />&amp; PRESS</h1>
            <p className="font-light leading-relaxed mt-6" style={{ fontSize: "16px", fontFamily: "'Heading', serif", color: "#F4F1EE", opacity: 0.6 }}>Features, interviews, expert commentary and brand collaborations for global publications and leading cosmetic brands.</p>
            <a href="mailto:hello@dryalda.com.au?subject=Work%20Together%20Enquiry" className="self-start mt-8 px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300" style={{ fontFamily: "sans-serif", border: "1px solid #F4F1EE", color: "#F4F1EE" }}>Work Together</a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES HERO (moved from services/page.tsx) ──────────────────── */}

      {/* Desktop — editorial stagger */}
      <section
        className="hidden md:block bg-cream overflow-hidden"
        style={{ height: "100svh" }}
      >
        <div style={{ height: "96px" }} />
        <div className="relative" style={{ height: "calc(100svh - 96px)" }}>
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
          <div
            className="absolute overflow-hidden opacity-0 animate-fade-in"
            style={{ right: 0, top: 0, width: "43%", height: "95%", zIndex: 10, animationDelay: "0ms" }}
          >
            <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
            <div className="hero-noise" />
          </div>
          <div
            className="absolute overflow-hidden opacity-0 animate-fade-in"
            style={{ left: "clamp(1.25rem, 4vw, 2.5rem)", bottom: "5%", width: "17%", aspectRatio: "1/1", zIndex: 5, animationDelay: "1100ms" }}
          >
            <img src="/assets/IMG_00372.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
            <div className="hero-noise" />
          </div>
          <div className="absolute flex gap-4 opacity-0 animate-fade-in" style={{ left: "calc(17% + clamp(2.5rem, 8vw, 5rem))", bottom: "8%", maxWidth: "300px", zIndex: 5, animationDelay: "900ms" }}>
            <div className="w-px bg-neutral-300 self-stretch flex-shrink-0" />
            <p className="text-neutral-600 font-light leading-relaxed" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
              Dr Yalda Jamali. A private, consultation-led clinical practice based in Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile — stacked */}
      <section className="md:hidden bg-cream pt-24 pb-0">
        <div className="px-8 mb-20">
          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-10">Services</p>
          <h1
            className="text-brand-black font-normal leading-[0.95]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 11vw, 5rem)", letterSpacing: "0.02em" }}
          >
            Evidence <em>led</em> practice
          </h1>
        </div>
        <div className="relative overflow-hidden aspect-square">
          <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-center md:object-top" />
          <div className="hero-noise" />
          <div className="absolute bottom-0 left-0 right-0 flex gap-4 px-6 py-5 backdrop-blur-md bg-cream/10">
            <div className="w-px bg-cream/50 flex-shrink-0" />
            <p className="text-cream text-[0.8rem] font-light leading-relaxed">
              Dr Yalda Jamali. A private, consultation-led clinical practice based in Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PODCAST SECTION (cropped phone variant) ─────────────────────── */}
      <section className="bg-[#232121] overflow-hidden" style={{ paddingTop: "clamp(4rem, 8vw, 9rem)" }}>
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">

            {/* Left — episode list */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-10 pb-16 md:pb-24">
              <div className="flex flex-col gap-4">
                <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                  Podcast appearances
                </p>
                <h2
                  className="text-cream font-normal leading-tight"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", textTransform: "uppercase" }}
                >
                  Listen To<br /><em>dr. yalda.</em>
                </h2>
              </div>

              <div className="flex flex-col divide-y divide-neutral-800">
                {[
                  { show: "The Glow Up Podcast", episode: "The truth about filler — what no one tells you", duration: "42 min" },
                  { show: "Skin Deep with Sarah",  episode: "Evidence-based aesthetics and why it matters", duration: "35 min" },
                  { show: "The Beauty Edit",       episode: "Natural results: redefining cosmetic medicine", duration: "28 min" },
                ].map(({ show, episode, duration }, i) => (
                  <div key={i} className="group flex items-start justify-between gap-6 py-6 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <button className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-cream transition-colors duration-300">
                        <span className="text-neutral-500 group-hover:text-cream transition-colors duration-300" style={{ fontSize: "8px", paddingLeft: "2px" }}>▶</span>
                      </button>
                      <div className="flex flex-col gap-1">
                        <p className="text-neutral-500 text-[9px] font-light tracking-[0.3em] uppercase">{show}</p>
                        <p className="text-neutral-300 text-sm font-light leading-snug group-hover:text-cream transition-colors duration-300" style={{ fontFamily: "'Heading', serif" }}>{episode}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0 text-neutral-600 text-[10px] font-light tracking-[0.2em] mt-1">{duration}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="self-start text-neutral-400 text-[9px] font-light tracking-[0.4em] uppercase border-b border-neutral-700 pb-1 hover:border-neutral-400 transition-colors duration-300"
              >
                All episodes
              </a>
            </div>

            {/* Right — phone mockup, crops at bottom */}
            <div className="hidden md:flex col-span-5 col-start-8 justify-center">
              <div
                style={{
                  width: 240,
                  background: "#111",
                  borderRadius: 40,
                  padding: 10,
                  boxShadow: "0 0 0 1px rgba(246,246,243,0.08), 0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(246,246,243,0.04)",
                  position: "relative",
                  marginBottom: "-160px",
                }}
              >
                <div style={{ width: 90, height: 24, background: "#111", borderRadius: "0 0 16px 16px", position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 2 }} />
                <div style={{ background: "#1C1B1A", borderRadius: 32, overflow: "hidden", paddingBottom: 24 }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                    <img src="/assets/IMG_0028.avif" alt="Podcast episode" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #1C1B1A 100%)" }} />
                  </div>
                  <div style={{ padding: "0 20px" }}>
                    <p style={{ color: "#525252", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>The Glow Up Podcast</p>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 300, lineHeight: 1.4, marginBottom: 16 }}>The truth about filler — what no one tells you</p>
                    <div style={{ height: 2, background: "#333", borderRadius: 2, marginBottom: 6, position: "relative" }}>
                      <div style={{ height: "100%", width: "38%", background: "#fff", borderRadius: 2 }} />
                      <div style={{ width: 8, height: 8, background: "#fff", borderRadius: "50%", position: "absolute", top: -3, left: "38%", transform: "translateX(-50%)" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                      <span style={{ color: "#525252", fontSize: 9 }}>16:04</span>
                      <span style={{ color: "#525252", fontSize: 9 }}>42:18</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
                      <span style={{ color: "#525252", fontSize: 16 }}>⏮</span>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#111", fontSize: 14, paddingLeft: 3 }}>▶</span>
                      </div>
                      <span style={{ color: "#525252", fontSize: 16 }}>⏭</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── THREE-COLUMN DARK EDITORIAL ─────────────────────────────────── */}
      <section className="bg-brand-black py-24 md:py-36">
        <div className="pg-container">
          <h2
            className="text-center font-normal mb-16 md:mb-20"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "0.05em", color: "#F4F1EE" }}
          >
            THE PRACTICE
          </h2>
          <div className="grid grid-cols-12 gap-px border-t border-cream/10">
            {[
              { num: "01", title: "Cosmetic Doctor",  body: "Over a decade of clinical experience in aesthetic medicine across London and Sydney. Specialising in facial balancing, contouring, and skin health." },
              { num: "02", title: "Educator",          body: "Committed to advancing the field through education — sharing evidence-based technique and clinical knowledge with fellow practitioners." },
              { num: "03", title: "Collaborator",      body: "Partnering with global brands whose values align with a science-led, integrity-first approach to beauty and skin care." },
            ].map(({ num, title, body }) => (
              <div key={num} className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-cream/10 last:border-r-0 flex flex-col gap-8 px-0 md:px-8 py-12 first:pl-0 last:pr-0">
                <span className="font-normal leading-none text-cream/20 select-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 5vw, 5rem)", letterSpacing: "-0.04em" }}>{num}</span>
                <div className="flex flex-col gap-4">
                  <p className="font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)", color: "#F4F1EE", lineHeight: "1.1" }}>{title}</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: "13px", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.5)" }}>{body}</p>
                </div>
                <a href="/about" className="flex items-center gap-2 uppercase transition-opacity duration-300 hover:opacity-60 mt-auto" style={{ fontSize: "10px", letterSpacing: "0.35em", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.4)" }}>
                  Learn more <span style={{ letterSpacing: 0 }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cream font-normal leading-none pointer-events-none"
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
          <a href="#features" className="mt-2 px-10 py-4 border border-brand-black/30 text-brand-black text-[9px] font-light tracking-[0.4em] uppercase hover:bg-brand-black hover:text-cream transition-all duration-300">View Features</a>
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
        {/* Mobile layout — images pinned to sides, text centred */}
        <div className="relative md:hidden flex items-center justify-center py-20" style={{ minHeight: "60vh" }}>
          <div className="absolute left-0 top-0 bottom-0 overflow-hidden" style={{ width: "28vw" }}>
            <img src="/assets/dr-yalda-treatment-03.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-4" style={{ width: "44vw" }}>
            <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">Book a consultation</p>
            <h2 className="text-brand-black font-normal leading-[0.95]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 10vw, 4rem)", letterSpacing: "0.02em" }}>
              Let's<br /><em>begin.</em>
            </h2>
            <a href="/appointments" className="mt-2 px-8 py-4 bg-brand-black text-cream text-[9px] font-normal tracking-[0.4em] uppercase">Book Now</a>
          </div>
          <div className="absolute right-0 top-0 bottom-0 overflow-hidden" style={{ width: "28vw" }}>
            <img src="/assets/Yalda-1.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </div>
        {/* Desktop layout — grid */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-stretch" style={{ minHeight: "60vh" }}>
          <div className="relative overflow-hidden">
            <img src="/assets/dr-yalda-treatment-03.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-8 px-12 md:px-20 py-20" style={{ minWidth: "clamp(280px, 36vw, 560px)" }}>
            <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">Book a consultation</p>
            <h2 className="text-brand-black font-normal leading-[0.95]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "0.02em" }}>
              Let's<br /><em>begin.</em>
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[26ch]">Your consultation is the first step. No pressure, no commitment — just an honest conversation.</p>
            <a href="/appointments" className="mt-2 px-10 py-4 bg-brand-black text-cream text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300">Book Now</a>
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
                className="self-start px-8 py-4 bg-brand-black text-cream text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
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
                className="self-start px-8 py-4 bg-brand-black text-cream text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
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
              className="text-cream font-normal leading-[1.1]"
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
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", color: "rgba(246,246,243,0.06)", letterSpacing: "0.02em" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <p className="text-cream font-normal leading-tight relative z-10" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.3vw, 1.2rem)", letterSpacing: "0.03em" }}>{label}</p>
                <p className="text-neutral-400 text-sm font-light leading-relaxed relative z-10">{body}</p>
              </div>
            ))}
          </div>

          <a
            href="/appointments"
            className="px-10 py-4 border border-neutral-700 text-cream text-[9px] font-normal tracking-[0.4em] uppercase hover:border-cream transition-colors duration-300"
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

      {/* Instagram feed */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="pg-container">

          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <FaInstagram size={16} className="text-neutral-400" />
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase">
                @dryaldajamali
              </p>
            </div>
            <a
              href="https://instagram.com/dryaldajamali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase border-b border-neutral-200 pb-1 hover:border-neutral-400 transition-colors duration-300"
            >
              Follow
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { src: "/assets/IMG_0028.avif", pos: "object-center" },
              { src: "/assets/IMG_0031.avif", pos: "object-top" },
              { src: "/assets/IMG_0012.avif", pos: "object-top" },
              { src: "/assets/IMG_0038.avif", pos: "object-center" },
              { src: "/assets/IMG_0041.avif", pos: "object-top" },
              { src: "/assets/IMG_0030.avif", pos: "object-top" },
            ].map(({ src, pos }, i) => (
              <a
                key={i}
                href="https://instagram.com/dryaldajamali"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-square overflow-hidden group"
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className={`w-full h-full object-cover ${pos} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Beyond the clinic — moved from media page */}
      <section className="bg-cream py-24 md:py-36 relative">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            {/* Left — heading + body */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-12">

              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-[10px] font-light tracking-[0.5em] uppercase">
                  Beyond the clinic
                </p>
                <h2
                  className="text-brand-black font-normal leading-[1.05]"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textTransform: "uppercase" }}
                >
                  A Trusted Voice<br />In Cosmetic<br /><em>medicine.</em>
                </h2>
              </div>

              <div className="flex gap-6 md:gap-10">
                <div className="hidden md:block w-px bg-neutral-300 flex-shrink-0 self-stretch" />
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <p className="text-neutral-600 text-base font-light leading-relaxed" style={{ fontFamily: "'Heading', serif" }}>
                      Beyond the clinic, Dr. Yalda contributes expert commentary to leading publications, appears across broadcast and digital media, and partners with brands aligned with honest, evidence-based care.
                    </p>
                    <p className="text-neutral-600 text-base font-light leading-relaxed" style={{ fontFamily: "'Heading', serif" }}>
                      Her approach is always the same — whether speaking to a journalist or a patient: honest, considered, and grounded in science. No hype. No hyperbole.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — Collaborations */}
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-8 md:pt-1">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                Collaborations
              </p>
              <div className="flex flex-col gap-5">
                {["Caudalie", "No7", "Medik8", "Clinique", "Mammamia"].map((name) => (
                  <p
                    key={name}
                    className="text-brand-black font-normal leading-none"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)", letterSpacing: "0.02em" }}
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MEDIA HERO — Healer-style (two offset images + centered card on cream) — saved from media page ─── */}
      <section className="relative overflow-hidden bg-cream" style={{ marginTop: "-72px" }}>

        {/* Desktop layout — full-bleed images flush to viewport edges */}
        <div className="hidden md:block relative" style={{ paddingBottom: "80px" }}>

          <div className="relative overflow-hidden" style={{ width: "48%", aspectRatio: "4/5" }}>
            <img
              src="/assets/IMG_0031.avif"
              alt="Dr. Yalda Jamali"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)" }} />
          </div>

          <div className="absolute right-0 overflow-hidden" style={{ width: "36%", aspectRatio: "3/4", top: "14%" }}>
            <img
              src="/assets/big-scroll-01.avif"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)" }} />
          </div>

          <div
            className="absolute z-20 flex"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "min(44%, 560px)" }}
          >
            <div className="bg-cream flex flex-col items-center text-center gap-7 px-10 py-14 lg:px-14 lg:py-16 w-full">
              <p className="eyebrow text-neutral-500">Media</p>
              <h1
                className="text-brand-black font-normal leading-[1.05] uppercase"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.75rem)", letterSpacing: "0.02em" }}
              >
                Press &amp; Features
              </h1>
              <p className="text-neutral-700 font-light leading-[1.9] text-base max-w-[40ch]" style={{ fontFamily: "'Heading', serif" }}>
                Expert commentary, brand collaborations, and broadcast features — grounded in honest, evidence-based care.
              </p>
              <a
                href="#features"
                className="border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                View features
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Mobile layout — stacked, full-bleed images */}
        <div className="md:hidden flex flex-col">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 25%, transparent 50%)" }} />
            </div>
            <div className="relative overflow-hidden aspect-[3/4] mt-8">
              <img src="/assets/big-scroll-01.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 25%, transparent 50%)" }} />
            </div>
          </div>

          <div className="bg-cream flex flex-col items-center text-center gap-6 px-7 py-10 -mt-12 mx-4 relative z-10 mb-16">
            <p className="eyebrow text-neutral-500">Media</p>
            <h1
              className="text-brand-black font-normal leading-[1.05] uppercase"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.875rem, 6vw, 2.5rem)", letterSpacing: "0.02em" }}
            >
              Press &amp; Features
            </h1>
            <p className="text-neutral-700 font-light leading-[1.85] text-base" style={{ fontFamily: "'Heading', serif" }}>
              Expert commentary, brand collaborations, and broadcast features — grounded in honest, evidence-based care.
            </p>
            <a
              href="#features"
              className="border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
              style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
            >
              View features
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

      </section>

    </main>
  );
}
