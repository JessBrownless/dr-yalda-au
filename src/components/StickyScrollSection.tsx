"use client";

import { useRef, useState, useEffect } from "react";

const items = [
  {
    title: "Collaborator",
    description:
      "Placeholder — a short line about Dr. Yalda's collaborative approach with patients and peers.",
    image: "/assets/big-scroll-01.jpg",
  },
  {
    title: "Cosmetic Doctor",
    description:
      "Placeholder — a short line about her clinical expertise and commitment to natural results.",
    image: "/assets/big-scroll-02.jpg",
  },
  {
    title: "Educator",
    description:
      "Placeholder — a short line about her role in training and advancing the field.",
    image: "/assets/big-scroll-03.jpg",
  },
];

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export default function StickyScrollSection() {
  const [scrolled, setScrolled] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      setScrolled(Math.max(0, -section.getBoundingClientRect().top));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((item, i) => {
          const vh = typeof window !== "undefined" ? window.innerHeight : 800;

          // Each panel (i > 0) slides in over one viewport-height of scroll
          const progress = i === 0 ? 1 : clamp((scrolled - (i - 1) * vh) / vh, 0, 1);
          const translateY = i === 0 ? 0 : (1 - progress) * 100;

          return (
            <div
              key={item.title}
              className="absolute inset-0"
              style={{
                zIndex: i + 1,
                transform: `translateY(${translateY}%)`,
                willChange: "transform",
              }}
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover ${i === 1 ? "object-top" : "object-center"}`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-black/50" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center px-12 z-10">
                <div className="flex flex-col gap-5 max-w-lg">
                  <p className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase">
                    0{i + 1}
                  </p>
                  <h2
                    className="text-white leading-none"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                  >
                    {item.title}
                  </h2>
                  <div className="w-8 h-px bg-neutral-500" />
                  <p className="text-neutral-300 text-sm font-light leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
