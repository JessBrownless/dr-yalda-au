import ParallaxHero from "@/components/ParallaxHero";

export default function AboutPage() {
  return (
    <main>

      {/* 50/50 Hero */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "calc(100vh - clamp(48px, 5vw, 80px))" }}
      >

        {/* Left — text */}
        <div className="bg-parchment relative flex flex-col gap-10 md:gap-0 md:justify-between px-8 pt-28 pb-12 md:p-28 overflow-hidden">

          {/* Top-right scattered text */}
          <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-neutral-500 text-base font-light leading-relaxed max-w-[220px] text-right">
              Sydney-based cosmetic doctor specialising in facial aesthetics.
            </p>
          </div>

          {/* Mid — credentials */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-neutral-300 text-[10px] font-light tracking-[0.4em] uppercase">
              MBChB · MSc Dermatology · FACCSM
            </p>
          </div>

          {/* Bottom — logo + subtitle */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <img
              src="/assets/dr-yalda-logo-long.svg"
              alt="Dr. Yalda Jamali"
              className="w-full h-auto pr-8 md:pr-16"
              style={{ filter: "invert(1) brightness(0)" }}
            />
            <p className="text-neutral-600 text-base md:text-lg font-light leading-relaxed mt-6">
              Natural results, refined technique, and a practice built entirely on trust. Dr. Yalda brings eight years of London-trained expertise to every consultation — combining a master's in dermatology with a deeply personal approach to aesthetic medicine.
            </p>
          </div>

        </div>

        {/* Right — image */}
        <div className="relative aspect-square md:aspect-auto md:min-h-0">
          <img
            src="/assets/yalda-17.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
          />
        </div>

      </section>

      {/* Bio section — statement */}
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

      {/* Credentials bar */}
      <section className="bg-parchment py-16">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { stat: "8+", label: "Years of experience" },
            { stat: "MBChB", label: "Medical degree" },
            { stat: "MSc", label: "Dermatology" },
            { stat: "FACCSM", label: "Cosmetic physician" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <p
                className="text-brand-black leading-none"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
              >
                {stat}
              </p>
              <p className="text-neutral-500 text-[10px] font-light tracking-[0.35em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ParallaxHero />

      {/* Placeholder section */}
      <section className="bg-cream py-32 md:py-52 flex items-center justify-center">
        <p className="text-neutral-300 text-[10px] font-light tracking-[0.45em] uppercase">
          Section placeholder
        </p>
      </section>



      {/* 50/50 — duplicate hero at bottom */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">

        {/* Left — text */}
        <div className="bg-parchment relative flex flex-col justify-between px-12 md:px-16 pt-36 pb-0 overflow-hidden">

          {/* Top-right scattered text */}
          <div className="flex justify-end">
            <p className="text-neutral-500 text-xs font-light leading-relaxed max-w-[180px] text-right">
              Sydney-based cosmetic doctor specialising in facial aesthetics.
            </p>
          </div>

          {/* Bottom group — credentials + logo */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-neutral-300 text-[10px] font-light tracking-[0.4em] uppercase">
                MBChB · MSc Dermatology · FACCSM
              </p>
            </div>
            <div>
              <img
                src="/assets/dr-yalda-logo-long.svg"
                alt="Dr. Yalda Jamali"
                className="w-full h-auto"
                style={{ filter: "invert(1) brightness(0)" }}
              />
            </div>
          </div>

          {/* Logo marquee */}
          <div className="relative overflow-hidden mt-6 mb-0">
            <div className="flex animate-marquee whitespace-nowrap py-6">
              {[...Array(6)].map((_, i) => (
                <img key={`a-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />
              ))}
              {[...Array(6)].map((_, i) => (
                <img key={`b-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />
              ))}
            </div>
          </div>

        </div>

        {/* Right — image */}
        <div className="relative min-h-[60vw] md:min-h-0">
          <img
            src="/assets/yalda-17.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

      </section>

    </main>
  );
}
