"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] text-white/80 flex items-center justify-center gap-2 px-6 py-2.5 text-center" style={{ backgroundColor: "#141312" }}>
      <p style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-hanken)" }} className="font-light uppercase">
        Limited phone consultations.
      </p>
      <a
        href="/appointments"
        style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-hanken)", paddingBottom: "2px", marginBottom: "-2px", paddingLeft: "2px", paddingRight: "2px" }}
        className="font-light uppercase whitespace-nowrap inline-flex items-center gap-0.5 border-b border-white/30 hover:border-white hover:text-white transition-all duration-700"
      >
        Book Now
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="0.4"/>
          <polyline points="9,1 13,4 9,7" fill="none" stroke="currentColor" strokeWidth="0.4" strokeLinejoin="round"/>
        </svg>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-4 text-white/30 hover:text-white/70 transition-colors duration-300"
        style={{ fontSize: "14px", lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  );
}
