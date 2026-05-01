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
      className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 xl:py-52 min-h-[100vh] md:min-h-[clamp(320px,45vw,620px)]"
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

      {/* ETHOS — pinned to top of section */}
      <div className="absolute top-0 left-0 right-0 z-10 pg-container pt-12 md:pt-20">
        <h2 className="overline">Ethos</h2>
      </div>

      <figure className="relative z-10 pg-container w-full flex flex-col items-start gap-6 m-0">
        <span
          className="font-normal leading-none select-none"
          style={{ fontFamily: "'Heading', serif", fontSize: "clamp(5rem, 10vw, 9rem)", lineHeight: 1, color: "rgba(244,241,238,0.5)" }}
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
