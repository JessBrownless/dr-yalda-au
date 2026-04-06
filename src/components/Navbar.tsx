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
  const [overDark, setOverDark] = useState(true);
  const [overStickyScroll, setOverStickyScroll] = useState(false);
  const [overParallaxQuote, setOverParallaxQuote] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!darkHeroPages.includes(pathname)) return;
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverDark(entry.isIntersecting || entry.boundingClientRect.top > 0);
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const el = document.getElementById("sticky-scroll");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverStickyScroll(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const el = document.getElementById("parallax-quote");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverParallaxQuote(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  // White text on dark-hero pages (home + media); dark text on all other pages
  const darkHeroPages = ["/", "/media", "/appointments"];
  const dark = !open && !overStickyScroll && !overParallaxQuote && (darkHeroPages.includes(pathname) ? !overDark : true);

  const isAbout = pathname === "/about";

  return (
    <>
      <nav
        className="relative z-[60] transition-colors duration-500"
        style={
          isAbout
            ? { backgroundColor: navHovered ? "transparent" : "#EEEDE7" }
            : !open && !scrolled && pathname === "/media"
            ? { backgroundColor: "#121110" }
            : {}
        }
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
      >
        {/* Progressive blur — stacked layers, each blurring a slice */}
        {scrolled && dark && !open && (
          <>
            {[
              { blur: 12, start: 0,   end: 40  },
              { blur: 8,  start: 20,  end: 60  },
              { blur: 5,  start: 40,  end: 80  },
              { blur: 2,  start: 60,  end: 100 },
            ].map(({ blur, start, end }) => (
              <div
                key={blur}
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: `blur(${blur}px)`,
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  maskImage: `linear-gradient(to bottom, transparent ${start}%, black ${Math.min(start + 15, end - 15)}%, black ${Math.max(end - 15, start + 15)}%, transparent ${end}%)`,
                  WebkitMaskImage: `linear-gradient(to bottom, transparent ${start}%, black ${Math.min(start + 15, end - 15)}%, black ${Math.max(end - 15, start + 15)}%, transparent ${end}%)`,
                }}
              />
            ))}
          </>
        )}

        <div className="h-20 md:h-18 py-5 md:py-4 flex items-center justify-between relative" style={{ paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)", paddingRight: "clamp(1.5rem, 4vw, 2.5rem)" }}>

          {/* Left nav links */}
          <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-[12px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                  pathname === href
                    ? dark ? "text-brand-black" : "text-white"
                    : dark ? "text-brand-black hover:text-neutral-400" : "text-white/30 hover:text-white"
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
              style={{ height: "20px", filter: dark ? "brightness(0)" : "brightness(0) invert(1)" }}
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
                    pathname === href
                      ? dark ? "text-brand-black" : "text-white"
                      : dark ? "text-brand-black hover:text-neutral-400" : "text-white/30 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/appointments"
                className={`text-[11px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                  pathname === "/appointments"
                    ? dark ? "text-brand-black" : "text-white"
                    : dark ? "text-brand-black hover:text-neutral-400" : "text-white/30 hover:text-white"
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
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-white"} ${open ? "w-6 rotate-45 translate-y-[7.5px] !bg-white" : "w-6"}`} />
              <span className={`block h-px transition-all duration-300 ${dark ? "bg-brand-black" : "bg-white"} ${open ? "opacity-0 w-6 !bg-white" : "w-4 group-hover:w-6"}`} />
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-white"} ${open ? "w-6 -rotate-45 -translate-y-[7.5px] !bg-white" : "w-6"}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-[45] flex transition-opacity duration-400 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        {/* Left — image panel */}
        <div className="w-[32%] relative overflow-hidden">
          <Image
            src="/assets/IMG_0017.avif"
            alt=""
            fill
            className="object-cover md:object-center"
            style={{ objectPosition: "calc(50% + 30px) center" }}
          />
        </div>

        {/* Right — nav panel */}
        <div
          className="flex-1 bg-brand-black flex flex-col"
          style={{ padding: "clamp(3rem, 6vw, 5rem)" }}
        >

          {/* Nav links */}
          <div className="flex flex-col justify-center flex-1 mt-6">
            {[...links, { label: "Book Now", href: "/appointments" }].map(({ label, href }, i) => (
              <div key={href}>
                {i > 0 && <div className="w-full h-px bg-white/20" />}
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-white text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-neutral-400"
                  style={{ fontFamily: "'Heading', serif" }}
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
