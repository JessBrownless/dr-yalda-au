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
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Glassy pill once the user starts scrolling — desktop only, never on mobile.
  // Menu open keeps the nav transparent so the dark overlay reads cleanly.
  const solid = scrolled && !open && isDesktop;
  // Text/elements flip based on the section behind the nav.
  const overDarkSection = overDark || overStickyScroll || overParallaxQuote;
  const dark = !open && !overDarkSection;

  return (
    <>
      <nav className="sticky top-0 z-[60]">
        {/* Outer wrapper — adds gutter around the pill when scrolled */}
        <div
          className="transition-all duration-[800ms] ease-out"
          style={{
            paddingTop: solid ? "16px" : "0px",
            paddingLeft: solid ? "16px" : "0px",
            paddingRight: solid ? "16px" : "0px",
          }}
        >
          {/* Inner container — shrinks into pg-container width and gains the blur pill on scroll */}
          <div
            className="mx-auto relative transition-all duration-[800ms] ease-out"
            style={{
              maxWidth: solid ? "800px" : "100vw",
            }}
          >
            {/* Dedicated glass layer — backdrop-filter renders more reliably on its own element */}
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-all duration-[800ms] ease-out pointer-events-none"
              style={{
                borderRadius: solid ? "9999px" : "0px",
                backgroundColor: solid
                  ? overDarkSection
                    ? "rgba(246,246,243,0.10)"   // over dark — keep the subtle glass look
                    : "rgba(246,246,243,0.50)"   // over light — semi-translucent white
                  : "rgba(246,246,243,0)",
                backdropFilter: solid ? "blur(28px) saturate(180%)" : "blur(0px)",
                WebkitBackdropFilter: solid ? "blur(28px) saturate(180%)" : "blur(0px)",
              }}
            />
            <div
              className="grid grid-cols-3 items-center relative transition-all duration-[800ms] ease-out"
              style={{
                height: solid ? "60px" : "80px",
                paddingLeft: solid ? "40px" : "clamp(1.5rem, 4vw, 2.5rem)",
                paddingRight: solid ? "40px" : "clamp(1.5rem, 4vw, 2.5rem)",
              }}
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
                  className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                    pathname === href
                      ? dark ? "font-medium text-brand-black" : "font-medium text-cream"
                      : dark ? "font-extralight text-brand-black/40 hover:text-brand-black" : "font-extralight text-cream/50 hover:text-cream"
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
              className={`md:hidden text-[11px] tracking-[0.25em] uppercase font-medium font-hanken transition-colors duration-300 ${
                pathname === "/appointments"
                  ? dark ? "text-brand-black" : "text-cream"
                  : dark ? "text-brand-black/50 hover:text-brand-black" : "text-cream/50 hover:text-cream"
              }`}
            >
              Book Now
            </Link>
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {[{ label: "Media", href: "/media" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-[11px] font-extralight tracking-[0.25em] uppercase transition-colors duration-300 font-hanken ${
                    pathname === href
                      ? dark ? "text-brand-black" : "text-cream"
                      : dark ? "text-brand-black/50 hover:text-brand-black" : "text-cream/50 hover:text-cream"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/appointments"
                className={`text-[11px] tracking-[0.25em] uppercase font-medium font-hanken rounded-full px-5 py-2 border transition-all duration-300 ${
                  pathname === "/appointments"
                    ? dark ? "bg-brand-black text-cream border-brand-black" : "bg-cream text-brand-black border-cream"
                    : dark ? "border-brand-black/40 text-brand-black/40 hover:border-brand-black hover:bg-brand-black hover:text-cream" : "border-cream/50 text-cream/50 hover:border-cream hover:bg-cream hover:text-brand-black"
                }`}
              >
                Book Now
              </Link>
            </div>
          </div>

            </div>
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
          className="flex-1 bg-brand-black flex flex-col relative"
          style={{ padding: "clamp(3rem, 6vw, 5rem)" }}
        >

          {/* Nav links */}
          <div className="flex flex-col justify-center flex-1 mt-6">
            {[...links, { label: "Book Now", href: "/appointments" }].map(({ label, href }, i) => (
              <div key={href}>
                {i > 0 && <div className="w-full h-px bg-cream/20" />}
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-cream text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-neutral-400"
                  style={{ fontFamily: "'Heading', serif" }}
                >
                  {label}
                </Link>
              </div>
            ))}
            <div className="w-full h-px bg-cream/20" />
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
                className="text-neutral-400 hover:text-cream transition-colors duration-300"
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
