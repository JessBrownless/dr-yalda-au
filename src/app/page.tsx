import TestimonialSection from "@/components/TestimonialSection";
import LogoStripDark from "@/components/LogoStripDark";
import HeroHome from "@/components/HeroHome";
import ParallaxQuote from "@/components/ParallaxQuote";
import StickyScrollSection from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <main>
      <HeroHome />

      {/* Her Story — statement block */}
      <section className="bg-parchment py-32 md:py-52 flex flex-col items-center justify-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-brand-line h-20 md:h-28 opacity-40" />
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p
            data-aos="fade"
            className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12"
          >
            DR. YALDA JAMALI
          </p>
          <h2
            data-aos="fade"
            data-aos-delay="120"
            className="text-brand-black"
            style={{ fontSize: "clamp(1.75rem, 3vw, 3.75rem)", maxWidth: "22ch", lineHeight: "0.95", letterSpacing: "0" }}
          >
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-parchment overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0" style={{ width: "36%", background: "#E0DDD6" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image over parchment */}
            <div className="col-span-12 md:col-span-5" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4]">
                <img src="/assets/IMG_004.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8 pt-4 md:pt-0" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <p
                className="text-brand-muted font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                The doctor
              </p>

              <div className="flex flex-col gap-2">
                <p
                  className="text-brand-black font-normal"
                  style={{
                    fontFamily: "'Heading', serif",
                    fontSize: "clamp(1.75rem, 2.4vw, 3rem)",
                    lineHeight: "1.2",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Dr Yalda Jamali
                </p>
                <p
                  className="text-brand-muted font-light"
                  style={{ fontSize: "11px", letterSpacing: "0.2em", fontFamily: "var(--font-lato)" }}
                >
                  MBChB · MSc Dermatology · FACCSM
                </p>
              </div>

              <p
                className="text-brand-muted font-light leading-relaxed"
                style={{ fontSize: "14px", fontFamily: "var(--font-lato)", letterSpacing: "0.01em" }}
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your well-being. I focus on delivering safe, effective results tailored to your needs, guided by the latest medical research. With honesty and transparency, I aim to enhance your natural beauty and boost your confidence. Let's work together to bring out the best version of you.
              </p>

              <svg
                viewBox="0 0 220 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "150px", height: "auto", opacity: 0.6 }}
                aria-hidden="true"
              >
                {/* Y — left arm and tail */}
                <path d="M 14,8 C 17,18 21,30 22,42 C 22,50 20,58 17,64" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* Y — right arm */}
                <path d="M 38,6 C 32,16 27,28 22,42" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* alda */}
                <path d="M 22,42 C 30,34 40,32 46,37 C 52,42 50,54 44,56 C 38,58 34,50 38,44 C 42,38 52,36 60,38 C 66,28 68,16 72,6" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* J */}
                <path d="M 94,6 C 96,20 96,38 92,52 C 88,62 82,66 76,66" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* amali */}
                <path d="M 94,40 C 102,32 114,30 120,35 C 126,40 124,52 118,54 C 112,58 106,50 110,44 C 114,38 124,36 132,38 L 134,54 C 144,42 156,38 164,42 C 170,46 168,56 162,58" stroke="#2D2C2A" strokeWidth="1.3" strokeLinecap="round"/>
                {/* underline flourish */}
                <path d="M 76,66 C 104,70 172,64 210,60" stroke="#2D2C2A" strokeWidth="0.9" strokeLinecap="round"/>
              </svg>

              <a
                href="/about"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                About Dr Yalda
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

          </div>
        </div>
      </section>

      <LogoStripDark />

      {/* Reversed section — parchment-backed image right, text left */}
      <section className="bg-parchment overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0" style={{ width: "36%", background: "#E0DDD6" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8 order-2 md:order-1 pt-4 md:pt-0" data-aos="fade" data-aos-duration="1000">

              <p
                className="text-brand-muted font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                Services
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.75rem, 2.4vw, 3rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Consultation-led care across Sydney
              </p>

              <p
                className="text-brand-muted font-light leading-relaxed"
                style={{ fontSize: "14px", fontFamily: "var(--font-lato)", letterSpacing: "0.01em" }}
              >
                Dr. Yalda Jamali combines rigorous medical training with a bespoke approach to aesthetics. Each treatment is a collaboration, designed to enhance your natural architecture.
              </p>

              <a
                href="/services"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                Services
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4] md:[transform:scale(1.05)] md:[transform-origin:center_center]">
                <img src="/assets/IMG_0037_color.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 40%" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <StickyScrollSection />

      <TestimonialSection />

      <ParallaxQuote />

      {/* CTA */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="pg-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

            {/* Image */}
            <div className="md:col-span-5 relative">
              <img
                src="/assets/logo-stacked-white.svg"
                alt=""
                aria-hidden="true"
                className="absolute hidden md:block"
                style={{ top: "1.25rem", left: "1.25rem", width: "64px", height: "auto", filter: "brightness(0)", opacity: 0.4, zIndex: 10 }}
              />
              <div className="aspect-square md:aspect-[4/5] overflow-hidden">
                <img src="/assets/IMG_0012.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 30%", transform: "scale(1.15)", transformOrigin: "center bottom" }} />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-8">
              <h2 className="text-brand-black font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.4vw, 3rem)", lineHeight: 1.05, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Let's begin with a conversation
              </h2>
              <p className="text-brand-muted font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
                Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
              </p>
              <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
                Book a consultation
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
