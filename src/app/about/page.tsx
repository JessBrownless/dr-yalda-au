import TwoPanelHero from "@/components/TwoPanelHero";
import HeroExperiment from "@/components/HeroExperiment";

export default function AboutPage() {
  return (
    <main>
      <HeroExperiment />

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

      {/* Editorial intro */}
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
              With 8 years of experience as a cosmetic doctor, my journey began in London, where I spent the first four years working alongside world-renowned specialists. I hold a master's degree in dermatology, with a focus on cosmetic dermatology and skin health, allowing me to combine effective treatments with a deep understanding of the long-term well-being of your skin.
            </p>
            <p className="text-neutral-700 font-light leading-[1.9] text-base md:text-lg" style={{ fontFamily: "'Heading', serif" }}>
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
        <div className="flex flex-col pt-3 pb-1 gap-1">
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
          <div className="grid grid-cols-4 divide-x divide-neutral-200">
            {[
              { stat: "8+", label: "Years in aesthetic medicine" },
              { stat: "MSc", label: "Masters in Dermatology" },
              { stat: "2", label: "Cities — London & Sydney" },
              { stat: "5+", label: "Global brand collaborations" },
            ].map(({ stat, label }, i) => (
              <div key={i} className="flex flex-col gap-2 md:gap-3 px-4 md:px-8 first:pl-0 last:pr-0">
                <p className="text-brand-black font-normal leading-none" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3.5vw, 4rem)", letterSpacing: "0.02em" }}>
                  {stat}
                </p>
                <p className="text-neutral-500 font-light leading-snug" style={{ fontSize: "clamp(9px, 1.2vw, 12px)", letterSpacing: "0.08em", fontFamily: "'Heading', serif" }}>
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

      {/* CTA — collage layout */}
      <div className="bg-parchment py-16 md:py-24">
      <section className="relative overflow-hidden bg-parchment" style={{ minHeight: "clamp(500px, 68vh, 820px)" }}>

        {/* Left image — square, anchored to top */}
        <div className="absolute left-0 top-0 hidden md:block overflow-hidden" style={{ width: "54%", height: "54vw" }}>
          <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>

        {/* Right image — rectangle, starts lower, bleeds past bottom */}
        <div className="absolute right-0 bottom-0 hidden md:block overflow-hidden" style={{ width: "34%", top: "18%" }}>
          <img src="/assets/dr-yalda-treatment.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>

        {/* Centre card — overlaps both images */}
        <div
          className="absolute z-10 hidden md:flex flex-col gap-7 justify-center"
          style={{
            left: "29%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "38%",
            background: "#F6F2EF",
            padding: "clamp(2rem, 3.5vw, 4rem)",
          }}
        >
          <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>
            Book a consultation
          </p>
          <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.8vw, 3.25rem)", letterSpacing: "0" }}>
            Let's begin with a conversation
          </h2>
          <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
            Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
          </p>
          <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
            Book a consultation
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Mobile fallback — stacked */}
        <div className="md:hidden flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6 p-8" style={{ background: "#F6F2EF", color: "#2D2C2A" }}>
            <p className="text-brand-muted font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>Book a consultation</p>
            <h2 className="text-brand-black font-normal leading-[1.05]" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 6vw, 2.5rem)", letterSpacing: "0" }}>
              Let's begin with a conversation
            </h2>
            <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
              Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
            </p>
            <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase px-7 py-3.5 transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
              Book a consultation
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

      </section>
      </div>

    </main>
  );
}
