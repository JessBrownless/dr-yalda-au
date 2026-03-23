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
    <section className="bg-parchment py-20 px-12">
      <div className="max-w-screen-xl mx-auto">

        <p className="text-zinc-400 text-[10px] font-light tracking-[0.45em] uppercase mb-16 text-center">
          As seen in &amp; partnered with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {logos.map(({ src, alt }) => (
            <div key={alt} className="flex items-center justify-center">
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
