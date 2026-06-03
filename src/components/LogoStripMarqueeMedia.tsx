// Media-page partner/press logos. `text` items render as a wordmark.
const partnerLogos = [
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie", text: "" },
  { src: "/assets/logo-no7.svg", alt: "No7", text: "" },
  { src: "", alt: "", text: "MEDIK8" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique", text: "" },
  { src: "/assets/logo-mamamia.svg", alt: "Mamamia", text: "" },
];
// Repeat so one loop-unit exceeds the viewport, then duplicate for the seamless -50% loop.
const partnerLoopUnit = [...partnerLogos, ...partnerLogos, ...partnerLogos];
const partnerTrack = [...partnerLoopUnit, ...partnerLoopUnit];

// Scrolling marquee variant of the media partner strip. Kept on /unused-components
// as a preserved experiment — the media page uses the static strip.
export default function LogoStripMarqueeMedia() {
  return (
    <section className="bg-parchment pt-32 md:pt-48 pb-24 md:pb-32">
      <div className="flex flex-col items-center gap-10">
        <h2 className="overline">
          Proudly partnering and featured in
        </h2>
        {/* Masked viewport — logos fade in/out at the edges */}
        <div
          className="w-full overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Moving track — gentle continuous drift, pauses on hover, stills for reduced-motion */}
          <div
            className="flex w-max items-center select-none animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ animationDuration: "120s" }}
          >
            {partnerTrack.map((item, i) => (
              <div key={i} className="flex-shrink-0 px-8 md:px-12 flex items-center" aria-hidden={i >= partnerLogos.length}>
                {item.text ? (
                  <span className="text-brand-black/60 font-light whitespace-nowrap" style={{ fontFamily: "sans-serif", fontSize: "1.05rem", letterSpacing: "0.2em" }}>
                    {item.text}
                  </span>
                ) : (
                  <img src={item.src} alt={i < partnerLogos.length ? item.alt : ""} className="h-5 w-auto object-contain opacity-60" style={{ filter: "brightness(0)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
