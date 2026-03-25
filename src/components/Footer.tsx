import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Appointments", href: "/appointments" },
];

const clinics = [
  { name: "Epios Cosmetic Clinic", address: "18 William St, Paddington" },
  { name: "Northern Sydney Dermatology & Laser", address: "1/29 Baringa Rd, Northbridge" },
  { name: "Austin Clinic", address: "5/67 Wanganella St, Balgowlah" },
];

const socials = [
  { icon: FaInstagram, platform: "Instagram", handle: "@dryaldajamali", href: "https://instagram.com/dryaldajamali" },
  { icon: FaTiktok,    platform: "TikTok",    handle: "@dryaldajamali", href: "https://tiktok.com/@dryaldajamali" },
  { icon: FaLinkedinIn, platform: "LinkedIn", handle: "Dr. Yalda Jamali", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#232121" }}>

      {/* Social strip */}
      <div className="border-b border-neutral-800">
        <div className="pg-container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            {socials.map(({ icon: Icon, platform, handle, href }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-6 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:border-neutral-500 transition-colors duration-300">
                  <Icon size={14} className="text-neutral-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-white font-normal leading-none"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", letterSpacing: "0.04em" }}
                  >
                    {platform.toUpperCase()}
                  </p>
                  <p className="text-neutral-600 text-[10px] font-light tracking-[0.2em]">
                    {handle}
                  </p>
                </div>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto text-neutral-700 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all duration-300">
                  <path d="M9.5 1L13 5M13 5L9.5 9M13 5H1" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="pg-container py-20 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Logo + tagline */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <Image
              src="/assets/dr-yalda-logo-long.svg"
              alt="Dr. Yalda Jamali"
              width={180}
              height={36}
              className="h-5 w-auto"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
            />
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[28ch]">
              Cosmetic medicine grounded in science, honesty, and artistry. Consulting across Sydney.
            </p>
          </div>

          {/* Nav links */}
          <div className="col-span-6 md:col-span-2 md:col-start-6 flex flex-col gap-4">
            <p className="text-neutral-600 text-[9px] font-light tracking-[0.45em] uppercase mb-2">
              Navigate
            </p>
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-neutral-400 text-sm font-light hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Clinics */}
          <div className="col-span-6 md:col-span-4 md:col-start-9 flex flex-col gap-6">
            <p className="text-neutral-600 text-[9px] font-light tracking-[0.45em] uppercase mb-2">
              Clinic Locations
            </p>
            {clinics.map(({ name, address }) => (
              <div key={name} className="flex flex-col gap-1">
                <p className="text-neutral-300 text-sm font-light">{name}</p>
                <p className="text-neutral-600 text-xs font-light">{address}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="pg-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-neutral-700 text-[10px] font-light tracking-[0.2em]">
            © {new Date().getFullYear()} Dr. Yalda Jamali. All rights reserved.
          </p>
          <p className="text-neutral-700 text-[10px] font-light tracking-[0.2em]">
            MBChB · MSc Dermatology · FACCSM
          </p>
        </div>
      </div>

    </footer>
  );
}
