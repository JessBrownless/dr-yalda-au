"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Editorial image reveal — the site's signature entrance for in-flow imagery,
 * echoing the heroes: a quiet dark-tinted base first, then the image resolves
 * slowly (1.8s) once the wrapper enters the viewport. Fires once.
 *
 * Use it AS the image wrapper: move the aspect/overflow classes from the div
 * it replaces onto `className`. Pure opacity — no transform — so hover-zoom
 * utilities on the inner <img> keep working. Reduced-motion shows instantly.
 */
export default function ImageReveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Direct scroll measurement, not IntersectionObserver — same pattern as the
  // Navbar's hero flip (IO proved unreliable/untestable in this codebase).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
        setShown(true);
        window.removeEventListener("scroll", measure);
        window.removeEventListener("resize", measure);
      }
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={ref} className={`image-reveal ${shown ? "is-shown" : ""} ${className}`} style={style}>
      <div className="image-reveal__layer">{children}</div>
    </div>
  );
}
