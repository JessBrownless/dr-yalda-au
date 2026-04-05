"use client";

import { useRef, useEffect } from "react";

const items = [
  {
    title: "Collaborator",
    description:
      "Placeholder — a short line about Dr. Yalda's collaborative approach with patients and peers.",
    image: "/assets/big-scroll-01.avif",
  },
  {
    title: "Cosmetic Doctor",
    description:
      "Placeholder — a short line about her clinical expertise and commitment to natural results.",
    image: "/assets/profile-image.avif",
  },
  {
    title: "Educator",
    description:
      "Placeholder — a short line about her role in training and advancing the field.",
    image: "/assets/big-scroll-03.avif",
  },
];

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export default function StickyScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf: number;

    const loop = () => {
      const section = sectionRef.current;
      if (section) {
        const scrolled = Math.max(0, -section.getBoundingClientRect().top);
        const vh = window.innerHeight;

        panelRefs.current.forEach((panel, i) => {
          if (!panel || i === 0) return;
          const progress = clamp((scrolled - (i - 1) * vh) / vh, 0, 1);
          panel.style.transform = `translateY(${(1 - progress) * 100}%)`;
        });
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={el => { panelRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{
              zIndex: i + 1,
              transform: i === 0 ? "translateY(0%)" : "translateY(100%)",
              willChange: "transform",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover ${i === 1 ? "object-top" : "object-center"}`}
            />

            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%)" }} />

            <div className="absolute inset-0 flex items-center z-10">
              <div className="pg-container w-full">
              <div className="flex flex-col gap-5 max-w-lg">
                <p className="text-[10px] font-light tracking-[0.45em] uppercase" style={{ color: "rgba(244,241,238,0.4)" }}>
                  0{i + 1}
                </p>
                <h2
                  className="text-white leading-none uppercase"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)", letterSpacing: "0.04em" }}
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
          </div>
        ))}
      </div>
    </section>
  );
}
