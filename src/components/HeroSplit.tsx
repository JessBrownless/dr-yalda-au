"use client";

import { useState, useEffect } from "react";

const images = [
  "/assets/IMG_0028.avif",
  "/assets/IMG_0012.avif",
  "/assets/IMG_0030.avif",
];

export default function HeroSplit() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">

      {/* Left — dark panel */}
      <div className="relative flex flex-col justify-between px-12 md:px-16 pt-36 pb-10 min-h-[60vw] md:min-h-0" style={{ backgroundColor: "#232121", zIndex: 1 }}>

        {/* Floating inset portrait */}
        <div
          className="absolute w-[38%] aspect-[3/4] overflow-hidden opacity-0 animate-fade-in"
          style={{ top: "22%", left: "8%", animationDelay: "0.3s", zIndex: 5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Yalda-17.avif"
            alt="Dr. Yalda Jamali"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Bottom — location + dots */}
        <div className="relative flex-1" />
        <div className="relative z-10 flex items-end justify-between">
          <p className="text-white/35 text-[8px] font-light tracking-[0.5em] uppercase">
            Doctor &nbsp;·&nbsp; Collaborator &nbsp;·&nbsp; Educator
          </p>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-px transition-all duration-300 ${i === current ? "bg-white/70" : "bg-white/20"}`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Right — cycling image */}
      <div className="relative overflow-hidden min-h-[70vw] md:min-h-0" style={{ zIndex: 0 }}>
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[3000ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* H1 — spans across both panels */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <h1
          className="text-white font-normal leading-[0.9] opacity-0 animate-fade-in-up w-full"
          style={{
            fontSize: "clamp(3rem, 7.5vw, 9rem)",
            letterSpacing: "0.06em",
            animationDelay: "0.15s",
            paddingLeft: "calc(clamp(6rem, 22vw, 28vw) - 14px)",
          }}
        >
          COSMETIC<br />DOCTOR<br /><em style={{ fontStyle: "italic", textTransform: "none" }}>in Sydney.</em>
        </h1>
      </div>

    </section>
  );
}
