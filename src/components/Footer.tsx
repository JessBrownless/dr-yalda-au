"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";


const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Book now", href: "/appointments" },
];

const clinics = [
  { name: "Epios Cosmetic Clinic", address: "18 William St, Paddington" },
  { name: "Austin Clinic", address: "5/67 Wanganella St, Balgowlah" },
];

const socials = [
  { icon: FaInstagram,  platform: "Instagram", handle: "@dr.yalda",  href: "https://www.instagram.com/dr.yalda/" },
  { icon: FaTiktok,     platform: "TikTok",    handle: "@dr.yalda",  href: "https://www.tiktok.com/@dr.yalda" },
  { icon: FaLinkedinIn, platform: "LinkedIn",  handle: "Dr. Yalda Jamali", href: "https://www.linkedin.com/in/yaldajamali/" },
];

export default function Footer() {
  // The site is statically generated, so a year computed at build time would
  // freeze until the next deploy. Seed with the build year (keeps SSR/first
  // client render identical), then correct to the viewer's actual current year
  // on mount — so it rolls over on New Year even without a rebuild.
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="bg-brand-charcoal">

      {/* Main footer body */}
      <div>
        {/* Logo — full bleed, mobile only */}
        {/* Mobile rhythm: generous air at the top, logo tight to its socials,
            then a moderate step down to the link columns */}
        <div className="md:hidden pt-16 pb-2 pg-container flex flex-col gap-4">
          {/* -29px cancels the whitespace baked into the SVG (content starts 233.8/1790.8
              across the canvas -> 29px at 220px wide), so the mark sits optically flush left */}
          <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={48} className="h-auto" style={{ width: "220px", opacity: 0.9, marginLeft: "-29px" }} />
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, platform, href }) => (
              <a key={platform} href={href} target="_blank" rel="noopener noreferrer" aria-label={platform}
                className="group w-9 h-9 border border-brand-white/20 flex items-center justify-center hover:border-brand-white/40 transition-colors duration-300">
                <Icon size={13} className="text-brand-white/40 group-hover:text-cream transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="pg-container pt-12 pb-20 md:pt-40 md:pb-32">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">

            {/* Logo — desktop first column */}
            <div className="hidden md:flex md:col-span-4 flex-col justify-start items-start gap-10">
              {/* -27px cancels the whitespace baked into the SVG (content starts 233.8/622.5
                  down-scaled to 72px tall -> 27px), so the mark sits optically flush left */}
              <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={72} className="w-auto" style={{ height: "72px", opacity: 0.9, marginLeft: "-27px" }} />
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, platform, href }) => (
                  <a key={platform} href={href} target="_blank" rel="noopener noreferrer" aria-label={platform}
                    className="group w-9 h-9 border border-brand-white/20 flex items-center justify-center hover:border-brand-white/40 transition-colors duration-300">
                    <Icon size={13} className="text-brand-white/40 group-hover:text-cream transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className="col-span-1 md:col-span-2 md:col-start-6 flex flex-col gap-4">
              <p className="overline mb-1">Navigate</p>
              {links.map(({ label, href }) => (
                <Link key={href} href={href} className="text-brand-white text-sm font-light hover:opacity-70 transition-opacity duration-300">{label}</Link>
              ))}
            </div>

            {/* Clinics */}
            <div className="col-span-1 md:col-span-3 md:col-start-8 flex flex-col gap-5 md:border-l border-brand-white/10 md:pl-8">
              <p className="overline mb-1">Clinic Locations</p>
              {clinics.map(({ name, address }) => {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}, NSW, Australia`)}`;
                return (
                <div key={name} className="flex flex-col gap-1">
                  {/* Footer type is a strict 3-tier scheme: overline titles,
                      14px light white primary lines, 10px caps details — clinic
                      names wear the same voice as the Navigate links */}
                  <div className="flex items-center gap-2">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-brand-white/40">
                      <path d="M4 0C1.791 0 0 1.791 0 4C0 7 4 12 4 12C4 12 8 7 8 4C8 1.791 6.209 0 4 0Z" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                      <circle cx="4" cy="4" r="1.25" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                    </svg>
                    <p className="text-brand-white text-sm font-light">{name}</p>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${name}, ${address} in Google Maps`}
                    className="body-xs-caps link-caps text-brand-white"
                    style={{ paddingLeft: "17px" }}
                  >
                    {address}
                  </a>
                </div>
                );
              })}
            </div>

            {/* AHPRA registration — its own column, same pattern as the others */}
            <div className="col-span-1 md:col-span-2 md:col-start-11 flex flex-col gap-5 md:border-l border-brand-white/10 md:pl-8">
              <p className="overline mb-1">AHPRA</p>
              <p className="body-xs-caps text-brand-white">Reg. MED0002486778</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar — faint */}
      <div>
        {/* Legal line — full 10px caps for legibility; wraps to two centred
            lines on mobile rather than shrinking below the type system */}
        <div className="pg-container pb-8 md:pb-16 flex items-center justify-center md:justify-between gap-2">
          {/* Designer credit — only the company name is the link */}
          <p className="body-xs-caps text-center md:text-left">
            Made by{" "}
            <a
              href="https://northandrefine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-caps text-brand-white"
            >
              North &amp; Refine
            </a>
            <span className="md:hidden"> · Dr. Yalda Jamali · © <span suppressHydrationWarning>{year}</span> All rights reserved</span>
          </p>
          <p className="body-xs-caps hidden md:block">
            Dr. Yalda Jamali · © <span suppressHydrationWarning>{year}</span> All rights reserved
          </p>
        </div>
      </div>

    </footer>
  );
}
