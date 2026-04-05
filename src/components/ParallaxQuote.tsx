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
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "50vh" }}
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
        }}
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%)" }} />

      <div className="relative z-10 pg-container w-full px-8 md:px-0">
      <blockquote
        className="flex flex-col gap-6"
        style={{ borderLeft: "2px solid rgba(244,241,238,0.35)", paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        <p
          data-aos="fade"
          data-aos-duration="1200"
          className="font-normal leading-[1.25] italic"
          style={{
            fontFamily: "'Heading', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
            color: "#F4F1EE",
            maxWidth: "22ch",
          }}
        >
          I believe the most beautiful results are the ones no one can quite put their finger on.
        </p>
        <cite
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="not-italic font-normal uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", color: "rgba(244,241,238,0.5)" }}
        >
          Dr. Yalda Jamali
        </cite>
      </blockquote>
      </div>
    </section>
  );
}
