"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll parallax for full-bleed section backgrounds: translates its children
 * by rate x scrollY, mirroring HeroHome's built-in parallax (0.15 is the
 * subtle mobile rate there). Wrap an OVERSIZED image layer (e.g. top -6%,
 * height 112%) so the drift never exposes an edge. Respects
 * prefers-reduced-motion.
 */
export default function ParallaxDrift({
  children,
  rate = 0.15,
  className = "",
  style,
}: {
  children: ReactNode;
  rate?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * rate}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [rate]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: "transform" }}>
      {children}
    </div>
  );
}
