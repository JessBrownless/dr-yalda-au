"use client";

import { useState } from "react";

const testimonials = [
  {
    logo: "/assets/logo-clinique.svg",
    logoAlt: "Clinique",
    quote: "Working with Dr. Yalda has been an absolute pleasure. As a brand, we value authenticity, and Dr. Yalda perfectly aligns with our mission to provide skincare solutions backed by science and expertise. Her content not only showcases her deep knowledge as a cosmetic doctor but also resonates with a wide audience who trusts her insights. Dr. Yalda has been a key partner in helping us reach the right audience — she\u2019s been instrumental in highlighting the value of our products.",
    attribution: "Clinique Australia · Brand Partnership",
    image: "/assets/IMG_0038.avif",
    imageCaption: "Dr. Yalda Jamali · 2024",
  },
  {
    logo: null,
    logoAlt: null,
    quote: "Dr. Yalda brings a rare combination of clinical rigour and genuine warmth to everything she does. Her commentary is always considered, evidence-based, and never sensationalised — exactly what our readers expect from an expert voice.",
    attribution: "Gritty Pretty · Editorial Feature",
    image: "/assets/IMG_0041.avif",
    imageCaption: "Dr. Yalda Jamali · 2023",
  },
  {
    logo: null,
    logoAlt: null,
    quote: "What sets Dr. Yalda apart is her commitment to honest, unhurried conversation. She was an exceptional guest — thoughtful, articulate, and genuinely passionate about redefining what cosmetic medicine can be.",
    attribution: "The Glow Up Podcast · Guest Appearance",
    image: "/assets/IMG_0031.avif",
    imageCaption: "Dr. Yalda Jamali · 2024",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((i) => (i + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="pg-container">

        {/* Top row — eyebrow + logo + arrows */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
            Partner testimonial
          </p>
          <div className="flex items-center gap-6">
            {t.logo && (
              <img
                src={t.logo}
                alt={t.logoAlt ?? ""}
                className="h-6 w-auto object-contain opacity-40 transition-opacity duration-500"
              />
            )}
            {/* Counter */}
            <span className="text-neutral-400 text-[9px] font-light tracking-[0.3em]">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="group w-10 h-10 border border-neutral-200 flex items-center justify-center hover:border-brand-black transition-colors duration-300"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-brand-black transition-colors duration-300">
                  <path d="M4.5 1L1 5M1 5L4.5 9M1 5H13" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="group w-10 h-10 border border-neutral-200 flex items-center justify-center hover:border-brand-black transition-colors duration-300"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 group-hover:text-brand-black transition-colors duration-300">
                  <path d="M9.5 1L13 5M13 5L9.5 9M13 5H1" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-neutral-200 mb-16" />

        {/* Main grid — quote + image */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Quote — left */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-12">
            <blockquote
              key={current}
              className="text-brand-black font-normal leading-relaxed animate-fade-in"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.2rem, 2vw, 1.65rem)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col gap-3">
              <div className="w-8 h-px bg-neutral-300" />
              <p className="text-neutral-400 text-[9px] font-light tracking-[0.4em] uppercase">
                {t.attribution}
              </p>
            </div>
          </div>

          {/* Image — right */}
          <div className="hidden md:block col-span-4 col-start-9">
            <div key={current} style={{ aspectRatio: "3/4" }} className="overflow-hidden animate-fade-in">
              <img
                src={t.image}
                alt="Dr. Yalda Jamali"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-neutral-400 text-[9px] font-light tracking-[0.3em] uppercase mt-4">
              {t.imageCaption}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
