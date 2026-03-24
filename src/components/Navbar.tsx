"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

// Pages where the hero background is light (navbar starts dark)
const LIGHT_HERO_PAGES = ["/about", "/media", "/appointments"];

export default function Navbar() {
  const pathname = usePathname();
  const startsLight = LIGHT_HERO_PAGES.includes(pathname);
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(startsLight);

  useEffect(() => {
    setIsLight(startsLight || window.scrollY > window.innerHeight * 0.85);
    const handleScroll = () => {
      setIsLight(startsLight || window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startsLight]);

  // When menu is open, always use white (dark overlay behind)
  const dark = isLight && !open;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="px-10 h-20 flex items-center justify-between relative">

          {/* Left nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-[8px] font-light tracking-[0.35em] uppercase transition-colors duration-300 ${dark ? "text-brand-black hover:text-neutral-500" : "text-white/60 hover:text-white"}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Logo — centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/dr-yalda-logo-long.svg"
              alt="Dr. Yalda Jamali"
              width={200}
              height={40}
              style={{ filter: dark ? "brightness(0)" : "brightness(0) invert(1)" }}
              className="h-6 w-auto transition-all duration-500 p-0.5"
            />
          </Link>

          {/* Right — links + CTA + hamburger */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {[{ label: "Media", href: "/media" }, { label: "Blog", href: "/blog" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-[8px] font-light tracking-[0.35em] uppercase transition-colors duration-300 ${dark ? "text-brand-black hover:text-neutral-500" : "text-white/60 hover:text-white"}`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/appointments"
                className={`px-6 py-2.5 text-[8px] font-light tracking-[0.4em] uppercase border transition-all duration-300 ${
                  dark ? "border-brand-black text-brand-black hover:bg-brand-black hover:text-white" : "border-white/40 text-white/80 hover:border-white hover:text-white"
                }`}
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex flex-col gap-[7px] p-2 group"
            >
              <span className={`block h-[0.5px] transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-white"} ${open ? "w-6 rotate-45 translate-y-[7.5px] !bg-white" : "w-6"}`} />
              <span className={`block h-[0.5px] transition-all duration-300 ${dark ? "bg-brand-black" : "bg-white"} ${open ? "opacity-0 w-6 !bg-white" : "w-4 group-hover:w-6"}`} />
              <span className={`block h-[0.5px] transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-white"} ${open ? "w-6 -rotate-45 -translate-y-[7.5px] !bg-white" : "w-6"}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black flex flex-col justify-between px-10 md:px-16 py-24 transition-all duration-700 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16 mt-12 flex-1">

          {/* Left — primary nav links */}
          <ul className="flex flex-col gap-6">
            {links.map(({ label, href }, i) => (
              <li
                key={href}
                className="overflow-hidden"
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-white font-normal leading-none tracking-tight transition-all duration-500 hover:text-neutral-400 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — clinic locations */}
          <div className="flex flex-col md:w-[420px] md:pt-2">
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.45em] uppercase mb-8">
              Clinic Locations
            </p>
            {[
              { name: "Epios Cosmetic Clinic", address: "18 William St, Paddington, 2021", href: "#" },
              { name: "Northern Sydney Dermatology & Laser", address: "1/29 Baringa Rd, Northbridge, 2063", href: "#" },
              { name: "Austin Clinic", address: "5/67 Wanganella St, Balgowlah, 2093", href: "#" },
            ].map(({ name, address, href: bookHref }, i) => (
              <div key={name}>
                {i > 0 && <div className="w-full h-px bg-neutral-800 my-6" />}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-white font-normal leading-tight"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "0.04em" }}
                    >
                      {name.toUpperCase()}
                    </h3>
                    <p className="text-neutral-500 text-sm font-light flex items-center gap-2">
                      <span className="text-[10px]">📍</span>
                      {address}
                    </p>
                  </div>
                  <a
                    href={bookHref}
                    className="flex-shrink-0 px-5 py-2.5 bg-white text-brand-black text-[9px] font-light tracking-[0.35em] uppercase hover:bg-neutral-200 transition-colors duration-300"
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom — socials */}
        <div className="flex items-center gap-6 pt-10">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
