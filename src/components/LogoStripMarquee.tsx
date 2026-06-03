import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique", small: false },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie", small: false },
  { src: "/assets/logo-no7.svg", alt: "No.7", small: false },
  { src: "/assets/logo-brand.svg", alt: "Medik-9", small: false },
  { src: "/assets/logo-mamamia.svg", alt: "Mamamia", small: true },
  { src: "/assets/logo-harpers-bazaar.svg", alt: "Harper's Bazaar", small: false },
];

// One loop-unit, repeated so it always exceeds the viewport width (no gap at the
// loop point on wide screens), then duplicated once so the -50% translate loops
// seamlessly. Bump the repeat length for ultra-wide displays.
const loopUnit = Array.from({ length: 3 }, () => logos).flat();
const track = [...loopUnit, ...loopUnit];

// Continuous rotating marquee variant of the logo strip. Kept on /unused-components
// as a preserved experiment — the homepage uses the static LogoStripDark.
export default function LogoStripMarquee() {
  return (
    <section className="bg-parchment py-24 md:py-40">
      {/* Static masked viewport — logos fade in/out at the edges */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Moving track — gentle continuous drift, pauses on hover, stills for reduced-motion */}
        <div
          className="flex w-max items-center select-none animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: "165s" }}
        >
          {track.map(({ src, alt, small }, i) => (
            <div key={i} className="flex-shrink-0 px-10 md:px-14 flex items-center">
              <Image
                src={src}
                alt={i < logos.length ? alt : ""}
                aria-hidden={i >= logos.length}
                width={120}
                height={48}
                draggable={false}
                className={`${small ? "h-5" : "h-7"} w-auto object-contain opacity-50`}
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
