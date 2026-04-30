"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative z-[60] grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-cream/80 px-6"
      style={{ backgroundColor: "#2D2C2A", height: "32px" }}
    >
      {/* Left spacer — keeps the centre column mathematically centred */}
      <div aria-hidden="true" />

      {/* Centred content */}
      <div className="flex items-center justify-center gap-3 text-center whitespace-nowrap">
        <span
          style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-lato)" }}
          className="font-light uppercase"
        >
          Limited phone consultations.
        </span>
        <a
          href="/appointments"
          style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-lato)" }}
          className="font-light uppercase whitespace-nowrap border-b border-cream/30 hover:border-cream hover:text-cream transition-all duration-700"
        >
          Book Now
        </a>
      </div>

      {/* Dismiss — right column */}
      <div className="flex justify-end">
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-cream/30 hover:text-cream/70 transition-colors duration-300 leading-none flex items-center justify-center"
          style={{ fontSize: "16px", width: "24px", height: "24px" }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
