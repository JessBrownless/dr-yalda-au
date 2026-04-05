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
      className="relative flex items-center justify-center overflow-hidden py-32 md:py-48"
      style={{ minHeight: "clamp(360px, 50vw, 680px)" }}
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

      <blockquote className="relative z-10 pg-container w-full flex flex-col gap-8">
        <svg
          data-aos="fade"
          data-aos-duration="1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8"
          fill="rgba(244,241,238,0.3)"
          aria-hidden="true"
        >
          <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
        </svg>
        <p
          data-aos="fade"
          data-aos-delay="180"
          data-aos-duration="1200"
          className="font-normal leading-[1.25]"
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
          style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.5)" }}
        >
          Dr. Yalda Jamali
        </cite>
      </blockquote>
    </section>
  );
}
