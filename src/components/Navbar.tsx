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
  { label: "Dev", href: "/unused-components" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="relative z-[60] transition-all duration-500"
        style={scrolled && !open ? { background: "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0) 100%)" } : {}}
      >
        <div className="h-20 md:h-18 py-5 md:py-4 flex items-center justify-between relative" style={{ paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)", paddingRight: "clamp(1.5rem, 4vw, 2.5rem)" }}>

          {/* Left nav links */}
          <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-[12px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                  pathname === href ? "text-brand-black" : "text-brand-black hover:text-neutral-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Logo — centered */}
          <Link href="/" className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}>
            <Image
              src="/assets/dr-yalda-logo-icon.svg"
              alt="Dr. Yalda Jamali"
              width={20}
              height={20}
              className="w-auto transition-all duration-500"
              style={{ height: "20px", filter: "brightness(0)" }}
            />
          </Link>

          {/* Right — links + hamburger */}
          <div className="flex items-center gap-8 ml-auto md:ml-0">
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {[{ label: "Media", href: "/media" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-[11px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                    pathname === href ? "text-brand-black" : "text-brand-black hover:text-neutral-400"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/appointments"
                className={`text-[11px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                  pathname === "/appointments" ? "text-brand-black" : "text-brand-black hover:text-neutral-400"
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
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center bg-brand-black ${open ? "w-6 rotate-45 translate-y-[7.5px] !bg-white" : "w-6"}`} />
              <span className={`block h-px transition-all duration-300 bg-brand-black ${open ? "opacity-0 w-6 !bg-white" : "w-4 group-hover:w-6"}`} />
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center bg-brand-black ${open ? "w-6 -rotate-45 -translate-y-[7.5px] !bg-white" : "w-6"}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-[50] flex ${open ? "pointer-events-auto" : "pointer-events-none"}`}>

        {/* Left — image panel, reveals from bottom */}
        <div
          className="w-[32%] relative overflow-hidden transition-all duration-700 ease-in-out"
          style={{ clipPath: open ? "inset(0 0 0 0)" : "inset(100% 0 0 0)" }}
        >
          <Image
            src="/assets/IMG_0017.avif"
            alt=""
            fill
            className="object-cover md:object-center"
            style={{ objectPosition: "calc(50% + 48px) center" }}
          />
        </div>

        {/* Right — nav panel, slides in from top */}
        <div
          className="flex-1 bg-brand-black flex flex-col transition-all duration-700 ease-in-out"
          style={{ clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)", padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >

          {/* Nav links */}
          <div className="flex flex-col justify-center flex-1 mt-6">
            {[...links, { label: "Book Now", href: "/appointments" }].map(({ label, href }, i) => (
              <div key={href}>
                {i > 0 && <div className="w-full h-px bg-white/20" />}
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-5 text-white text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:text-neutral-400 ${
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                  }`}
                  style={{ transitionDelay: open ? `${i * 60 + 200}ms` : "0ms", fontFamily: "'Heading', serif" }}
                >
                  {label}
                </Link>
              </div>
            ))}
            <div className="w-full h-px bg-white/20" />
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 mt-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
