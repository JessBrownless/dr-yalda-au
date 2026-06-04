"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Crossfade duration (ms) — keep in sync with the `duration-500` Tailwind class below.
const FADE_MS = 500;

const testimonials = [
  {
    quote:
      "Working with Dr. Yalda has been an absolute pleasure. As a brand, we value authenticity, and Dr. Yalda perfectly aligns with our mission to provide skincare solutions backed by science and expertise. Her content not only showcases her deep knowledge as a cosmetic doctor but also resonates with a wide audience who trusts her insights. She's been instrumental in highlighting the value of our products and we look forward to continuing to work with her.",
    logo: "/assets/logo-clinique.svg",
    brand: "Clinique",
    logoW: 142,
    logoH: 40,
    logoClass: "h-7",
  },
  {
    quote:
      "Dr Jamali is one of Mamamia's most trusted expert voices in cosmetic medicine. Her ability to break down complex topics into accessible, practical information has made her an invaluable resource for our audience. Whether discussing emerging aesthetic trends or sharing her professional insights on skincare and treatments, Dr Jamali consistently delivers evidence-based expertise with clarity and authenticity. Her knowledge and transparent approach perfectly aligns with our commitment to providing women with reliable, trustworthy information.",
    logo: "/assets/logo-mamamia.svg",
    brand: "Mamamia",
    logoW: 229,
    logoH: 37,
    logoClass: "h-6",
  },
  {
    quote:
      "Dr. Yalda was an absolute pleasure to partner with on Elucent. From hosting our event to creating engaging, educational social content, she brought both credibility and care to every part of our partnership together. Her deep knowledge of skincare ingredients added genuine value for our audience, helping translate complex information into accessible, meaningful insights. She was incredibly professional throughout the entire process, reliable, collaborative and truly invested in delivering high-quality outcomes. We couldn't recommend her more highly and look forward to working together more in the future.",
    logo: "/assets/ego-the-science-of-healthy-skin.png",
    brand: "Ego",
    logoW: 900,
    logoH: 331,
    logoClass: "h-14",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (fadeTimer.current) clearTimeout(fadeTimer.current); }, []);

  // Fade the current quote/logo out, swap content while invisible, then fade back in.
  // Ignore input mid-transition so rapid clicks/swipes can't stack and jank.
  const goTo = (target: number) => {
    if (fading || target === index) return;
    setFading(true);
    fadeTimer.current = setTimeout(() => {
      setIndex(target);
      setFading(false);
    }, FADE_MS);
  };

  const len = testimonials.length;
  const prev = () => goTo((index - 1 + len) % len);
  const next = () => goTo((index + 1) % len);

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

          {/* All quotes stacked in one grid cell so the block is always as tall as the
              longest quote — the height never changes between slides, so the nav arrows
              below/beside it stay put. Only the active quote is visible; the rest fade out. */}
          <div className="col-span-12 md:col-span-10 grid">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 quotesmall transition-opacity duration-500 ease-in-out ${
                  i === index && !fading ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            ))}
          </div>
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
            {/* Logos stacked + vertically centred in a fixed-height (tallest logo) box,
                so the logo/dots row doesn't shift when logos of different heights swap in. */}
            <div className="grid h-14 items-center">
              {testimonials.map((t, i) => (
                <Image
                  key={i}
                  src={t.logo}
                  alt={t.brand}
                  width={t.logoW}
                  height={t.logoH}
                  aria-hidden={i !== index}
                  className={`col-start-1 row-start-1 self-center ${t.logoClass} w-auto object-contain brightness-0 transition-opacity duration-500 ease-in-out ${
                    i === index && !fading ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Go to testimonial ${i + 1}`} className="transition-all duration-300"
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
