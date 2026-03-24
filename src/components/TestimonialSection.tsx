import Image from "next/image";

const testimonials = [
  {
    quote:
      "Working with Dr. Yalda has been an absolute pleasure. As a brand, we value authenticity, and Dr. Yalda perfectly aligns with our mission to provide skincare solutions backed by science and expertise. Her content not only showcases her deep knowledge as a cosmetic doctor but also resonates with a wide audience who trusts her insights. Dr. Yalda has been a key partner in helping us reach the right audience, and breaking down more complex skincare concerns and ingredients. She's been instrumental in highlighting the value of our products. We look forward to continuing to work with her and to educate on all things healthy skin.",
    logo: "/assets/logo-clinique.svg",
    brand: "Clinique",
  },
];

export default function TestimonialSection() {
  const { quote, logo, brand } = testimonials[0];

  return (
    <section className="bg-cream py-24 md:py-48">
      <div className="pg-container">

        <div className="w-6 h-px bg-neutral-300 mb-12 md:mb-16" />

        <div className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Label — cols 1–3 */}
          <div className="hidden md:block col-span-3 pt-1">
            <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase">
              Partner testimonial
            </p>
          </div>

          {/* Quote — cols 5–12 */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col gap-8 md:gap-10">
            <blockquote
              className="text-neutral-800 font-normal leading-relaxed [font-family:'Heading',serif]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>

            <div className="border-b border-neutral-800 pb-1 self-start">
              <Image
                src={logo}
                alt={brand}
                width={120}
                height={40}
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>

        </div>

        <div className="w-6 h-px bg-neutral-300 mt-12 md:mt-16" />

      </div>
    </section>
  );
}
