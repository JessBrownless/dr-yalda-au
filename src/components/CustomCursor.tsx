"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dot.current) return;
      dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const grow = () => dot.current?.classList.add("cursor-grow");
    const shrink = () => dot.current?.classList.remove("cursor-grow");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, img").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={dot}
      className="cursor-dot"
      aria-hidden="true"
    />
  );
}
