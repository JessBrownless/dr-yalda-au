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
  { label: "Appointments", href: "/appointments" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

// Pages where the hero background is light (navbar starts dark)
const LIGHT_HERO_PAGES = ["/about"];

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
        <div className="px-12 h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/dr-yalda-logo-icon.svg"
              alt="Dr. Yalda"
              width={48}
              height={48}
              className={`h-7 w-auto transition-all duration-500 ${dark ? "invert" : ""}`}
            />
          </Link>

          {/* Thin menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[7px] p-2 group"
          >
            <span
              className={`block h-[0.5px] transition-all duration-500 ease-in-out origin-center bg-white ${
                open ? "w-6 rotate-45 translate-y-[7.5px]" : "w-7"
              }`}
            />
            <span
              className={`block h-[0.5px] transition-all duration-300 bg-white ${
                open ? "opacity-0 w-6" : "w-4 group-hover:w-7"
              }`}
            />
            <span
              className={`block h-[0.5px] transition-all duration-500 ease-in-out origin-center bg-white ${
                open ? "w-6 -rotate-45 -translate-y-[7.5px]" : "w-7"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-between px-16 py-24 transition-all duration-700 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 mt-12">
          {links.map(({ label, href }, i) => (
            <li
              key={href}
              className="overflow-hidden"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-white font-semibold leading-none tracking-tight transition-all duration-500 hover:text-zinc-400 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
