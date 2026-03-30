"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/IMG_0028.avif",
  "/assets/IMG_0012.avif",
  "/assets/IMG_0030.avif",
];

export default function HeroExperiment() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── MOBILE layout — single image editorial ── */}
      <section className="md:hidden flex flex-col bg-parchment overflow-hidden h-screen">

        {/* Masthead row — logo flush left, descriptor flush right, baselines aligned */}
        <div className="px-6 pt-[128px] mb-8 flex items-end justify-between gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h1 className="leading-none flex-shrink-0">
            <Image
              src="/assets/dr-yalda-logo-long.svg"
              alt="Dr. Yalda Jamali"
              width={600}
              height={80}
              className="h-6 w-auto"
              style={{ filter: "brightness(0)" }}
            />
          </h1>
          <p
            className="text-neutral-500 font-normal uppercase text-right leading-snug flex-shrink-0"
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            Cosmetic Doctor<br />Practising in<br />Sydney
          </p>
        </div>

        {/* Image — left-inset matching text margin, flush right, 48px below heading */}
        <div
          className="relative overflow-hidden opacity-0 animate-fade-in flex-1 min-h-0"
          style={{ marginLeft: "1.5rem", animationDelay: "0.3s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Yalda-17.avif"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        {/* cosmetic & skin — flush left, space below image */}
        <div className="px-6 pt-4 pb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p
            className="text-neutral-400 font-normal"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 5vw, 1.5rem)", fontStyle: "italic", letterSpacing: "0.02em", marginLeft: "-1px" }}
          >
            cosmetic &amp; skin
          </p>
        </div>

      </section>

      {/* ── DESKTOP layout ── */}
      <section className="hidden md:grid md:grid-cols-2 min-h-screen">

        {/* Cream panel — left on desktop */}
        <div className="relative flex flex-col justify-between bg-parchment px-8 pt-10 pb-12 order-1">
          <p
            className="text-neutral-500 font-normal leading-snug uppercase opacity-0 animate-fade-in"
            style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)", letterSpacing: "0.12em", animationDelay: "0.2s", maxWidth: "18ch" }}
          >
            Cosmetic Doctor<br />Practising in<br />Sydney
          </p>
          <div
            className="flex flex-col items-center opacity-0 animate-fade-in self-center"
            style={{ animationDelay: "0.4s", width: "clamp(180px, 55%, 380px)" }}
          >
            <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Yalda-17.avif"
                alt="Dr. Yalda Jamali"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-4 w-full">
              <Image
                src="/assets/dr-yalda-logo-long.svg"
                alt="Dr. Yalda Jamali"
                width={200}
                height={40}
                className="w-full h-auto"
                style={{ filter: "brightness(0)" }}
              />
            </div>
          </div>
          <p
            className="self-end text-neutral-400/80 font-normal opacity-0 animate-fade-in"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.8vw, 1.5rem)", fontStyle: "italic", letterSpacing: "0.02em", animationDelay: "0.6s" }}
          >
            cosmetic &amp; skin
          </p>
        </div>

        {/* Cycling image — right on desktop */}
        <div className="relative overflow-hidden order-2">
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
          <div className="absolute bottom-8 left-8 z-10 flex gap-2">
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

      </section>
    </>
  );
}
