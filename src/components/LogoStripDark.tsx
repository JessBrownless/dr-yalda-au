import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique", small: false },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie", small: false },
  { src: "/assets/logo-no7.svg", alt: "No.7", small: false },
  { src: "/assets/logo-brand.svg", alt: "Medik-9", small: false },
  { src: "/assets/logo-mamamia.svg", alt: "Mamamia", small: true },
];

export default function LogoStripDark() {
  return (
    <section className="bg-parchment pt-4 md:py-40" style={{ paddingBottom: "96px" }}>
      <div className="border-t border-neutral-200 mx-8 md:hidden" style={{ marginBottom: "80px" }} />

      <div className="flex flex-col items-center gap-10">
        <p className="text-[10px] font-light tracking-[0.45em] uppercase" style={{ color: "#8F8E8B" }}>
          As seen in &amp; partnered with
        </p>

        {/* Mobile — scrollable */}
        <div className="md:hidden w-full overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex items-center gap-10 px-8 select-none" style={{ width: "max-content" }}>
            {logos.map(({ src, alt, small }) => (
              <div key={alt} className="flex-shrink-0">
                <Image src={src} alt={alt} width={120} height={48} draggable={false}
                  className={`${small ? "h-5" : "h-7"} w-auto object-contain opacity-40`}
                  style={{ filter: "brightness(0)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — centered */}
        <div className="hidden md:flex items-center gap-16 select-none">
          {logos.map(({ src, alt, small }) => (
            <div key={alt} className="flex-shrink-0">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={48}
                draggable={false}
                className={`${small ? "h-5" : "h-7"} w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300`}
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
