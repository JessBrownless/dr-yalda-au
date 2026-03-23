import StickyScrollSection from "@/components/StickyScrollSection";
import TestimonialSection from "@/components/TestimonialSection";
import LogoQuilt from "@/components/LogoQuilt";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-zinc-950 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/Hero.jpg')" }}
        />

        {/* Left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent" />

        {/* Content — left-aligned */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-12 pb-20 gap-6 max-w-3xl">

          <p
            className="text-zinc-500 text-[10px] font-light tracking-[0.45em] uppercase opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Dr. Yalda Jamali
          </p>

          <h1
            className="text-white font-normal leading-tight opacity-0 animate-fade-in-up"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", animationDelay: "0.25s" }}
          >
            Sydney-based<br />cosmetic doctor.
          </h1>

          <p
            className="text-zinc-400 text-base font-light leading-relaxed max-w-md opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            Placeholder strapline — a short, compelling sentence about Dr. Yalda's approach and what sets her practice apart.
          </p>

          <div
            className="flex items-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="/contact"
              className="px-10 py-3.5 border border-white/40 bg-white/5 backdrop-blur-sm text-white/90 text-[10px] font-light tracking-[0.35em] uppercase hover:bg-white/15 hover:border-white/70 transition-all duration-300"
            >
              Book a Consultation
            </a>
            <a
              href="/about"
              className="px-10 py-3.5 border border-white/20 bg-transparent text-white/50 text-[10px] font-light tracking-[0.35em] uppercase hover:border-white/40 hover:text-white/80 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-zinc-950 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </section>

      {/* Intro section */}
      <section className="bg-cream px-12 py-56">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Heading — left */}
          <div>
            <p className="text-zinc-400 text-[10px] font-light tracking-[0.45em] uppercase mb-8">
              About Dr. Yalda
            </p>
            <h2 className="text-zinc-950 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Medicine meets<br />artistry.
            </h2>
          </div>

          {/* Body — right */}
          <div className="flex flex-col gap-6 md:pt-16">
            <p className="text-zinc-600 text-base font-light leading-relaxed">
              Placeholder intro paragraph — a warm, confident introduction to Dr. Yalda's philosophy, her background, and her commitment to natural-looking results. Two to three sentences works well here.
            </p>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Placeholder secondary paragraph — expanding on her approach, her training, or what patients can expect. This keeps the tone personal and reassuring.
            </p>
            <a
              href="/about"
              className="self-start text-zinc-950 text-[10px] font-light tracking-[0.35em] uppercase border-b border-zinc-400 pb-1 hover:border-zinc-950 transition-colors duration-300"
            >
              Learn more
            </a>
          </div>

        </div>
      </section>

      <LogoQuilt />
      <StickyScrollSection />
      <TestimonialSection />
    </main>
  );
}
