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
      {/* ── MOBILE layout ── */}
      <section className="md:hidden flex flex-col bg-[#EFEDE8] overflow-x-hidden">

        {/* Top parchment — nav offset + descriptor */}
        <div className="px-8 pt-24 pb-6">
          <p
            className="text-neutral-500 font-normal uppercase leading-snug"
            style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
          >
            Cosmetic Doctor<br />Practising in<br />Sydney
          </p>
        </div>

        {/* Full-width cycling image */}
        <div className="relative w-full overflow-visible" style={{ aspectRatio: "1/1" }}>
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

          {/* Small portrait — centred, overlapping bottom edge */}
          <div
            className="absolute left-1/2 z-10 overflow-hidden"
            style={{
              width: "52%",
              aspectRatio: "3/4",
              bottom: 0,
              transform: "translate(-50%, 45%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Yalda-17.avif"
              alt="Dr. Yalda Jamali"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Bottom parchment — large name + tagline */}
        <div className="px-8 pb-16 flex flex-col gap-2" style={{ paddingTop: "calc(52vw * 0.75 * 0.45 + 2rem)" }}>
          <h1
            className="text-brand-black font-normal leading-none"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3rem, 16vw, 5rem)", letterSpacing: "0.04em" }}
          >
            DR•YALDA
          </h1>
          <p
            className="text-neutral-400 font-normal self-end"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 5vw, 1.5rem)", fontStyle: "italic", letterSpacing: "0.02em" }}
          >
            cosmetic &amp; skin
          </p>
        </div>

      </section>

      {/* ── DESKTOP layout ── */}
      <section className="hidden md:grid md:grid-cols-2 min-h-screen">

        {/* Left — cream panel */}
        <div className="relative flex flex-col justify-between bg-[#EFEDE8] px-16 pt-32 pb-12">
          <p
            className="text-neutral-500 font-normal leading-snug uppercase opacity-0 animate-fade-in"
            style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)", letterSpacing: "0.12em", animationDelay: "0.2s", maxWidth: "18ch" }}
          >
            Cosmetic Doctor<br />Practising in<br />Sydney
          </p>
          <div
            className="flex flex-col items-center opacity-0 animate-fade-in self-center"
            style={{ animationDelay: "0.4s", width: "clamp(150px, 38%, 280px)" }}
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

        {/* Right — cycling image */}
        <div className="relative overflow-hidden">
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-16 w-full h-[calc(100%-4rem)] object-cover object-center transition-opacity duration-[3000ms] ease-in-out"
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
