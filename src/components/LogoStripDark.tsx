import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique" },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie" },
  { src: "/assets/logo-no7.svg", alt: "No.7" },
  { src: "/assets/logo-brand.svg", alt: "Medik-9" },
];

export default function LogoStripDark() {
  return (
    <section className="bg-parchment pt-4 md:py-40" style={{ overflowX: "clip", paddingBottom: "96px" }}>
      <div className="border-t border-neutral-200 mx-8 md:hidden" style={{ marginBottom: "80px" }} />

      <p className="text-[10px] font-light tracking-[0.45em] uppercase mb-10 text-center" style={{ color: "#8F8E8B" }}>
        As seen in &amp; partnered with
      </p>

      <div
        className="logo-strip flex items-center justify-center gap-10 md:gap-16 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
