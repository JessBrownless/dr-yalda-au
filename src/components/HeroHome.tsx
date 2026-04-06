"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const heroImages = [
  { src: "/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif", position: "65% 10%" },
  { src: "/assets/IMG_0028.avif", position: "50% 20%" },
];

export default function HeroHome() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          const y = window.scrollY * 0.35;
          imgRef.current.style.transform = `translateY(${y}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* ── MOBILE ── */}
      <section className="md:hidden relative overflow-hidden opacity-0 animate-fade-in" style={{ height: "90dvh", maxHeight: "90dvh", marginTop: "-80px", animationDelay: "0.1s" }}>

        {/* Photos — crossfade */}
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={i === 0 ? "Dr. Yalda Jamali" : ""}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
            style={{ objectPosition: img.position, zIndex: 0, opacity: activeIndex === i ? 1 : 0 }}
          />
        ))}

        {/* Base darkening */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }} />

        {/* Top vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)", zIndex: 2 }} />

        {/* Bottom vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />

        {/* Centred content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8" style={{ zIndex: 5 }}>
          <img
            src="/assets/dr-yalda-logo-long.svg"
            alt="Dr. Yalda Jamali"
            style={{ width: "auto", height: "32px", filter: "brightness(0) invert(1) sepia(0.15) saturate(1.2) brightness(0.96)", opacity: 0.9 }}
          />
          <p style={{ fontSize: "14px", fontFamily: "var(--font-lato)", fontWeight: 300, color: "rgba(244,241,238,0.45)", textAlign: "center", lineHeight: 1.8 }}>
            Cosmetic doctor, educator, and brand collaborator based in Sydney — combining medical expertise with industry innovation
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer"
          style={{ zIndex: 5, animationDelay: "1.5s", animationDuration: "1s", background: "none", border: "none", padding: 0 }}
        >
          <img src="/assets/key-visual-blush.svg" alt="" aria-hidden="true" style={{ width: "28px", height: "auto", opacity: 0.5 }} />
          <span style={{ fontSize: "8px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", color: "rgba(244,241,238,0.3)", textTransform: "uppercase", fontWeight: 300 }}>Scroll</span>
        </button>

        {/* Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6, opacity: 0.08 }} />
      </section>

      {/* ── DESKTOP ── */}
      <section
        className="hidden md:block relative overflow-hidden opacity-0 animate-fade-in"
        style={{ height: "90vh", marginTop: "-72px", animationDelay: "0.1s", animationDuration: "1s" }}
      >
        {/* Photos — crossfade, oversized so parallax doesn't show gaps */}
        <div ref={imgRef} className="absolute left-0 right-0" style={{ top: "-10%", height: "120%", zIndex: 0, willChange: "transform" }}>
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={i === 0 ? "Dr. Yalda Jamali" : ""}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
              style={{ objectPosition: img.position, opacity: activeIndex === i ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Base darkening */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }} />

        {/* Top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)",
            zIndex: 2,
          }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)",
            zIndex: 2,
          }}
        />

        {/* Centred content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6" style={{ zIndex: 5 }}>
          <img
            className="opacity-0 animate-fade-in"
            src="/assets/dr-yalda-logo-long.svg"
            alt="Dr. Yalda Jamali"
            style={{
              height: "64px",
              width: "auto",
              maxWidth: "420px",
              filter: "brightness(0) invert(1) sepia(0.15) saturate(1.2) brightness(0.96)",
              opacity: 0,
              animationDelay: "1s",
              animationDuration: "1.4s",
            }}
          />
          <p className="opacity-0 animate-fade-in" style={{ fontSize: "17px", fontFamily: "var(--font-lato)", fontWeight: 300, color: "rgba(244,241,238,0.45)", textAlign: "center", lineHeight: 1.8, maxWidth: "60ch", animationDelay: "1.4s", animationDuration: "1.2s" }}>
            Cosmetic doctor, speaker, and brand collaborator based in Sydney — combining medical expertise with industry innovation
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer"
          style={{ zIndex: 5, animationDelay: "1.8s", animationDuration: "1s", background: "none", border: "none", padding: 0 }}
        >
          <img src="/assets/key-visual-blush.svg" alt="" aria-hidden="true" style={{ width: "28px", height: "auto", opacity: 0.5 }} />
          <span style={{ fontSize: "8px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", color: "rgba(244,241,238,0.3)", textTransform: "uppercase", fontWeight: 300 }}>Scroll</span>
        </button>

        {/* Social box — right edge */}
        <div
          className="opacity-0 animate-fade-in absolute flex flex-col"
          style={{
            right: "clamp(1.5rem, 3vw, 2.5rem)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            border: "1px solid rgba(244,241,238,0.22)",
            animationDelay: "1.6s",
            animationDuration: "1s",
          }}
        >
          {[
            { icon: FaInstagram, href: "https://instagram.com/dryaldajamali", label: "Instagram" },
            { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
            { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                width: "40px",
                height: "40px",
                color: "rgba(244,241,238,0.4)",
                borderTop: i > 0 ? "1px solid rgba(244,241,238,0.22)" : "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(244,241,238,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,241,238,0.4)")}
            >
              <Icon size={11} />
            </a>
          ))}
        </div>

        {/* Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6, opacity: 0.08 }} />
      </section>

      {/* Sentinel — Navbar watches this to switch logo colour */}
      <div id="hero-end" aria-hidden="true" style={{ height: 0, pointerEvents: "none" }} />
    </>
  );
}
