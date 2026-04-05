"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] text-white/80 flex items-center justify-center gap-2 px-6 py-2.5 text-center" style={{ backgroundColor: "#141312" }}>
      <span style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-lato)" }} className="font-light uppercase">
        Limited phone consultations.
      </span>
      <a
        href="/appointments"
        style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-lato)", position: "relative", top: "0px" }}
        className="font-light uppercase whitespace-nowrap border-b border-white/30 hover:border-white hover:text-white transition-all duration-700"
      >
        Book Now
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-4 text-white/30 hover:text-white/70 transition-colors duration-300 p-3"
        style={{ fontSize: "14px", lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  );
}
