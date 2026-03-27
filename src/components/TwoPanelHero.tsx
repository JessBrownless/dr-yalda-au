export default function TwoPanelHero() {
  return (
    /* Two-panel hero — stacks on mobile, side-by-side on desktop */
    <section className="hidden md:grid md:grid-cols-2 relative" style={{ minHeight: "100svh" }}>

      {/* Left — full-bleed image */}
      <div className="relative opacity-0 animate-fade-in aspect-[3/4] md:aspect-auto" style={{ animationDelay: "0.1s" }}>
        <img src="/assets/IMG_0002.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>

      {/* Right — parchment with centred portrait (desktop only) */}
      <div className="hidden md:flex relative items-center justify-center opacity-0 animate-fade-in" style={{ background: "#E0DDD5", animationDelay: "0.3s" }}>
        <div className="relative" style={{ width: "50%", aspectRatio: "3/4" }}>
          <div className="overflow-hidden w-full h-full">
            <img src="/assets/Yalda-1.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
          </div>
          {/* Round logo — hangs off bottom-right of portrait */}
          <img
            src="/assets/logo-circle.svg"
            alt="Dr. Yalda Jamali"
            className="absolute z-10"
            style={{ width: "64px", bottom: "-2.25rem", right: "-2.25rem" }}
          />
        </div>
      </div>

    </section>
  );
}
