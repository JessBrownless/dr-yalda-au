import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique", small: false },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie", small: false },
  { src: "/assets/logo-no7.svg", alt: "No.7", small: false },
  { src: "/assets/logo-brand.svg", alt: "Medik-9", small: false },
  { src: "/assets/logo-mamamia.svg", alt: "Mamamia", small: true },
  { src: "/assets/logo-harpers-bazaar.svg", alt: "Harper's Bazaar", small: false },
];

export default function LogoStripDark() {
  return (
    <section className="bg-parchment py-24 md:py-40">
      <div className="pg-container">
        <div className="flex flex-col items-center gap-10">

          {/* Mobile — wrapped, centered to grid */}
          <div className="md:hidden flex items-center justify-center flex-wrap gap-x-10 gap-y-6 select-none">
            {logos.map(({ src, alt, small }) => (
              <div key={alt} className="flex-shrink-0">
                <Image src={src} alt={alt} width={120} height={48} draggable={false}
                  className={`${small ? "h-5" : "h-7"} w-auto object-contain opacity-50`}
                  style={{ filter: "brightness(0)" }}
                />
              </div>
            ))}
          </div>

          {/* Desktop — centered, justified across grid width */}
          <div className="hidden md:flex items-center justify-between w-full select-none">
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
      </div>
    </section>
  );
}
