"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Dr. Yalda has been an absolute pleasure. As a brand, we value authenticity, and Dr. Yalda perfectly aligns with our mission to provide skincare solutions backed by science and expertise. Her content not only showcases her deep knowledge as a cosmetic doctor but also resonates with a wide audience who trusts her insights. She's been instrumental in highlighting the value of our products and we look forward to continuing to work with her.",
    logo: "/assets/logo-clinique.svg",
    brand: "Clinique",
  },
  {
    quote:
      "Dr. Yalda brings a rare combination of medical credibility and genuine warmth to every collaboration. Her audience trusts her implicitly, and that trust translates directly into meaningful engagement with our brand. She has a unique ability to communicate complex skincare science in a way that feels accessible and inspiring.",
    logo: "/assets/logo-caudalie.svg",
    brand: "Caudalie",
  },
  {
    quote:
      "Partnering with Dr. Yalda has elevated the way we speak to our customers about ingredients and efficacy. Her integrity as a clinician shines through in everything she creates, and her thoughtful approach to content has been invaluable in building trust with a discerning audience.",
    logo: "/assets/logo-no7.svg",
    brand: "No.7",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const { quote, logo, brand } = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-cream py-16 md:py-28">
      <div className="pg-container">

        <div className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Label — cols 1–3 */}
          <div className="hidden md:block col-span-3 pt-1">
            <p className="text-neutral-400 font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>
              Partner testimonial
            </p>
          </div>

          {/* Quote — cols 5–12 */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col gap-8 md:gap-10">

            {/* Nav buttons */}
            <div className="flex justify-end">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 border border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-brand-black hover:text-brand-black transition-all duration-300"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="8,1 3,6 8,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/>
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 border border-neutral-300 flex items-center justify-center text-neutral-400 hover:border-brand-black hover:text-brand-black transition-all duration-300"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="4,1 9,6 4,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/>
                  </svg>
                </button>
              </div>
            </div>

            <blockquote
              className="text-neutral-800 font-normal leading-relaxed [font-family:'Heading',serif]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Logo + progress dots */}
            <div className="flex items-center justify-between">
              <Image
                src={logo}
                alt={brand}
                width={120}
                height={40}
                className="h-5 w-auto object-contain"
              />

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: i === index ? "28px" : "12px",
                      height: "1px",
                      background: i === index ? "var(--brand-black)" : "#d4d0cc",
                    }}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
