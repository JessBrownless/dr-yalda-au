"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

// Lenis owns the page scroll every frame, so native window.scrollTo({behavior:
// "smooth"}) calls fight it and lose. The instance is exposed here so buttons
// (back-to-top, hero scroll indicator) can scroll through Lenis instead.
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: true,
      offset: 80,
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", AOS.refresh);
    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
