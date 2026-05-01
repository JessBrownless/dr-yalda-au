"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const defaultImages = [
  { src: "/assets/dr-yalda-jamali-sydney-cosmetic-clinic-2.avif", position: "65% 10%" },
  { src: "/assets/IMG_0028.avif", position: "50% 20%" },
];

interface HeroHomeProps {
  images?: { src: string; position: string }[];
  height?: string;
  showContent?: boolean;
  zoom?: number;
  title?: string;
  titleUppercase?: boolean;
  tagline?: React.ReactNode;
  showScroll?: boolean;
  showSocials?: boolean;
  parallax?: boolean;
  align?: "left" | "center";
  verticalAlign?: "center" | "bottom";
  cta?: { label: string; href: string };
  bottomRight?: { label: string; href: string };
}

export default function HeroHome({
  images,
  height,
  showContent = true,
  zoom = 1,
  title,
  titleUppercase = true,
  tagline = "Cosmetic doctor, educator, and brand collaborator in Sydney — combining medical expertise with innovation",
  showScroll = true,
  showSocials = true,
  parallax = true,
  align = "center",
  verticalAlign = "center",
  cta,
  bottomRight,
}: HeroHomeProps) {
  const isLeft = align === "left";
  const isBottom = verticalAlign === "bottom";
  const heroImages = images ?? defaultImages;
  const mobileHeight = height ?? "100dvh";
  const desktopHeight = height ?? "100dvh";
  const imgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!parallax) return;
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
  }, [parallax]);

  return (
    <>
      {/* Single semantic H1 — visually rendered per breakpoint below as a styled paragraph */}
      {title && <h1 className="sr-only">{title}</h1>}

      {/* ── MOBILE ── */}
      <section className="md:hidden relative overflow-hidden bg-brand-black opacity-0 animate-fade-in" style={{ height: mobileHeight, maxHeight: mobileHeight, marginTop: "-80px", animationDelay: "0s", animationDuration: "0.4s" }}>

        {/* Photos — crossfade, wrapped so the image layer fades in last */}
        <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ zIndex: 0, animationDelay: "1.8s", animationDuration: "2.5s" }}>
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={i === 0 ? "Dr. Yalda Jamali" : ""}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
              style={{ objectPosition: img.position, opacity: activeIndex === i ? 1 : 0, transform: `scale(${zoom})` }}
            />
          ))}
        </div>

        {/* Base darkening */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }} />

        {/* Top vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)", zIndex: 2 }} />

        {/* Bottom vignette */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />

        {/* Centred content */}
        {showContent && (
          <div className={`absolute inset-0 flex px-8 pb-10 ${isBottom ? "items-end" : "items-center"} ${isLeft ? "justify-start" : "justify-center"}`} style={{ zIndex: 5 }}>
            <div className={`flex flex-col ${isLeft ? "items-start" : "items-center"}`}>
            {title ? (
              <p aria-hidden="true" className="heading-xl opacity-0 animate-fade-in" style={{ textAlign: isLeft ? "left" : "center", animationDelay: "0.7s", animationDuration: "1.0s" }}>
                {title}
              </p>
            ) : (
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationDuration: "1.0s" }}>
                <img
                  src="/assets/dr-yalda-logo-long.svg"
                  alt="Dr. Yalda Jamali"
                  style={{ width: "auto", height: "32px", filter: "brightness(0) invert(1) sepia(0.15) saturate(1.2) brightness(0.96)", opacity: 0.9 }}
                />
              </div>
            )}
            {tagline && (
              <p className="opacity-0 animate-fade-in text-brand-white/50 font-light leading-relaxed mt-3" style={{ fontSize: "17px", fontFamily: "'Heading', serif", textAlign: isLeft ? "left" : "center", maxWidth: "60ch", animationDelay: "0.7s", animationDuration: "1.0s" }}>
                {tagline}
              </p>
            )}
            {cta && (
              <a
                href={cta.href}
                className="self-start border border-cream text-cream font-normal uppercase mt-8 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-cream hover:text-brand-black inline-flex items-center gap-3 whitespace-nowrap"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
              >
                {cta.label}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            )}
            {bottomRight && (
              <a
                href={bottomRight.href}
                className="body-xs-caps opacity-0 animate-fade-in self-start hover:text-cream transition-colors duration-300 inline-flex items-center gap-3"
                style={{ marginTop: "20px", animationDelay: "0.7s", animationDuration: "1.0s" }}
              >
                {bottomRight.label}
                <svg width="10" height="12" viewBox="0 0 14 16" fill="none" aria-hidden="true" className="md:w-3.5 md:h-4">
                  <path d="M7 1v13M1 9l6 5 6-5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        {showContent && showScroll && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2" style={{ zIndex: 5 }}>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer"
              style={{ animationDelay: "0.7s", animationDuration: "1.0s", background: "none", border: "none", padding: 0 }}
            >
              <img src="/assets/key-visual-blush.svg" alt="" aria-hidden="true" style={{ width: "28px", height: "auto", opacity: 0.5 }} />
              <span className="body-xs-caps">Scroll</span>
            </button>
          </div>
        )}

        {/* Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6, opacity: 0.08 }} />
      </section>

      {/* ── DESKTOP ── */}
      <section
        className="hidden md:block relative overflow-hidden bg-brand-black opacity-0 animate-fade-in"
        style={{ height: desktopHeight, marginTop: "-72px", animationDelay: "0s", animationDuration: "0.4s" }}
      >
        {/* Photos — crossfade, oversized so parallax doesn't show gaps. Image layer fades in last. */}
        <div ref={imgRef} className="absolute left-0 right-0 opacity-0 animate-fade-in" style={{ top: "-10%", height: "120%", zIndex: 0, animationDelay: "1.8s", animationDuration: "2.5s" }}>
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={i === 0 ? "Dr. Yalda Jamali" : ""}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
              style={{ objectPosition: img.position, opacity: activeIndex === i ? 1 : 0, transform: `scale(${zoom})` }}
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
        {showContent && (
          <div className={`absolute inset-0 flex flex-col ${isLeft ? "pg-container" : "items-center"} ${isBottom ? "justify-end pb-14" : "justify-center"}`} style={{ zIndex: 5 }}>
            <div className={isLeft ? "flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-8 md:items-end" : "contents"}>
              <div className={isLeft ? "md:col-span-6 flex flex-col items-start" : "contents"}>
                {title ? (
                  <p
                    aria-hidden="true"
                    className="heading-xl opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.7s", animationDuration: "1.0s" }}
                  >
                    {title}
                  </p>
                ) : (
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
                      animationDelay: "0.7s",
                      animationDuration: "1.0s",
                    }}
                  />
                )}
                {tagline && (
                  <p className="opacity-0 animate-fade-in text-brand-white/50 font-light leading-relaxed mt-3" style={{ fontSize: "17px", fontFamily: "'Heading', serif", textAlign: isLeft ? "left" : "center", maxWidth: isLeft ? "60ch" : "42ch", textWrap: "balance", animationDelay: "0.7s", animationDuration: "1.0s" }}>
                    {tagline}
                  </p>
                )}
                {cta && (
                  <a
                    href={cta.href}
                    className="opacity-0 animate-fade-in self-start border border-cream text-cream font-normal uppercase mt-8 rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-cream hover:text-brand-black inline-flex items-center gap-3 whitespace-nowrap"
                    style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", animationDelay: "0.7s", animationDuration: "1.0s" }}
                  >
                    {cta.label}
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </div>
              {bottomRight && (
                <a
                  href={bottomRight.href}
                  className={`body-xs-caps opacity-0 animate-fade-in hover:text-cream transition-colors duration-300 inline-flex items-center gap-3 whitespace-nowrap ${isLeft ? "self-start md:col-span-6 md:justify-self-end md:self-end" : "self-start"}`}
                  style={{ marginTop: isLeft ? 0 : "20px", animationDelay: "0.7s", animationDuration: "1.0s" }}
                >
                  {bottomRight.label}
                  <svg width="10" height="12" viewBox="0 0 14 16" fill="none" aria-hidden="true" className="md:w-3.5 md:h-4">
                    <path d="M7 1v13M1 9l6 5 6-5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        {showContent && showScroll && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2" style={{ zIndex: 5 }}>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer"
              style={{ animationDelay: "0.7s", animationDuration: "1.0s", background: "none", border: "none", padding: 0 }}
            >
              <img src="/assets/key-visual-blush.svg" alt="" aria-hidden="true" style={{ width: "28px", height: "auto", opacity: 0.5 }} />
              <span className="body-xs-caps">Scroll</span>
            </button>
          </div>
        )}

        {/* Social box — right edge */}
        {showContent && showSocials && (
          <div
            className="opacity-0 animate-fade-in absolute flex flex-col"
            style={{
              right: "clamp(1.5rem, 3vw, 2.5rem)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 5,
              border: "1px solid rgba(244,241,238,0.22)",
              animationDelay: "0.7s",
              animationDuration: "1.0s",
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
        )}

        {/* Noise grain */}
        <div className="hero-noise absolute inset-0" style={{ zIndex: 6, opacity: 0.08 }} />
      </section>

      {/* Sentinel — Navbar watches this to switch logo colour */}
      <div id="hero-end" aria-hidden="true" style={{ height: 0, pointerEvents: "none" }} />
    </>
  );
}
