"use client";

import { useEffect, useRef } from "react";

interface ParallaxQuoteProps {
  image?: string;
  imagePosition?: string;
  quote?: string;
  citation?: string;
}

export default function ParallaxQuote({
  image = "/assets/IMG_0028.avif",
  imagePosition = "center 20%",
  quote = "Every face is different. The aim is not to alter, but to treat with care, balance, and intention.",
  citation = "Dr. Yalda Jamali",
}: ParallaxQuoteProps = {}) {
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
      id="parallax-quote"
      className="relative flex items-center justify-center overflow-hidden py-40 md:py-64 text-parchment"
    >
      {/* Parallax image */}
      <div
        ref={imgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
          top: "-15%",
          bottom: "-15%",
          willChange: "transform",
          filter: "grayscale(100%)",
        }}
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%)" }} />

      <figure className="relative z-10 pg-container w-full flex flex-col items-start gap-6 m-0">
        <span
          className="quote-mark text-parchment/50"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote
          data-aos="fade"
          data-aos-duration="1200"
          className="blockquote"
        >
          {quote}
        </blockquote>
        <figcaption>
          <cite
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="overline not-italic"
          >
            {citation}
          </cite>
        </figcaption>
      </figure>
    </section>
  );
}
