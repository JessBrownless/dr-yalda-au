import DrQuote from "@/components/DrQuote";
import { FaInstagram, FaTiktok, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TwoPanelHero from "@/components/TwoPanelHero";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

const features = [
  {
    outlet: "Vogue Australia",
    type: "Feature",
    title: "The doctor redefining natural beauty in Sydney",
    year: "2024",
    href: "#",
  },
  {
    outlet: "Body + Soul",
    type: "Interview",
    title: "Why less is always more in cosmetic medicine",
    year: "2024",
    href: "#",
  },
  {
    outlet: "The Sydney Morning Herald",
    type: "Expert Opinion",
    title: "What to know before your first cosmetic appointment",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Gritty Pretty",
    type: "Feature",
    title: "Honest answers to your biggest filler questions",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Marie Claire",
    type: "Roundtable",
    title: "The future of ethical aesthetics",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Clinique",
    type: "Brand Partnership",
    title: "Science-backed skincare with Dr. Yalda Jamali",
    year: "2024",
    href: "#",
  },
];

export default function MediaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#EEEDE7" }}>

{/* ── Desktop ── */}
        <div className="hidden md:block absolute inset-0">

          {/* Texture — behind portrait, peeks out top-left */}
          <div className="absolute" style={{ left: 0, top: 0, bottom: 0, width: "calc(4 * (100% - 11 * 16px) / 12 + 3 * 16px)", zIndex: 0, backgroundColor: "#E0DED8" }} />

          {/* Left — portrait */}
          <div className="absolute overflow-hidden opacity-0 animate-fade-in" style={{ left: "48px", top: "48px", width: "calc(4 * (100% - 11 * 16px) / 12 + 3 * 16px)", bottom: "8%", zIndex: 1, animationDelay: "0.1s" }}>
            <img src="/assets/IMG_0038.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
          </div>

          {/* Right — portrait */}
          <div className="absolute overflow-hidden opacity-0 animate-fade-in" style={{ right: "32px", top: "32%", width: "calc((100% - 11 * 16px) / 6 + 16px)", height: "calc(((100vw - 11 * 16px) / 6 + 16px) * 4 / 3)", animationDelay: "0.4s" }}>
            <img src="/assets/dr-yalda-Caudalie-speaking-caudalie.avif" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ objectPosition: "40% center" }} />
          </div>

          {/* Centre — text */}
          <div className="absolute flex flex-col justify-center gap-4 opacity-0 animate-fade-in-up" style={{ left: "calc(5 * (100% - 11 * 16px) / 12 + 5 * 16px)", right: "calc(3 * (100% - 11 * 16px) / 12 + 3 * 16px)", top: 0, bottom: 0, padding: "24px", animationDelay: "0.7s" }}>

            {/* Eyebrow */}
            <p className="text-neutral-400 font-light tracking-[0.5em] uppercase" style={{ fontSize: "10px" }}>
              In the
            </p>

            {/* Heading */}
            <h1
              className="text-brand-black font-normal leading-[1.0]"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 6vw, 8rem)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: "0.85" }}
            >
              MEDIA<br />&amp; PRESS
            </h1>

            {/* Body + CTA */}
            <div className="flex flex-col gap-6">
              <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "20px", fontFamily: "'Heading', serif" }}>
                Features, interviews, expert commentary and brand collaborations for global publications and leading cosmetic brands.
              </p>
              <a
                href="mailto:hello@dryalda.com.au?subject=Work%20Together%20Enquiry"
                className="self-start px-8 py-4 border border-brand-black text-brand-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-brand-black hover:text-white transition-colors duration-300"
                style={{ fontFamily: "sans-serif" }}
              >
                Work Together
              </a>
            </div>

          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden relative" style={{ backgroundColor: "#121110" }}>

          {/* Image — 90% wide, pinned to right edge */}
          <div
            className="overflow-hidden opacity-0 animate-fade-in ml-auto"
            style={{ width: "90%", aspectRatio: "3/4", animationDelay: "0.1s" }}
          >
            <img src="/assets/IMG_0038.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
          </div>

          {/* Text block — overlaps image by exactly 48px */}
          <div
            className="relative px-8 pb-12 flex flex-col opacity-0 animate-fade-in-up"
            style={{ marginTop: "-48px", zIndex: 10, animationDelay: "0.4s" }}
          >
            <span
              className="font-light uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.2em", marginBottom: "16px", color: "#F4F1EE", fontFamily: "sans-serif", opacity: 0.6 }}
            >
              In the
            </span>
            <h1
              className="font-normal"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(40px, 10vw, 56px)", lineHeight: "0.95", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#F4F1EE" }}
            >
              MEDIA<br />&amp; PRESS
            </h1>
            <p className="font-light leading-relaxed mt-6" style={{ fontSize: "16px", fontFamily: "'Heading', serif", color: "#F4F1EE", opacity: 0.6 }}>
              Features, interviews, expert commentary and brand collaborations for global publications and leading cosmetic brands.
            </p>
            <a
              href="mailto:hello@dryalda.com.au?subject=Work%20Together%20Enquiry"
              className="self-start mt-8 px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300"
              style={{ fontFamily: "sans-serif", border: "1px solid #F4F1EE", color: "#F4F1EE" }}
            >
              Work Together
            </a>
          </div>

        </div>

      </section>

      {/* Intro section */}
      <section className="bg-cream py-24 md:py-36 relative">

        {/* Bridging image — desktop only, bleeds up into hero */}
        <div
          className="absolute hidden md:block overflow-hidden"
          style={{ left: "62%", top: "-90px", width: "clamp(160px, 16vw, 240px)", aspectRatio: "4/3", zIndex: 10 }}
        >
          <img src="/assets/IMG_0041.avif" alt="" aria-hidden="true" className="w-full h-full object-cover object-top" />
        </div>

        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            {/* Left — heading + body */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-12">

              {/* Heading block */}
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

              {/* Body text with left rule */}
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

            {/* Right — As featured in */}
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

      {/* How we can work together */}
      <section className="bg-parchment pt-0 pb-16 md:pb-28">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-2 md:gap-16 items-center">

            {/* Left — layered image composition (desktop) / single image (mobile) */}
            <div className="col-span-12 md:col-span-5 md:relative md:[aspect-ratio:3/4] relative z-10 md:-mt-40">
              {/* Mobile: square crop via reusable class */}
              <div className="site-portrait md:hidden">
                <img
                  src="/assets/dr-yalda-Caudalie-speaking-caudalie.avif"
                  alt="Dr. Yalda Jamali"
                />
              </div>
              {/* Desktop: layered composition */}
              <div className="hidden md:block absolute inset-0">
                <img
                  src="/assets/IMG_0031.avif"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "65% top" }}
                />
                <div
                  className="absolute"
                  style={{ width: "72%", top: "8%", left: "14%", bottom: "6%" }}
                >
                  <img
                    src="/assets/dr-yalda-Caudalie-speaking-caudalie.avif"
                    alt="Dr. Yalda Jamali"
                    className="w-full h-full object-cover object-top"
                    style={{
                      boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right — numbered list */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col pt-6 md:pt-0">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-0 md:mb-12">
                How we can work together
              </p>

              {[
                {
                  num: "01",
                  title: "Press & Editorial",
                  description: "Expert commentary, interviews, and features for print and digital publications.",
                },
                {
                  num: "02",
                  title: "Podcast & Broadcast",
                  description: "Guest appearances on podcasts, TV segments, and digital media platforms.",
                },
                {
                  num: "03",
                  title: "Brand Partnerships",
                  description: "Collaborative campaigns with brands aligned with evidence-based, ethical aesthetics.",
                },
              ].map(({ num, title, description }) => (
                <div key={num} className="flex flex-col gap-4 py-8 border-b border-neutral-200 first:border-t first:border-neutral-200">
                  <p
                    className="text-brand-black font-normal leading-none"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
                  >
                    <span className="text-neutral-400 font-light" style={{ fontSize: "0.55em", letterSpacing: "0.05em", marginRight: "0.4em" }}>
                      {num} /
                    </span>
                    {title.toUpperCase()}
                  </p>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed max-w-[38ch]" style={{ fontFamily: "'Heading', serif" }}>
                    {description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Press features list */}
      <section className="bg-[#232121] py-24 md:py-32" id="features">
        <div className="pg-container">

          <p className="text-neutral-600 text-[9px] font-light tracking-[0.5em] uppercase mb-16">
            Features &amp; Appearances
          </p>

          <div className="flex flex-col divide-y divide-neutral-800">
            {features.map(({ outlet, type, title, year, href }) => (
              <a
                key={title}
                href={href}
                className="group py-8 grid grid-cols-12 gap-4 md:gap-8 items-center hover:bg-white/5 transition-colors duration-300 -mx-4 px-4"
              >
                <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
                  <p className="text-white text-sm font-normal" style={{ fontFamily: "'Heading', serif" }}>
                    {outlet}
                  </p>
                  <p className="text-neutral-600 text-[9px] font-light tracking-[0.3em] uppercase">
                    {type}
                  </p>
                </div>
                <div className="col-span-10 md:col-span-7">
                  <p className="text-neutral-400 text-base font-light leading-snug group-hover:text-white transition-colors duration-300">
                    {title}
                  </p>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-4">
                  <span className="text-neutral-600 text-[10px] font-light tracking-[0.2em]">
                    {year}
                  </span>
                  <span className="text-neutral-700 text-sm group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>



      <TestimonialCarousel />

      {/* Podcast section */}
      <section className="bg-[#232121] overflow-hidden" style={{ paddingTop: "120px" }}>
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-8 pt-4">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                Podcast appearances
              </p>
              <h2
                className="text-white font-normal leading-tight"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", textTransform: "uppercase" }}
              >
                Listen To<br /><em>dr. yalda.</em>
              </h2>
              <div className="flex flex-col divide-y divide-neutral-800">
                {[
                  { show: "The Glow Up Podcast", episode: "The truth about filler — what no one tells you", duration: "42 min" },
                  { show: "Skin Deep with Sarah", episode: "Evidence-based aesthetics and why it matters", duration: "35 min" },
                  { show: "The Beauty Edit", episode: "Natural results: redefining cosmetic medicine", duration: "28 min" },
                ].map(({ show, episode, duration }, i) => (
                  <div key={i} className="group flex items-start justify-between gap-6 py-5 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <button className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                        <span className="text-neutral-500 group-hover:text-white transition-colors duration-300" style={{ fontSize: "8px", paddingLeft: "2px" }}>▶</span>
                      </button>
                      <div className="flex flex-col gap-1">
                        <p className="text-neutral-500 text-[9px] font-light tracking-[0.3em] uppercase">{show}</p>
                        <p className="text-neutral-300 text-sm font-light leading-snug group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Heading', serif" }}>{episode}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0 text-neutral-600 text-[10px] font-light tracking-[0.2em] mt-1">{duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone mockup, crops at bottom */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex justify-center">
              <div
                className="phone-mockup-height"
                style={{
                  width: 300,
                  background: "#111",
                  borderRadius: 48,
                  padding: 12,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  position: "relative",
                  marginBottom: "-120px",
                }}
              >
                {/* Notch */}
                <div style={{ width: 110, height: 28, background: "#111", borderRadius: "0 0 18px 18px", position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 2 }} />

                {/* Screen */}
                <div style={{ background: "#1C1B1A", borderRadius: 32, overflow: "hidden", paddingBottom: 24 }}>

                  {/* Artwork */}
                  <div className="phone-artwork-ratio" style={{ position: "relative", width: "100%" }}>
                    <img
                      src="/assets/IMG_0028.avif"
                      alt="Podcast episode"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                    {/* Gradient over artwork */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #1C1B1A 100%)" }} />
                  </div>

                  {/* Player UI */}
                  <div style={{ padding: "0 20px" }}>
                    {/* Show + episode */}
                    <p style={{ color: "#525252", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>The Glow Up Podcast</p>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 300, lineHeight: 1.4, marginBottom: 16 }}>The truth about filler — what no one tells you</p>

                    {/* Progress bar */}
                    <div style={{ height: 2, background: "#333", borderRadius: 2, marginBottom: 6, position: "relative" }}>
                      <div style={{ height: "100%", width: "38%", background: "#fff", borderRadius: 2 }} />
                      <div style={{ width: 8, height: 8, background: "#fff", borderRadius: "50%", position: "absolute", top: -3, left: "38%", transform: "translateX(-50%)" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                      <span style={{ color: "#525252", fontSize: 9 }}>16:04</span>
                      <span style={{ color: "#525252", fontSize: 9 }}>42:18</span>
                    </div>

                    {/* Controls */}
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

      {/* Instagram feed */}
      <section className="bg-parchment py-16 md:py-20">
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
              className="text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase border-b border-neutral-200 pb-1 hover:border-neutral-400 hover:text-neutral-500 transition-colors duration-300"
            >
              Follow
            </a>
          </div>

          {/* 6-col grid of square images */}
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

      {/* Brand logo quilt */}
      <section className="border-t border-neutral-800 py-10 md:py-12" style={{ backgroundColor: "#1C1B1A" }}>
        <div className="pg-container">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">

            <span className="text-neutral-400 font-light" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)", letterSpacing: "0.25em" }}>
              CAUDALIE
            </span>

            <span className="text-neutral-300 hidden md:block select-none">·</span>

            <span className="text-neutral-400 font-light" style={{ fontFamily: "sans-serif", fontSize: "clamp(0.8rem, 1.2vw, 1rem)", letterSpacing: "0.2em" }}>
              N<sup style={{ fontSize: "0.6em", verticalAlign: "super" }}>o</sup>7
            </span>

            <span className="text-neutral-300 hidden md:block select-none">·</span>

            <span className="text-neutral-400 font-light" style={{ fontFamily: "sans-serif", fontSize: "clamp(0.8rem, 1.2vw, 1rem)", letterSpacing: "0.2em" }}>
              MEDIK8
            </span>

            <span className="text-neutral-300 hidden md:block select-none">·</span>

            <img
              src="/assets/logo-clinique.svg"
              alt="Clinique"
              className="h-4 opacity-35"
            />

            <span className="text-neutral-300 hidden md:block select-none">·</span>

            <span className="text-neutral-400 font-light" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)", letterSpacing: "0.15em" }}>
              MAMMA MIA
            </span>

          </div>
        </div>
      </section>

      <DrQuote />
    </main>
  );
}
