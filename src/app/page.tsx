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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-neutral-300 h-20 md:h-28" />
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
            className="text-neutral-700"
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
                <img src="/assets/profile-image.jpg" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8 pt-4 md:pt-0" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                About the doctor
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
                  className="text-neutral-400 font-light"
                  style={{ fontSize: "11px", letterSpacing: "0.2em", fontFamily: "var(--font-lato)" }}
                >
                  MBChB · MSc Dermatology · FACCSM
                </p>
              </div>

              <p
                className="text-neutral-400 font-light leading-relaxed"
                style={{ fontSize: "14px", fontFamily: "var(--font-lato)", letterSpacing: "0.01em" }}
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your well-being. I focus on delivering safe, effective results tailored to your needs, guided by the latest medical research. With honesty and transparency, I aim to enhance your natural beauty and boost your confidence. Let's work together to bring out the best version of you.
              </p>

              <a
                href="/about"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                Meet Dr. Yalda
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
                className="text-neutral-400 font-normal uppercase"
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
                Consultation-led care at two Sydney clinics
              </p>

              <p
                className="text-neutral-400 font-light leading-relaxed"
                style={{ fontSize: "14px", fontFamily: "var(--font-lato)", letterSpacing: "0.01em" }}
              >
                Dr. Yalda Jamali combines rigorous medical training with a bespoke approach to aesthetics. Each treatment is a collaboration, designed to enhance your natural architecture.
              </p>

              <a
                href="/services"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                Services
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
            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/assets/IMG_0012.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 50%", transform: "scale(1.15)", transformOrigin: "center bottom" }} />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
              <h2 className="text-brand-black font-normal" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 2.4vw, 3rem)", lineHeight: 1.05, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Begin with a conversation.
              </h2>
              <div className="w-16 h-px bg-neutral-400" />
              <p className="text-neutral-400 font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "var(--font-lato)" }}>
                Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
              </p>
              <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
                Book a consultation
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
