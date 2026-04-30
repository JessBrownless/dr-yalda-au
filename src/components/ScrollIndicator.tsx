"use client";

export default function ScrollIndicator() {
  return (
    <button
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer"
      style={{ zIndex: 5, animationDelay: "1.5s", animationDuration: "1s", background: "none", border: "none", padding: 0 }}
      aria-label="Scroll down"
    >
      <img src="/assets/key-visual-blush.svg" alt="" aria-hidden="true" style={{ width: "28px", height: "auto", opacity: 0.5 }} />
      <span style={{ fontSize: "8px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)", color: "rgba(244,241,238,0.3)", textTransform: "uppercase", fontWeight: 300 }}>Scroll</span>
    </button>
  );
}
