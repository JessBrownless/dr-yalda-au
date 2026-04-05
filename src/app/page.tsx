import TestimonialSection from "@/components/TestimonialSection";
import LogoQuilt from "@/components/LogoQuilt";
import LogoStripDark from "@/components/LogoStripDark";
import HeroHome from "@/components/HeroHome";
import ParallaxQuote from "@/components/ParallaxQuote";
import StickyScrollSection from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <main>
      <HeroHome />

      {/* Her Story — statement block */}
      <section className="bg-cream py-32 md:py-52 flex flex-col items-center justify-center text-center">
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
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 3.5rem)", maxWidth: "20ch", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-cream overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-y-12 md:gap-y-8 gap-x-8 items-center">

            {/* Left — image over parchment */}
            <div className="col-span-12 md:col-span-5" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4] md:[transform:scale(1.05)] md:[transform-origin:center_center]">
                <img src="/assets/IMG_0005.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" style={{ objectPosition: "50% -100px" }} />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                About the doctor
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.75rem, 3.2vw, 3.5rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0",
                }}
              >
                Sydney based cosmetic doctor – Dr Yalda Jamali
              </p>

              <p
                className="text-neutral-400 font-light leading-relaxed"
                style={{ fontSize: "15px", fontFamily: "var(--font-hanken)", letterSpacing: "0.01em" }}
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your well-being. I focus on delivering safe, effective results tailored to your needs, guided by the latest medical research. With honesty and transparency, I aim to enhance your natural beauty and boost your confidence. Let's work together to bring out the best version of you.
              </p>

              <a
                href="/about"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)" }}
              >
                Meet Dr. Yalda
              </a>

            </div>

          </div>
        </div>
      </section>

      <LogoStripDark />

      {/* Reversed section — parchment-backed image right, text left */}
      <section className="bg-cream overflow-hidden relative pb-20 md:py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8 order-2 md:order-1" data-aos="fade" data-aos-duration="1000">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                Our services
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.75rem, 3.2vw, 3.5rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0",
                }}
              >
                Clinical excellence meets an artist's eye.
              </p>

              <p
                className="text-neutral-400 font-light leading-relaxed"
                style={{ fontSize: "15px", fontFamily: "var(--font-hanken)", letterSpacing: "0.01em" }}
              >
                Dr. Yalda Jamali combines rigorous medical training with a bespoke approach to aesthetics. Each treatment is a collaboration, designed to enhance your natural architecture.
              </p>

              <a
                href="/services"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)" }}
              >
                Our Services
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4] md:[transform:scale(1.05)] md:[transform-origin:center_center]">
                <img src="/assets/dr-yalda-treatment.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 40%" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <StickyScrollSection />

      <TestimonialSection />

      <ParallaxQuote />

      {/* CTA */}
      <section className="bg-parchment overflow-hidden">
        {/* Mobile — images pinned to sides, asymmetric */}
        <div className="relative md:hidden flex items-center py-24" style={{ minHeight: "55vh" }}>
          <div className="absolute left-0 top-0 bottom-0 overflow-hidden" style={{ width: "22vw" }}>
            <img src="/assets/dr-yalda-treatment-03.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center gap-6" style={{ marginLeft: "26vw", width: "52vw" }}>
            <p className="text-neutral-400 text-[9px] font-light tracking-[0.45em] uppercase">Begin your journey</p>
            <h2 className="text-brand-black font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 9vw, 3.5rem)", lineHeight: 1, letterSpacing: "0.04em" }}>
              Book Now
            </h2>
            <a href="/appointments" className="text-brand-black text-[10px] font-light tracking-[0.3em] uppercase border-b border-brand-black pb-1" style={{ fontFamily: "var(--font-hanken)" }}>
              Book a consultation
            </a>
          </div>
          <div className="absolute right-0 overflow-hidden" style={{ width: "34vw", top: "8%", bottom: "-4%" }}>
            <img src="/assets/Yalda-1.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-stretch" style={{ minHeight: "60vh" }}>
          <div className="relative overflow-hidden">
            <img src="/assets/dr-yalda-treatment-03.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-10 px-20 py-48">
            <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase">Begin your journey</p>
            <h2 className="text-brand-black font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1, letterSpacing: "0.04em" }}>
              Book Now
            </h2>
            <a href="/appointments" className="text-brand-black text-[11px] font-light tracking-[0.3em] uppercase border-b border-brand-black pb-1 hover:opacity-50 transition-opacity duration-300" style={{ fontFamily: "var(--font-hanken)" }}>
              Book a consultation
            </a>
          </div>
          <div className="relative overflow-hidden">
            <img src="/assets/Yalda-1.avif" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>
    </main>
  );
}
