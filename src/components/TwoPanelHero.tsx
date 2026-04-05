export default function TwoPanelHero() {
  return (
    /* Two-panel hero — stacks on mobile, side-by-side on desktop */
    <section className="hidden md:grid md:grid-cols-2 relative" style={{ minHeight: "80vh" }}>

      {/* Left — parchment with centred portrait */}
      <div className="hidden md:flex relative items-center justify-center opacity-0 animate-fade-in" style={{ background: "#E0DDD5", animationDelay: "0.1s" }}>
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

      {/* Right — full-bleed image */}
      <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <img src="/assets/IMG_0016.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" style={{ filter: "grayscale(100%)" }} />
      </div>

    </section>
  );
}
