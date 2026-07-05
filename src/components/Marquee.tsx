"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Masked, continuously-scrolling logo belt. The animation stays PAUSED at its
 * start position (first item at the left edge) until the belt enters the
 * viewport — otherwise it runs from page load and arrives mid-cycle at some
 * arbitrary offset, which reads as broken rather than seamless.
 *
 * Children must be the doubled track (two copies of the item set) so the
 * -50% translate loops cleanly. Scroll-measured like ImageReveal/Navbar — not
 * an IntersectionObserver.
 */
export default function Marquee({
  children,
  duration = "50s",
  className = "",
}: {
  children: ReactNode;
  duration?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setRunning(true);
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
    <div
      ref={ref}
      className={`w-full overflow-hidden ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center select-none animate-marquee motion-reduce:animate-none"
        style={{ animationDuration: duration, animationPlayState: running ? "running" : "paused" }}
      >
        {children}
      </div>
    </div>
  );
}
