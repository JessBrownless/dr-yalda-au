"use client";

import { useEffect, useRef } from "react";

export default function ParallaxQuote() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!imgRef.current) return;
        const section = imgRef.current.parentElement!;
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        imgRef.current.style.transform = `translateY(${progress * 80}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 xl:py-52"
      style={{ minHeight: "clamp(320px, 45vw, 620px)" }}
    >
      {/* Parallax image */}
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/IMG_0028.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          top: "-15%",
          bottom: "-15%",
          willChange: "transform",
          filter: "grayscale(100%)",
        }}
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%)" }} />

      <blockquote className="relative z-10 pg-container w-full flex flex-col items-start gap-6">
        <span
          className="font-normal leading-none select-none"
          style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", lineHeight: 1, color: "rgba(244,241,238,0.5)" }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p
          data-aos="fade"
          data-aos-duration="1200"
          className="font-normal leading-[1.3]"
          style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.25rem, 4vw, 4.5rem)", fontStyle: "italic", letterSpacing: "0", color: "#F4F1EE", maxWidth: "22ch" }}
        >
          Medicine is an art. Every face tells a story — my role is simply to help it shine.
        </p>
        <cite
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="not-italic font-normal uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", color: "rgba(244,241,238,0.6)" }}
        >
          Dr. Yalda Jamali
        </cite>
      </blockquote>
    </section>
  );
}
