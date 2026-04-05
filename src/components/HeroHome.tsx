"use client";

import { useEffect, useRef } from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function HeroHome() {
  const imgRef = useRef<HTMLImageElement>(null);

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
      <section className="md:hidden relative overflow-hidden opacity-0 animate-fade-in" style={{ height: "100svh", marginTop: "-80px", animationDelay: "0.1s" }}>

        {/* Photo */}
        <img
          src="/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif"
          alt="Dr. Yalda Jamali"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "65% 10%", zIndex: 0 }}
        />

        {/* Base darkening */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", zIndex: 1 }} />

        {/* Top vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,19,18,0.7) 0%, rgba(20,19,18,0.3) 18%, transparent 45%)", zIndex: 2 }} />

        {/* Bottom vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />

        {/* Centred content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 5 }}>
          <img
            src="/assets/dr-yalda-logo-long.svg"
            alt="Dr. Yalda Jamali"
            style={{ width: "clamp(220px, 65vw, 360px)", height: "auto", filter: "brightness(0) invert(1) sepia(0.15) saturate(1.2) brightness(0.96)", opacity: 0.9 }}
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ zIndex: 5, animationDelay: "1.5s", animationDuration: "1s" }}>
          <span style={{ fontSize: "8px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.3)", textTransform: "uppercase", fontWeight: 300 }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(244,241,238,0.3), transparent)" }} />
        </div>

        {/* Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6, opacity: 0.08 }} />
      </section>

      {/* ── DESKTOP ── */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{ height: "100vh", marginTop: "-72px" }}
      >
        {/* Photo — oversized so parallax doesn't show gaps */}
        <img
          ref={imgRef}
          src="/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif"
          alt="Dr. Yalda Jamali"
          className="absolute left-0 right-0 w-full object-cover"
          style={{
            top: "-10%",
            height: "120%",
            objectPosition: "65% 10%",
            zIndex: 0,
            willChange: "transform",
          }}
        />

        {/* Base darkening */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", zIndex: 1 }} />

        {/* Top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(20,19,18,0.7) 0%, rgba(20,19,18,0.3) 18%, transparent 45%)",
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
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 5 }}>
          <img
            className="opacity-0 animate-fade-in"
            src="/assets/dr-yalda-logo-long.svg"
            alt="Dr. Yalda Jamali"
            style={{
              width: "clamp(280px, 38vw, 600px)",
              height: "auto",
              filter: "brightness(0) invert(1) sepia(0.15) saturate(1.2) brightness(0.96)",
              opacity: 0,
              animationDelay: "1s",
              animationDuration: "1.4s",
            }}
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ zIndex: 5, animationDelay: "1.8s", animationDuration: "1s" }}>
          <span style={{ fontSize: "8px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.3)", textTransform: "uppercase", fontWeight: 300 }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(244,241,238,0.3), transparent)" }} />
        </div>

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
    </>
  );
}
