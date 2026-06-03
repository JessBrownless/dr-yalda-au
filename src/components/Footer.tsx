"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedinIn, FaFacebookF } from "react-icons/fa";


const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Book now", href: "/appointments" },
];

const clinics = [
  { name: "Epios Cosmetic Clinic", address: "18 William St, Paddington" },
  { name: "Austin Clinic", address: "5/67 Wanganella St, Balgowlah" },
];

const socials = [
  { icon: FaInstagram,  platform: "Instagram", handle: "@dryaldajamali",  href: "https://instagram.com/dryaldajamali" },
  { icon: FaTiktok,     platform: "TikTok",    handle: "@dryaldajamali",  href: "https://tiktok.com/@dryaldajamali" },
  { icon: FaLinkedinIn, platform: "LinkedIn",  handle: "Dr. Yalda Jamali", href: "https://linkedin.com" },
  { icon: FaFacebookF,  platform: "Facebook",  handle: "Dr. Yalda Jamali", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal">

      {/* Main footer body */}
      <div>
        {/* Logo — full bleed, mobile only */}
        <div className="md:hidden pt-8 pb-2 pg-container flex flex-col gap-7">
          <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={48} className="h-auto" style={{ width: "220px", opacity: 0.9, marginLeft: "-14px" }} />
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, platform, href }) => (
              <a key={platform} href={href} target="_blank" rel="noopener noreferrer" aria-label={platform}
                className="group w-9 h-9 border border-brand-white/20 flex items-center justify-center hover:border-brand-white/40 transition-colors duration-300">
                <Icon size={13} className="text-brand-white/40 group-hover:text-cream transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="pg-container pt-20 pb-20 md:pt-40 md:pb-32">
          <div className="grid grid-cols-12 gap-8 md:gap-12">

            {/* Logo — desktop first column */}
            <div className="hidden md:flex col-span-4 flex-col justify-start items-start gap-10" style={{ marginLeft: "-16px" }}>
              <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={72} className="w-auto" style={{ height: "72px", opacity: 0.9 }} />
              <div className="flex items-center gap-3" style={{ marginLeft: "16px" }}>
                {socials.map(({ icon: Icon, platform, href }) => (
                  <a key={platform} href={href} target="_blank" rel="noopener noreferrer" aria-label={platform}
                    className="group w-9 h-9 border border-brand-white/20 flex items-center justify-center hover:border-brand-white/40 transition-colors duration-300">
                    <Icon size={13} className="text-brand-white/40 group-hover:text-cream transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className="col-span-6 md:col-span-2 md:col-start-6 flex flex-col gap-4">
              <p className="overline mb-1">Navigate</p>
              {links.map(({ label, href }) => (
                <Link key={href} href={href} className="text-brand-white/60 text-sm font-light hover:text-cream transition-colors duration-300">{label}</Link>
              ))}
            </div>

            {/* Clinics */}
            <div className="col-span-6 md:col-span-4 md:col-start-9 flex flex-col gap-5 md:border-l border-brand-white/10 md:pl-8">
              <p className="overline mb-1">Clinic Locations</p>
              {clinics.map(({ name, address }) => (
                <div key={name} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-brand-white/40">
                      <path d="M4 0C1.791 0 0 1.791 0 4C0 7 4 12 4 12C4 12 8 7 8 4C8 1.791 6.209 0 4 0Z" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                      <circle cx="4" cy="4" r="1.25" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                    </svg>
                    <h2 className="heading-sm">{name}</h2>
                  </div>
                  <p className="body-xs-caps" style={{ paddingLeft: "17px" }}>{address}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar — faint */}
      <div>
        <div className="pg-container pb-12 md:pb-16 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="body-xs-caps">© {new Date().getFullYear()} Dr. Yalda Jamali. All rights reserved.</p>
          <p className="body-xs-caps">MBChB · MSc Dermatology · FACCSM</p>
        </div>
      </div>

    </footer>
  );
}
