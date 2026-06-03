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
      "Dr Jamali is one of Mamamia's most trusted expert voices in cosmetic medicine. Her ability to break down complex topics into accessible, practical information has made her an invaluable resource for our audience. Whether discussing emerging aesthetic trends or sharing her professional insights on skincare and treatments, Dr Jamali consistently delivers evidence-based expertise with clarity and authenticity. Her knowledge and transparent approach perfectly aligns with our commitment to providing women with reliable, trustworthy information.",
    logo: "/assets/logo-mamamia.svg",
    brand: "Mamamia",
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
    <section className="bg-parchment min-h-[90vh] flex flex-col justify-center py-24" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="pg-container">

        {/* Partner testimonial label — own row, top */}
        <p className="overline mb-8 md:mb-12">
          Partner testimonial
        </p>

        {/* Quote (cols 1-10) + nav buttons (cols 11-12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

          <blockquote className="col-span-12 md:col-span-10 quotesmall">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="col-span-12 md:col-span-2 flex items-center md:justify-end gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                index === 0
                  ? "border-brand-black/20 text-brand-black/40 hover:border-brand-black/40 hover:text-brand-black"
                  : "border-brand-black/30 text-brand-black hover:bg-brand-black hover:text-cream"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><polyline points="8,1 3,6 8,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/></svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-brand-black/30 text-brand-black flex items-center justify-center transition-all duration-300 hover:bg-brand-black hover:text-cream"
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><polyline points="4,1 9,6 4,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none"/></svg>
            </button>
          </div>
        </div>

        {/* Logo + progress dots — aligned with the quote column (cols 1-10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-16 md:mt-24">
          <div className="col-span-12 md:col-span-10 flex items-center justify-between">
            <Image src={logo} alt={brand} width={192} height={64} className="h-6 w-auto object-contain" />
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
