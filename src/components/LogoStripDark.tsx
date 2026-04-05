"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = [
  { src: "/assets/logo-clinique.svg", alt: "Clinique" },
  { src: "/assets/logo-caudalie.svg", alt: "Caudalie" },
  { src: "/assets/logo-no7.svg", alt: "No.7" },
  { src: "/assets/logo-brand.svg", alt: "Medik-9" },
];

export default function LogoStripDark() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="bg-cream pt-12 pb-0 overflow-hidden">

      <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase mb-10 text-center">
        As seen in &amp; partnered with
      </p>

      <div
        ref={trackRef}
        className="logo-strip flex items-center gap-16 overflow-x-auto select-none"
        style={{
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "clamp(2rem, 6vw, 6rem)",
          paddingRight: "clamp(2rem, 6vw, 6rem)",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {logos.map(({ src, alt }) => (
          <div key={alt} className="flex-shrink-0">
            <Image
              src={src}
              alt={alt}
              width={120}
              height={48}
              draggable={false}
              className="h-7 w-auto object-contain opacity-30 hover:opacity-60 transition-opacity duration-300"
              style={{ filter: "brightness(0)" }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
