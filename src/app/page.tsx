import StickyScrollSection from "@/components/StickyScrollSection";
import TestimonialSection from "@/components/TestimonialSection";
import LogoQuilt from "@/components/LogoQuilt";
import SplitSection from "@/components/SplitSection";
import MediaTeaser from "@/components/MediaTeaser";
import HeroSplit from "@/components/HeroSplit";

export default function Home() {
  return (
    <main>
      <HeroSplit />

      {/* Intro section */}
      <section className="bg-cream py-32 md:py-56">
        <div className="pg-container">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-10">

            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
              Enhancing
            </p>

            <h2
              className="text-brand-black font-normal leading-[1.15]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              CONFIDENCE IN <em>cosmetic</em><br />
              <em>&amp; skin</em> TREATMENTS.
            </h2>

            <p className="text-neutral-700 text-base font-light leading-relaxed max-w-xl">
              At the heart of my practice is a commitment to ethical, evidence-based care that prioritises your well-being. I focus on delivering safe, effective results tailored to your needs — with honesty, transparency, and a deeply personal touch.
            </p>

            <a
              href="/about"
              className="text-brand-black text-[9px] font-light tracking-[0.4em] uppercase border-b border-neutral-400 pb-1 hover:border-brand-black transition-colors duration-300"
            >
              About Dr. Yalda
            </a>

          </div>
        </div>
      </section>

      <SplitSection imageSrc="/assets/yalda-1.jpg" imageAlt="Dr. Yalda Jamali" imagePosition="left">
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

      <MediaTeaser />
      <StickyScrollSection />
      <TestimonialSection />
      <LogoQuilt />
    </main>
  );
}
