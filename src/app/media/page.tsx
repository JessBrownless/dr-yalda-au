import { FaInstagram, FaTiktok, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TwoPanelHero from "@/components/TwoPanelHero";
import FeaturesList from "@/components/FeaturesList";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

export default function MediaPage() {
  return (
    <main>
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
      <section className="bg-parchment overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Coloured strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0" style={{ width: "36%", background: "#E0DDD6" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4]">
                <img src="/assets/dr-yalda-Caudalie-speaking-caudalie.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Right — numbered list */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col pt-4 md:pt-0" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-10">
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
                  title: "Podcast",
                  description: "Guest appearances on podcasts, TV segments, and digital media platforms.",
                },
                {
                  num: "03",
                  title: "Brand Partnerships",
                  description: "Collaborative campaigns with skincare brands backed by science and ethical practice.",
                },
              ].map(({ num, title, description }) => (
                <div key={num} className="flex items-baseline gap-5 py-8 border-b border-neutral-200 first:border-t first:border-neutral-200">
                  <span className="text-neutral-400 font-light flex-shrink-0" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", letterSpacing: "0.05em", minWidth: "2.5em" }}>
                    {num} /
                  </span>
                  <div className="flex flex-col gap-3">
                    <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", letterSpacing: "0" }}>
                      {title}
                    </p>
                    <p className="text-neutral-600 font-light leading-relaxed text-base md:text-sm" style={{ fontFamily: "'Heading', serif" }}>
                      {description}
                    </p>
                  </div>
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

          <FeaturesList />

        </div>
      </section>



      {/* TestimonialCarousel removed */}

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

    </main>
  );
}
