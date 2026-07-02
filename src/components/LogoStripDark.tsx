import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique", small: false },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie", small: false },
  { src: "/assets/logo-no7.svg", alt: "No.7", small: false },
  { src: "/assets/logo-brand.svg", alt: "Medik-9", small: false },
  { src: "/assets/logo-mamamia.svg", alt: "Mamamia", small: true },
  { src: "/assets/logo-harpers-bazaar.svg", alt: "Harper's Bazaar", small: false },
];

// Mobile marquee track — one logo set duplicated so the -50% translate loops
// seamlessly (a single set already exceeds any mobile viewport width).
const track = [...logos, ...logos];

export default function LogoStripDark() {
  return (
    <section className="bg-parchment py-24 md:py-40">

      {/* Mobile — "Proudly featured in" + full-bleed continuous marquee */}
      <div className="md:hidden flex flex-col items-center gap-10">
        <p className="overline">Proudly featured in</p>

        {/* Static masked viewport — logos fade in/out at the edges */}
        <div
          className="w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex w-max items-center select-none animate-marquee motion-reduce:animate-none"
            style={{ animationDuration: "60s" }}
          >
            {track.map(({ src, alt, small }, i) => (
              <div key={i} className="flex-shrink-0 px-10 flex items-center">
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
      </div>

      {/* Desktop — centered, justified across grid width */}
      <div className="hidden md:block pg-container">
        <div className="flex items-center justify-between w-full select-none">
          {logos.map(({ src, alt, small }) => (
            <div key={alt} className="flex-shrink-0">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={48}
                draggable={false}
                className={`${small ? "h-5" : "h-7"} w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300`}
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
