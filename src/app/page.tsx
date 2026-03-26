import TestimonialSection from "@/components/TestimonialSection";
import LogoQuilt from "@/components/LogoQuilt";
import MediaTeaser from "@/components/MediaTeaser";
import HeroExperiment from "@/components/HeroExperiment";
import HeroSplit from "@/components/HeroSplit";

export default function Home() {
  return (
    <main>
      <HeroExperiment />

      {/* Her Story — statement block */}
      <section className="bg-cream py-32 md:py-52 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12">
            Her story
          </p>
          <h2
            className="text-brand-black"
            style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", maxWidth: "20ch", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-cream overflow-hidden relative py-32 md:py-56">

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image over parchment */}
            <div className="col-span-12 md:col-span-5">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/Yalda-17.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right — philosophy text */}
            <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col gap-8">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                Our Philosophy
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
                  lineHeight: "1.5",
                  letterSpacing: "0",
                }}
              >
                Ethical, evidence-based care that prioritises your well-being. Results tailored to you—with honesty and a personal touch.
              </p>

              <a
                href="/about"
                className="flex items-center gap-3 text-brand-black font-normal uppercase transition-opacity duration-300 hover:opacity-60 mt-4"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                About Dr. Yalda <span aria-hidden="true" style={{ letterSpacing: 0 }}>→</span>
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Her Approach section — parchment-backed image right, text left */}
      <section className="bg-cream overflow-hidden relative py-32 md:py-56">

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                Her Approach
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
                  lineHeight: "1.5",
                  letterSpacing: "0",
                }}
              >
                Natural results, always. A personalised, meticulous approach to enhance and harmonise your features.
              </p>

              <a
                href="/about"
                className="flex items-center gap-3 text-brand-black font-normal uppercase transition-opacity duration-300 hover:opacity-60 mt-4"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                About Dr. Yalda <span aria-hidden="true" style={{ letterSpacing: 0 }}>→</span>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
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

      <TestimonialSection />
      <MediaTeaser />
      <LogoQuilt />
    </main>
  );
}
