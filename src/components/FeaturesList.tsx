"use client";

import { useState } from "react";

// Press features. Titles, outlets and years fetched from the live (or archived)
// articles — sorted newest → oldest, then alphabetically by outlet.
const features = [
  // 2025
  {
    outlet: "The Memo",
    title: "Pregnancy and breastfeeding-safe skincare guide",
    year: "2025",
    href: "https://thememo.com.au/blogs/news/pregnancy-and-breastfeeding-skincare",
  },
  // 2024
  {
    outlet: "Elle Australia",
    title: "Here's exactly what vaping does to your skin",
    year: "2024",
    href: "https://www.elle.com.au/beauty/is-vaping-bad-for-your-skin/",
  },
  {
    outlet: "Mamamia",
    title: "There's a reason why your anti-wrinkle injections look strange, according to a cosmetic doctor",
    year: "2024",
    href: "https://www.mamamia.com.au/why-anti-wrinkle-injections-look-bad/",
  },
  {
    outlet: "Mamamia",
    title: "Apparently the in-flight skincare routine is over",
    year: "2024",
    href: "https://www.mamamia.com.au/in-flight-skincare-routine/",
  },
  {
    outlet: "Mamamia",
    title: "What a cosmetic doctor wants parents to know about the tween skincare craze",
    year: "2024",
    href: "https://www.mamamia.com.au/tween-skincare-routine/amp/",
  },
  {
    outlet: "Mamamia",
    title: "'Period face' is a thing. Here's which products to use when",
    year: "2024",
    href: "https://www.mamamia.com.au/menstrual-cycle-skincare/",
  },
  // 2023
  {
    outlet: "BeautyCrew",
    title: "Expectation vs reality: what it's really like working in beauty",
    year: "2023",
    // Original 404s — BeautyCrew archived it; Wayback snapshot keeps it reachable
    href: "https://web.archive.org/web/20251211205244/https://www.beautycrew.com.au/expectation-vs-reality-working-in-beauty",
  },
  {
    outlet: "Daily Mail",
    title: "Ultra Violette: Australian sunscreen brand reveals the correct amount of sunscreen to apply",
    year: "2023",
    href: "https://www.dailymail.co.uk/femail/real-life/article-11600825/Ultra-Violette-Australian-sunscreen-brand-reveals-correct-sunscreen-apply.html",
  },
  {
    outlet: "Mamamia",
    title: "Bad news: you're now looking after your skin barrier too much",
    year: "2023",
    href: "https://www.mamamia.com.au/over-treating-skin-barrier/",
  },
  {
    outlet: "Mamamia",
    title: "We stopped using solariums years ago. It's time to talk about using UV light on our nails",
    year: "2023",
    href: "https://www.mamamia.com.au/uv-nail-cancer/",
  },
  {
    outlet: "Mamamia",
    title: "I'm a cosmetic doctor. Here are 5 skincare products I buy time and time again",
    year: "2023",
    href: "https://www.mamamia.com.au/skincare-routine-cosmetic-doctor/",
  },
  {
    outlet: "news.com.au",
    title: "$19 BB cream for 'flawless' skin",
    year: "2023",
    href: "https://www.news.com.au/checkout/beauty/makeup/face-makeup/best-bb-cream-for-oily-skin/news-story/34acdeda01d80697c931d8a27cb3ac36",
  },
  {
    outlet: "NZ Herald",
    title: "How to build a teen skincare routine, according to a clinical nutritionist and a cosmetic doctor",
    year: "2023",
    href: "https://www.nzherald.co.nz/viva/beauty/how-to-build-a-teen-skincare-routine-according-to-a-clinical-nutritionist-a-cosmetic-doctor/HMR4ZZ4MUZBT5O5ZRCNTKER4JY/",
  },
  {
    outlet: "Primer",
    title: "Forget fine lines. Pigmentation is the tell-tale ageing sign",
    year: "2023",
    // primer.com.au is down for maintenance — Wayback snapshot until it returns
    href: "https://web.archive.org/web/20250422131827/https://primer.com.au/reduce-pigmentation/",
  },
  {
    outlet: "The Guardian",
    title: "Beauty road test: do Australian makeup brands wear better in challenging climates?",
    year: "2023",
    href: "https://www.theguardian.com/fashion/2023/feb/09/beauty-road-test-do-australian-makeup-brands-wear-better-in-challenging-climates",
  },
  {
    outlet: "The Guardian",
    title: "How to care for skin in Australian winter: use thicker creams, foam-free cleansers and don't skip sunscreen",
    year: "2023",
    href: "https://www.theguardian.com/lifeandstyle/2023/jul/14/how-to-care-for-skin-in-australian-winter-use-thicker-creams-foam-free-cleansers-and-dont-skip-sunscreen",
  },
  // 2022
  {
    outlet: "BeautyCrew",
    title: "This is how injectables could help prep your skin for winter",
    year: "2022",
    // Original 404s — BeautyCrew archived it; Wayback snapshot keeps it reachable
    href: "https://web.archive.org/web/20240908230042/https://www.beautycrew.com.au/injectable-hyaluronic-acid",
  },
  {
    outlet: "Daily Mail",
    title: "Cosmetic doctor Dr Yalda Jamali shares the skincare mistakes we're all making",
    year: "2022",
    href: "https://www.dailymail.co.uk/femail/beauty/article-11475263/Cosmetic-doctor-Dr-Yalda-Jamali-shares-skincare-mistakes-making.html",
  },
  {
    outlet: "Daily Mail",
    title: "Should you wear sunscreen while flying? UV rays are higher on planes, so ditch the window seat",
    year: "2022",
    href: "https://www.dailymail.co.uk/femail/travel/article-11334323/Should-wear-sunscreen-flying-Dr-Yalda-UV-rays-higher-planes-ditch-window-seat.html",
  },
  // 2021
  {
    outlet: "Daily Mail",
    title: "After Mila Kunis and Dax Shepherd confessed they're lax with washing habits, experts warn of the risks",
    year: "2021",
    href: "https://www.dailymail.co.uk/femail/article-9876555/After-Mila-Kunis-Dax-Shepherd-confessed-lax-washing-habits-experts-warn-risks.html",
  },
  {
    outlet: "Primer",
    title: "Do eye creams really work?",
    year: "2021",
    // primer.com.au is down for maintenance — Wayback snapshot until it returns
    href: "https://web.archive.org/web/20250522104204/https://primer.com.au/do-eye-creams-work/",
  },
];

export default function FeaturesList() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? features : features.slice(0, 4);

  return (
    <>
      <div className="flex flex-col divide-y divide-brand-black/10">
        {visible.map(({ outlet, title, year, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-8 grid grid-cols-12 gap-4 md:gap-8 items-center hover:bg-brand-black/[0.03] transition-colors duration-300 -mx-4 px-4"
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
              <span className="text-brand-black/50 text-sm group-hover:text-brand-black group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn btn-sm btn-secondary-light"
        >
          {expanded ? "See Less" : "See All"}
        </button>
      </div>
    </>
  );
}
