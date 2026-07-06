"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="relative z-[60] grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-1.5 text-cream/80"
      style={{ backgroundColor: "#2D2C2A", minHeight: "var(--announcement-height)" }}
    >
      {/* Left spacer — keeps the centre column mathematically centred */}
      <div aria-hidden="true" />

      {/* Centred content — wraps on very narrow screens instead of forcing overflow */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-center pt-[4px]">
        <span className="body-xs-caps">
          Limited phone consultations.
        </span>
        <a
          href="/appointments"
          className="body-xs-caps whitespace-nowrap border-b border-cream/30 hover:border-cream hover:text-cream transition-all duration-700"
        >
          Book Now
        </a>
      </div>

      {/* Dismiss — right column */}
      <div className="flex justify-end pt-[4px]">
        <button
          onClick={() => {
            // Reclaim the strip's height so full-viewport heroes grow to fill it.
            document.documentElement.style.setProperty("--announcement-height", "0px");
            setDismissed(true);
          }}
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
