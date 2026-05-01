"use client";

import { useState } from "react";

const features = [
  {
    outlet: "Vogue Australia",
    title: "The doctor redefining natural beauty in Sydney",
    year: "2024",
    href: "#",
  },
  {
    outlet: "Body + Soul",
    title: "Why less is always more in cosmetic medicine",
    year: "2024",
    href: "#",
  },
  {
    outlet: "The Sydney Morning Herald",
    title: "What to know before your first cosmetic appointment",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Gritty Pretty",
    title: "Honest answers to your biggest filler questions",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Marie Claire",
    title: "The future of ethical aesthetics",
    year: "2023",
    href: "#",
  },
  {
    outlet: "Clinique",
    title: "Science-backed skincare with Dr. Yalda Jamali",
    year: "2024",
    href: "#",
  },
];

export default function FeaturesList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? features : features.slice(0, 4);

  return (
    <>
      <div className="flex flex-col divide-y divide-neutral-200">
        {visible.map(({ outlet, title, year, href }) => (
          <a
            key={title}
            href={href}
            className="group py-8 grid grid-cols-12 gap-4 md:gap-8 items-center hover:bg-black/[0.03] transition-colors duration-300 -mx-4 px-4"
          >
            <div className="col-span-12 md:col-span-3">
              <h3 className="heading-md">
                {outlet}
              </h3>
            </div>
            <div className="col-span-10 md:col-span-7">
              <p className="body-sans">
                {title}
              </p>
            </div>
            <div className="col-span-2 flex items-center justify-end gap-4">
              <span className="overline">
                {year}
              </span>
              <span className="text-neutral-400 text-sm group-hover:text-brand-black group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-full px-10 py-3 border border-neutral-300 text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase hover:border-brand-black hover:text-brand-black transition-colors duration-300"
        >
          {expanded ? "See Less" : "See All"}
        </button>
      </div>
    </>
  );
}
