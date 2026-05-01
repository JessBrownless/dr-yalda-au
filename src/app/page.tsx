import TestimonialSection from "@/components/TestimonialSection";
import LogoStripDark from "@/components/LogoStripDark";
import HeroHome from "@/components/HeroHome";
import ParallaxQuote from "@/components/ParallaxQuote";
import StickyScrollSection from "@/components/StickyScrollSection";

export default function Home() {
  return (
    <main>
      <HeroHome
        title="Dr Yalda Jamali"
        tagline="Cosmetic doctor, educator, and brand collaborator in Sydney — combining medical expertise with innovation"
      />

      {/* Her Story — statement block */}
      <section className="bg-parchment py-32 md:py-52 flex flex-col items-center justify-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-brand-line h-20 md:h-28 opacity-40" />
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <h2
            data-aos="fade"
            className="overline mb-12"
          >
            Sydney based cosmetic doctor
          </h2>
          <p
            data-aos="fade"
            data-aos-delay="120"
            className="heading-lg"
          >
            A doctor who listens first, treats with precision, and focuses on achieving natural, balanced, and long-term results.
          </p>
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

              <h2 className="flex flex-col">
                <span className="overline">About </span>
                <span className="heading-lg mt-8">Dr Yalda Jamali </span>
                <span className="overline mt-2">MBChB · MSc Dermatology · FACCSM</span>
              </h2>

              <p
                className="body-serif"
              >
                At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your wellbeing. I focus on delivering safe, considered results tailored to you, guided by current medical evidence. With honesty and transparency, I aim to improve skin health while maintaining results that feel balanced, subtle, and true to you.
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
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
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

              <h2 className="overline">
                Cosmetic Services
              </h2>

              <h3 className="heading-lg">
                Consultation-led care across Sydney
              </h3>

              <p
                className="body-serif"
              >
                Dr Yalda Jamali combines medical expertise with a personalised approach to cosmetic medicine. Each treatment is consultation-led, focused on skin quality and long-term results.
              </p>

              <a
                href="/services"
                className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
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
              <div className="aspect-square md:aspect-[4/5] overflow-hidden">
                <img src="/assets/IMG_0012.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 30%", transform: "scale(1.15)", transformOrigin: "center bottom" }} />
              </div>
              {/* Stamp emblem — bleeds into text column */}
              <img src="/assets/logo-stacked-white.svg" alt="" aria-hidden="true" className="absolute hidden" style={{ top: "-3.5rem", right: "-3.75rem", width: "120px", height: "auto", filter: "brightness(0)", opacity: 0.85, zIndex: 10 }} />
            </div>

            {/* Text */}
            <div className="md:col-span-5 md:col-start-7 flex flex-col gap-8">
              <h2 className="overline">Book now</h2>
              <h3 className="heading-lg">
                Let's begin with a conversation
              </h3>
              <p className="body-serif">
                Dr. Yalda's consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.
              </p>
              <a href="/appointments" className="self-start border border-brand-black text-brand-black font-normal uppercase mt-2 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap" style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}>
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
