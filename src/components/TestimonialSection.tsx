"use client";

import Image from "next/image";
import { useState, useRef } from "react";

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
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-parchment py-[200px]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="pg-container">

        {/* Overline (cols 1-2) + quote (cols 3-10) + nav buttons (cols 11-12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Overline — left column label */}
          <p className="overline col-span-12 md:col-span-2 md:pt-2">
            Partner testimonial
          </p>

          <blockquote className="col-span-12 md:col-span-8 quotesmall">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="col-span-12 md:col-span-2 flex items-center md:justify-end gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                index === 0
                  ? "border-brand-black/20 text-brand-black/50 hover:border-brand-black hover:text-brand-black"
                  : "border-brand-black text-brand-black hover:bg-brand-black hover:text-cream"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><polyline points="8,1 3,6 8,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/></svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-brand-black text-brand-black flex items-center justify-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><polyline points="4,1 9,6 4,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/></svg>
            </button>
          </div>
        </div>

        {/* Logo + progress dots — aligned with the quote column (cols 3-10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3 flex items-center justify-between">
            <Image src={logo} alt={brand} width={192} height={64} className="h-8 w-auto object-contain" />
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`} className="transition-all duration-300"
                  style={{ width: "32px", height: "1px", background: i === index ? "var(--brand-black)" : "rgba(45, 44, 42, 0.2)" }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
