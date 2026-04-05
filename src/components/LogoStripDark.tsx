import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique" },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie" },
  { src: "/assets/logo-no7.svg", alt: "No.7" },
  { src: "/assets/logo-brand.svg", alt: "Medik-9" },
];

export default function LogoStripDark() {
  return (
    <section className="bg-cream py-12" style={{ overflowX: "clip" }}>

      <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase mb-10 text-center">
        As seen in &amp; partnered with
      </p>

      <div
        className="logo-strip flex items-center gap-10 md:gap-16 overflow-x-auto select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "clamp(2rem, 6vw, 6rem)",
          paddingRight: "clamp(2rem, 6vw, 6rem)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {logos.map(({ src, alt }) => (
          <div key={alt} className="flex-shrink-0">
            <Image
              src={src}
              alt={alt}
              width={120}
              height={48}
              draggable={false}
              className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
              style={{ filter: "brightness(0)" }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
