"use client";

import { useEffect, useRef, type ReactNode } from "react";

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/**
 * Scroll-linked fade + rise. Unlike AOS (a one-shot timed fade triggered on
 * entry), the opacity and lift here track the element's position in the viewport
 * every frame, so the reveal glides in sync with Lenis's smoothed scroll — a
 * calmer, more editorial entrance. Fully hidden when the top edge sits at the
 * bottom of the viewport; fully resolved by the time it reaches the middle.
 *
 * `className` is applied to the animated element itself (so it can *be* the grid,
 * rather than adding a wrapper). Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = "",
  rise = 28,
}: {
  children: ReactNode;
  className?: string;
  rise?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let raf = 0;
    const loop = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = clamp((vh - rect.top) / (vh * 0.5), 0, 1);
      el.style.opacity = String(p);
      el.style.transform = `translateY(${(1 - p) * rise}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [rise]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}
