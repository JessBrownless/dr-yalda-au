import TwoPanelHero from "@/components/TwoPanelHero";
import { FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main>
      {/* Hero — mobile */}
      <section className="md:hidden bg-parchment flex flex-col pt-32 pb-8">

        {/* Text — right-aligned, parchment bg */}
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

        {/* Images — two portraits side by side */}
        <div className="flex gap-8 px-8 pb-6">
          <div className="relative flex-1 overflow-hidden opacity-0 animate-fade-in" style={{ aspectRatio: "1/2", animationDelay: "0.25s" }}>
            <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
            <div className="hero-noise" />
          </div>
          <div className="relative flex-1 overflow-hidden opacity-0 animate-fade-in" style={{ aspectRatio: "1/2", animationDelay: "0.4s" }}>
            <img src="/assets/IMG_0012.avif" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ objectPosition: "50% 20%" }} />
            <div className="hero-noise" />
          </div>
        </div>

      </section>

      {/* Hero — desktop */}
      <section
        className="hidden md:block relative overflow-hidden opacity-0 animate-fade-in"
        style={{ height: "100vh", marginTop: "-48px", animationDelay: "0.1s" }}
      >

        {/* Layer 0: Full-bleed photo */}
        <img
          src="/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif"
          alt="Dr. Yalda Jamali"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "65% 10%", zIndex: 0 }}
        />

        {/* Layer 1: Rich bottom vignette — anchors the text */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(8,6,4,0.85) 0%, rgba(8,6,4,0.4) 35%, rgba(8,6,4,0.05) 65%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* Layer 2: Left edge darkening — carves out text space */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(8,6,4,0.55) 0%, rgba(8,6,4,0.15) 45%, transparent 70%)",
            zIndex: 2,
          }}
        />

        {/* Layer 3: Logo emblem — colossal, bottom-left, bleeds off screen as brand texture */}
        <img
          src="/assets/dr-yalda-logo-icon.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-18vw",
            bottom: "-20vh",
            width: "clamp(600px, 85vw, 1200px)",
            opacity: 0.06,
            zIndex: 3,
            filter: "brightness(0) invert(1)",
            pointerEvents: "none",
          }}
        />

        {/* Layer 4: Wordmark — top-center, delicate brand identifier */}
        <div
          className="absolute"
          style={{ top: "80px", left: "50%", transform: "translateX(-50%)", zIndex: 4 }}
        >
          <img
            src="/assets/dr-yalda-logo-long.svg"
            alt="Dr. Yalda Jamali"
            style={{ height: "18px", width: "auto", opacity: 0.35, filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Layer 5: Text cluster — bottom-left editorial stamp */}
        <div
          className="absolute flex flex-col"
          style={{ left: "8vw", bottom: "9vh", zIndex: 5 }}
        >
          <p
            className="font-light tracking-[0.4em] uppercase"
            style={{ fontSize: "10px", fontFamily: "sans-serif", color: "#F4F1EE", opacity: 0.5, marginBottom: "14px" }}
          >
            Dr. Yalda Jamali
          </p>
          <h1
            className="font-normal"
            style={{
              fontFamily: "'Heading', serif",
              fontSize: "clamp(8rem, 13vw, 16rem)",
              lineHeight: "0.82",
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: "#F4F1EE",
            }}
          >
            ABOUT
          </h1>
          <div style={{ width: "64px", height: "1px", background: "rgba(244,241,238,0.3)", margin: "28px 0" }} />
          <p
            className="font-light"
            style={{ fontSize: "13px", fontFamily: "'Heading', serif", color: "#F4F1EE", opacity: 0.45, maxWidth: "26ch", lineHeight: "1.8", letterSpacing: "0.02em" }}
          >
            Cosmetic doctor, educator, and brand collaborator — consulting across Sydney.
          </p>
        </div>

        {/* Layer 6: Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6 }} />

      </section>

      <div className="bg-parchment pt-24 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-brand-black font-normal leading-[1.1] flex-shrink-0"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Cosmetic Doctor&nbsp;&nbsp;/&nbsp;&nbsp;Brand Collaborator&nbsp;&nbsp;/&nbsp;&nbsp;Educator&nbsp;&nbsp;/&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Editorial intro */}
      <section className="bg-parchment pt-20 pb-20 md:pt-36 md:pb-44">
        <div className="pg-container flex flex-col gap-10 md:gap-14 items-start text-left md:items-center md:text-center">

          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
            The story so far
          </p>

          <h2
            className="text-brand-black font-normal leading-[1.1]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0", maxWidth: "28ch" }}
          >
            Over a decade of experience<br />in aesthetic medicine.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <p className="text-neutral-700 font-light leading-[1.9] text-base md:text-sm" style={{ fontFamily: "'Heading', serif" }}>
              With 8 years of experience as a cosmetic doctor, my journey began in London, where I spent the first four years working alongside world-renowned specialists. I hold a master's degree in dermatology, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term well-being of your skin.
            </p>
            <p className="text-neutral-700 font-light leading-[1.9] text-base md:text-sm" style={{ fontFamily: "'Heading', serif" }}>
              I'm recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to enhance and harmonise features with natural, refined results. My aim is always to boost your confidence and deliver outcomes that reflect your unique beauty.
            </p>
          </div>

        </div>
      </section>

      <TwoPanelHero />

      {/* Mobile-only square portrait */}
      <div className="md:hidden bg-parchment px-8">
        <div className="aspect-square overflow-hidden">
          <img src="/assets/Yalda-1.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 20%" }} />
        </div>
        <div className="flex items-baseline justify-between pt-3 pb-1">
          <p className="text-brand-black font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.05em" }}>
            Dr. Yalda Jamali
          </p>
          <p className="text-neutral-400 font-light" style={{ fontSize: "10px", letterSpacing: "0.2em", fontFamily: "'Heading', serif" }}>
            MBChB &middot; MSc Derm
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-parchment py-16 md:py-24">
        <div className="pg-container">
          {/* Mobile: full-width rows / Desktop: 4 columns */}
          <div className="hidden md:grid md:grid-cols-4 md:divide-x md:divide-neutral-200">
            {[
              { stat: "8+", label: "Years in aesthetic medicine" },
              { stat: "MSc", label: "Masters in Dermatology" },
              { stat: "2", label: "Cities — London & Sydney" },
              { stat: "5+", label: "Global brand collaborations" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-3 px-8 first:pl-0 last:pr-0">
                <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 3.5vw, 4rem)", letterSpacing: "0.02em" }}>
                  {stat}
                </p>
                <p className="text-neutral-500 font-light" style={{ fontSize: "12px", letterSpacing: "0.08em", fontFamily: "'Heading', serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {[
              { stat: "8+", label: "Years in aesthetic medicine" },
              { stat: "MSc", label: "Masters in Dermatology" },
              { stat: "2", label: "Cities — London & Sydney" },
              { stat: "5+", label: "Global brand collaborations" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex items-center justify-between gap-8 py-6 border-t border-neutral-200 last:border-b">
                <p className="text-brand-black font-normal leading-none flex-shrink-0" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.02em" }}>
                  {stat}
                </p>
                <p className="text-neutral-500 font-light text-right" style={{ fontSize: "13px", letterSpacing: "0.1em", fontFamily: "'Heading', serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width parallax quote */}
      <section
        className="relative flex items-center justify-center py-24 md:py-32 xl:py-52"
        style={{
          minHeight: "clamp(320px, 45vw, 620px)",
          backgroundImage: "url('/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/40" />
        <blockquote className="relative z-10 pg-container w-full flex flex-col items-start gap-6">
          <span
            className="text-white/50 font-normal leading-none select-none"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className="text-white font-normal leading-[1.3]"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.25rem, 4vw, 4.5rem)", fontStyle: "italic", letterSpacing: "0" }}
          >
            "Medicine is an art. Every face tells a story — my role is simply to help it shine."
          </p>
          <cite
            className="text-white/60 font-normal not-italic uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
          >
            Dr. Yalda Jamali
          </cite>
        </blockquote>
      </section>

      {/* Values — quote layout */}
      <section className="bg-parchment py-24 md:py-48">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="hidden md:block col-span-3 pt-9">
              <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase">Values</p>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col">
              <p className="md:hidden text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase mb-6">Values</p>
              {[
                { num: "01", title: "Honesty", body: "Every consultation is grounded in transparency. Dr. Yalda will always tell you what is and isn't right for you — even if that means recommending nothing at all." },
                { num: "02", title: "Precision", body: "A meticulous, considered approach to every treatment. Results are refined, never overdone — shaped by anatomy, not trend." },
                { num: "03", title: "Evidence", body: "Every recommendation is backed by clinical evidence and ongoing education. No hype, no shortcuts — just what the science supports." },
                { num: "04", title: "Trust", body: "Long-term relationships built on consistent, honest care. The goal is always to earn your confidence through results that feel like you." },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex items-start gap-5 py-8 border-b border-neutral-300 first:border-t first:border-neutral-300">
                  <span className="text-neutral-400 font-light flex-shrink-0 pt-1" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", letterSpacing: "0.05em", minWidth: "2.5em" }}>{num} /</span>
                  <div className="flex flex-col gap-3">
                    <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", letterSpacing: "0" }}>
                      {title}
                    </p>
                    <p className="text-neutral-600 font-light leading-relaxed text-base md:text-sm" style={{ fontFamily: "'Heading', serif" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#D5D2CB" }} className="overflow-hidden">
        <div className="flex items-stretch" style={{ minHeight: "clamp(380px, 52vh, 680px)" }}>

          {/* Left — narrow image, bleeds off edge */}
          <div className="hidden md:block relative overflow-hidden flex-shrink-0" style={{ width: "clamp(120px, 18vw, 240px)" }}>
            <img src="/assets/IMG_0031.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>

          {/* Centre — text, asymmetrically weighted left */}
          <div className="flex-1 flex flex-col justify-between py-14 md:py-16 px-8 md:pl-16 md:pr-12">
            <p className="text-[#2D2C2A]/40 text-[9px] font-light tracking-[0.5em] uppercase self-end">
              Book a consultation
            </p>
            <div className="flex flex-col gap-8">
              <h2
                className="text-[#2D2C2A] font-normal leading-[0.95]"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 5.5vw, 6rem)", letterSpacing: "0", maxWidth: "14ch" }}
              >
                Ready to start <em>your journey?</em>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-[#2D2C2A]/55 font-light leading-[1.8]" style={{ fontSize: "14px", fontFamily: "'Heading', serif", maxWidth: "32ch" }}>
                  Every great result begins with an honest conversation.
                </p>
                <div className="flex items-center gap-8">
                  <a
                    href="/appointments"
                    className="text-[#2D2C2A] text-[10px] font-normal tracking-[0.35em] uppercase border-b border-[#2D2C2A]/50 pb-px hover:border-[#2D2C2A] transition-colors duration-300"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Book Now
                  </a>
                  <span className="text-[#2D2C2A]/25 text-xs">—</span>
                  <a
                    href="/services"
                    className="text-[#2D2C2A]/50 text-[10px] font-normal tracking-[0.35em] uppercase border-b border-[#2D2C2A]/20 pb-px hover:text-[#2D2C2A] hover:border-[#2D2C2A]/50 transition-colors duration-300"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — wider image, bleeds off edge */}
          <div className="relative overflow-hidden flex-shrink-0" style={{ width: "clamp(120px, 28vw, 400px)" }}>
            <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

        </div>
      </section>

      {/* Instagram feed */}
      <section className="bg-white py-16 md:py-20">
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

    </main>
  );
}
