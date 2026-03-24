import Image from "next/image";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique 2" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique 3" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique 4" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique 5" },
  { src: "/assets/logo-clinique.svg", alt: "Clinique 6" },
];

export default function LogoQuilt() {
  return (
    <section className="bg-parchment py-20">
      <div className="pg-container">

        <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase mb-16 text-center">
          As seen in &amp; partnered with
        </p>

        {/* 6 logos × 2 cols each = 12 cols */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          {logos.map(({ src, alt }) => (
            <div key={alt} className="col-span-4 md:col-span-2 flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={48}
                className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
