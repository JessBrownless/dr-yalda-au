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
  const [overDark, setOverDark] = useState(true);
  const [overStickyScroll, setOverStickyScroll] = useState(false);
  const [overParallaxQuote, setOverParallaxQuote] = useState(false);
  const [announcementOffset, setAnnouncementOffset] = useState(32);

  useEffect(() => {
    if (!open) return;
    const bar = document.getElementById("announcement-bar");
    setAnnouncementOffset(bar ? bar.offsetHeight : 0);
  }, [open]);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      delete document.body.dataset.scrollY;
      if (scrollY) window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) {
      setOverDark(false);
      return;
    }
    setOverDark(true);
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

  // Text/elements flip based on the section behind the nav.
  const overDarkSection = overDark || overStickyScroll || overParallaxQuote;
  const dark = !open && !overDarkSection;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`${open ? "fixed inset-x-0 z-[80]" : "sticky top-0 z-[60]"}`}
        style={open ? { top: `${announcementOffset}px` } : undefined}
      >
        <div className="relative">
          <div
            className="grid grid-cols-3 items-center relative px-4 md:px-16"
            style={{ height: "80px" }}
          >

          {/* Left column — desktop nav links / mobile hamburger */}
          <div className="flex items-center justify-start gap-8">
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex md:hidden flex-col gap-[7px] p-2 group"
            >
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-cream"} ${open ? "w-6 rotate-45 translate-y-[7.5px] !bg-cream" : "w-6"}`} />
              <span className={`block h-px transition-all duration-300 ${dark ? "bg-brand-black" : "bg-cream"} ${open ? "opacity-0 w-6 !bg-cream" : "w-4 group-hover:w-6"}`} />
              <span className={`block h-px transition-all duration-500 ease-in-out origin-center ${dark ? "bg-brand-black" : "bg-cream"} ${open ? "w-6 -rotate-45 -translate-y-[7.5px] !bg-cream" : "w-6"}`} />
            </button>
            {/* Desktop links */}
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link transition-colors duration-300 ${
                    pathname === href
                      ? dark ? "font-medium text-brand-black" : "font-medium text-cream"
                      : dark ? "text-brand-black hover:text-brand-black" : "text-cream/50 hover:text-cream"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center column — logo */}
          <Link href="/" className={`flex justify-center transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}>
            <Image
              src="/assets/dr-yalda-logo-icon.svg"
              alt="Dr. Yalda Jamali"
              width={20}
              height={20}
              className="w-auto transition-all duration-500"
              style={{ height: "20px", filter: dark ? "brightness(0)" : "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Right column — desktop links / mobile Book Now text link */}
          <div className="flex items-center gap-8 justify-end">
            {/* Mobile Book Now plain text link */}
            <Link
              href="/appointments"
              className={`nav-link md:hidden font-medium transition-opacity duration-300 ${
                open ? "opacity-0 pointer-events-none" : "opacity-100"
              } ${
                pathname === "/appointments"
                  ? dark ? "text-brand-black" : "text-cream"
                  : dark ? "text-brand-black hover:text-brand-black" : "text-cream/50 hover:text-cream"
              }`}
            >
              Book Now
            </Link>
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {[{ label: "Media", href: "/media" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link transition-colors duration-300 ${
                    pathname === href
                      ? dark ? "text-brand-black" : "text-cream"
                      : dark ? "text-brand-black hover:text-brand-black" : "text-cream/50 hover:text-cream"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/appointments"
                className={`btn btn-sm ${
                  pathname === "/appointments"
                    ? dark ? "btn-primary-light" : "btn-primary-dark"
                    : dark ? "btn-tertiary-light" : "btn-tertiary-dark"
                }`}
              >
                Book Now
              </Link>
            </div>
          </div>

          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-[70] flex flex-row-reverse ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        {/* Left — image panel */}
        <div className="w-2/5 relative overflow-hidden">
          <Image
            src="/assets/IMG_0017.avif"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right — nav panel */}
        <div className="flex-1 bg-brand-black flex flex-col relative px-6 py-12 md:p-12 lg:p-16 xl:p-20">

          {/* Nav links */}
          <div className="flex flex-col justify-center flex-1 mt-6">
            {[...links, { label: "Book Now", href: "/appointments" }].map(({ label, href }, i) => (
              <div key={href}>
                {i > 0 && <div className="w-full h-px bg-cream/20" />}
                <Link
                  href={href}
                  onClick={() => {
                    // Clear stored scroll so close handler restores to top, not to where we were
                    document.body.dataset.scrollY = "0";
                    setOpen(false);
                  }}
                  className="nav-link-drawer block py-5 text-cream transition-colors duration-300 hover:text-brand-white/50"
                >
                  {label}
                </Link>
              </div>
            ))}
            <div className="w-full h-px bg-cream/20" />
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-9 h-9 border border-brand-white/20 flex items-center justify-center hover:border-brand-white/40 transition-colors duration-300"
              >
                <Icon size={13} className="text-brand-white/40 group-hover:text-cream transition-colors duration-300" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
