"use client";

import { useState } from "react";
import FeaturesList from "@/components/FeaturesList";

const episodes = [
  { show: "The Glow Up Podcast", episode: "The truth about filler — what no one tells you", duration: "42 min", href: "#" },
  { show: "Skin Deep with Sarah", episode: "Evidence-based aesthetics and why it matters", duration: "35 min", href: "#" },
  { show: "The Beauty Edit", episode: "Natural results: redefining cosmetic medicine", duration: "28 min", href: "#" },
];

export default function MediaTabs() {
  const [tab, setTab] = useState<"listen" | "read">("listen");

  return (
    <section className="bg-parchment py-24 md:py-32" id="features">
      <div className="pg-container">

        {/* Tab buttons */}
        <div className="flex items-center gap-10 md:gap-14 mb-14 md:mb-16">
          {([
            ["listen", "Listen"],
            ["read", "Read"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`text-[10px] font-light tracking-[0.5em] uppercase pb-2 border-b transition-colors duration-300 ${
                tab === key
                  ? "text-brand-black border-brand-black"
                  : "text-neutral-400 border-transparent hover:text-neutral-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Panels */}
        {tab === "listen" ? (
          <div className="flex flex-col divide-y divide-neutral-200">
            {episodes.map(({ show, episode, duration, href }) => (
              <a
                key={show}
                href={href}
                className="group py-8 grid grid-cols-12 gap-4 md:gap-8 items-center hover:bg-black/[0.03] transition-colors duration-300 -mx-4 px-4"
              >
                <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-brand-black transition-colors duration-300">
                    <span className="text-neutral-500 group-hover:text-brand-black transition-colors duration-300" style={{ fontSize: "10px", paddingLeft: "2px" }}>▶</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-brand-black text-sm font-normal" style={{ fontFamily: "'Heading', serif" }}>{show}</p>
                    <p className="text-neutral-500 text-[9px] font-light tracking-[0.3em] uppercase">Podcast</p>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-7">
                  <p className="text-neutral-600 text-base font-light leading-snug group-hover:text-brand-black transition-colors duration-300">
                    {episode}
                  </p>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-4">
                  <span className="text-neutral-500 text-[10px] font-light tracking-[0.2em]">{duration}</span>
                  <span className="text-neutral-400 text-sm group-hover:text-brand-black group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <FeaturesList />
        )}

      </div>
    </section>
  );
}
