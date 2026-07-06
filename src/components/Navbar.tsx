"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  { icon: FaInstagram, href: "https://www.instagram.com/dr.yalda/", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@dr.yalda", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/yaldajamali/", label: "LinkedIn" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [overSticky, setOverSticky] = useState(false);
  const [overQuote, setOverQuote] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [frozenTop, setFrozenTop] = useState(0);

  useEffect(() => {
    // Lock scrolling with Lenis itself. A stopped Lenis holds the page exactly
    // where it is and blocks native scrolling, so there's no position:fixed
    // dance and nothing to restore on close — which is what made the page
    // smooth-scroll back into place (the "re-scroll"). overflow:hidden on the
    // root is a static fallback for the (pre-hydration) case Lenis isn't live.
    if (open) {
      window.__lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Measured directly on scroll, NOT an IntersectionObserver: the #hero-end
  // sentinel is a zero-height element that some heroes (About) position at the
  // clipped bottom edge of an overflow-hidden layer, where IO never reports it
  // as intersecting — the observer fired once on mount and went silent, so the
  // nav stayed transparent forever. Scroll events are frame-aligned already, so
  // there's no rAF deferral; setOverDark with an unchanged value is a no-op.
  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) {
      setOverDark(false);
      return;
    }
    const measure = () => {
      // Over the hero while its end is still below the nav bar's midline
      setOverDark(sentinel.getBoundingClientRect().top > 40);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [pathname]);

  // Go transparent again over the sticky-scroll billboard panels. Unlike the
  // old per-section observers (which fired on viewport entry), this measures
  // whether the section actually covers the nav bar's midline.
  useEffect(() => {
    const el = document.getElementById("sticky-scroll");
    if (!el) {
      setOverSticky(false);
      return;
    }
    let raf = 0;
    const measure = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      setOverSticky(r.top <= 40 && r.bottom >= 40);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Go transparent again over the full-bleed parallax quote ("Every face is
  // different"). Same midline test as the sticky billboard: the #parallax-quote
  // section carries the id, but nothing observed it after the nav refactor, so
  // the bar stayed filled over it.
  useEffect(() => {
    const el = document.getElementById("parallax-quote");
    if (!el) {
      setOverQuote(false);
      return;
    }
    let raf = 0;
    const measure = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      setOverQuote(r.top <= 40 && r.bottom >= 40);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Transparent with cream text over the hero, the sticky billboard, and the
  // parallax quote; solid parchment with dark text everywhere else. Other dark
  // sections scroll beneath the filled bar.
  const dark = !open && !overDark && !overSticky && !overQuote;

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`${open ? "fixed inset-x-0 z-[80]" : "sticky top-0 z-[60]"}`}
        style={open ? { top: `${frozenTop}px` } : undefined}
      >
        <div className={`relative ${open ? "" : "transition-colors duration-500"} ${dark ? "bg-parchment border-b border-brand-line" : "bg-transparent"}`}>
          <div
            className="grid grid-cols-3 items-center relative px-4 md:px-16"
            style={{ height: "80px" }}
          >

          {/* Left column — desktop nav links / mobile hamburger */}
          <div className="flex items-center justify-start gap-8">
            {/* Mobile hamburger */}
            <button
              onClick={() => {
                // Freeze the bar at its current on-screen position before it
                // switches to `fixed`, so opening never shifts the hamburger/X
                // up or down (the old code forced it to the announcement-bar
                // height, which jumped it down 44px whenever you'd scrolled).
                if (!open && navRef.current) {
                  setFrozenTop(Math.max(0, navRef.current.getBoundingClientRect().top));
                }
                setOpen(!open);
              }}
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

          {/* Center column — logo. Inlined (not <Image>) so the droplet path can
              fade in after the hero resolves; the Y renders immediately. */}
          <Link href="/" className={`flex justify-center transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}>
            <svg
              viewBox="0 0 34 28"
              role="img"
              aria-label="Dr. Yalda Jamali"
              fill="none"
              className={`w-auto transition-colors duration-500 ${dark ? "text-brand-black" : "text-brand-white"}`}
              style={{ height: "20px" }}
            >
              <path d="M9.47656 0H14.3832L23.1166 15.1067L31.8499 0H33.2832L23.6699 16.6267V27.5533H20.2032V16.6267C15.3632 8.2 12.6432 3.47333 12.0299 2.43333C11.2899 1.13333 10.4366 0.32 9.47656 0Z" fill="currentColor" />
              <path className="logo-droplet" d="M10.7575 18.7667C10.9375 22.6467 8.07088 24.1601 5.39755 24.1667C4.91088 24.1667 4.41755 24.1201 3.93755 24.0134C3.66421 23.9534 3.39755 23.8801 3.13755 23.7867C2.27755 23.4734 1.49755 22.9667 0.93088 22.2201C0.297547 21.3867 -0.0691209 20.2601 0.0108791 18.7934C0.110879 17.0067 1.65755 14.6334 2.83755 12.5001C4.26421 9.92675 5.36421 7.72008 5.36421 7.64675C5.36421 7.60008 6.27755 9.74008 7.71088 12.3067C8.91755 14.4734 10.6709 16.9401 10.7575 18.7667Z" fill="currentColor" />
            </svg>
          </Link>

          {/* Right column — desktop links / mobile Book Now text link */}
          <div className="flex items-center gap-8 justify-end">
            {/* Mobile nav CTA — same .btn treatment as desktop, but the one-word
                label: "Book Now" at pill padding spanned nearly half a phone screen.
                Always the outline variant — no filled "active" state on /appointments. */}
            <Link
              href="/appointments"
              className={`btn btn-sm md:hidden transition-opacity duration-300 ${
                open ? "opacity-0 pointer-events-none" : "opacity-100"
              } ${dark ? "btn-tertiary-light" : "btn-tertiary-dark"}`}
            >
              Book
            </Link>
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {[{ label: "Media", href: "/media" }, { label: "Blog", href: "/blog" }].map(({ label, href }) => (
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
              {/* Always the outline variant — no filled "active" state on /appointments */}
              <Link
                href="/appointments"
                className={`btn btn-sm ${dark ? "btn-tertiary-light" : "btn-tertiary-dark"}`}
              >
                Book Now
              </Link>
            </div>
          </div>

          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`fixed inset-0 z-[70] flex flex-row-reverse transition-opacity duration-300 ease-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        {/* Left — image panel. Opens dark, then the image resolves with a
            gentle reveal just behind the overlay fade (fades back out on close
            so it replays). */}
        <div className="w-2/5 relative overflow-hidden bg-brand-black">
          <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${open ? "opacity-100 delay-100" : "opacity-0 delay-0"}`}>
            <Image
              src="/assets/IMG_0017.avif"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
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
                    // Land the next page at the top, not wherever the menu was
                    // opened from.
                    setOpen(false);
                    window.__lenis?.scrollTo(0, { immediate: true });
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
