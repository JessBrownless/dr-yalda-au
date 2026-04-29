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
    <footer style={{ backgroundColor: "#232121" }}>

      {/* Instagram feed */}
      <div className="border-b border-neutral-200 py-12 md:py-16 bg-brand-white">
        <div className="pg-container">

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <FaInstagram size={14} className="text-neutral-400" />
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase">
                @dryaldajamali
              </p>
            </div>
            <a
              href="https://instagram.com/dryaldajamali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 text-[9px] font-light tracking-[0.4em] uppercase border-b border-neutral-300 pb-1 hover:text-neutral-700 hover:border-neutral-500 transition-colors duration-300"
            >
              Follow
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { src: "/assets/IMG_0037_color.avif", pos: "object-center" },
              { src: "/assets/IMG_0029.avif",        pos: "object-top" },
              { src: "/assets/IMG_0028.avif",        pos: "object-center" },
              { src: "/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif", pos: "object-top" },
              { src: "/assets/IMG_0030.avif",        pos: "object-top" },
              { src: "/assets/dr-yalda-treatment.avif", pos: "object-center" },
            ].map(({ src, pos }, i) => (
              <a key={i} href="https://instagram.com/dryaldajamali" target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden group">
                <img src={src} alt="" aria-hidden="true" className={`w-full h-full object-cover ${pos} transition-opacity duration-500 group-hover:opacity-70`} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Social strip */}
      <div className="border-b border-neutral-800">
        <div className="pg-container">
          {/* Mobile — icons only */}
          <div className="flex md:hidden divide-x divide-neutral-800">
            {socials.map(({ icon: Icon, platform, href }) => (
              <a key={platform} href={href} target="_blank" rel="noopener noreferrer" aria-label={platform}
                className="flex-1 flex items-center justify-center py-6 group transition-colors duration-300">
                <Icon size={14} className="text-neutral-500 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
          {/* Desktop — icon + text */}
          <div className="hidden md:grid grid-cols-4 divide-x divide-neutral-800">
            {socials.map(({ icon: Icon, platform, handle, href }) => (
              <a key={platform} href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-row items-center justify-start gap-4 py-8 px-4 transition-colors duration-300">
                <div className="w-9 h-9 flex-shrink-0 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-500 transition-colors duration-300">
                  <Icon size={13} className="text-neutral-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-neutral-300 text-[9px] font-light tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">{platform}</p>
                  <p className="text-neutral-500 text-[9px] font-light tracking-[0.15em] group-hover:text-neutral-300 transition-colors duration-300">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="border-t border-neutral-700">
        {/* Logo — full bleed, mobile only */}
        <div className="md:hidden pt-8 pb-2 pg-container">
          <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={48} className="h-auto" style={{ width: "200px", opacity: 0.9, marginLeft: "-28px" }} />
        </div>
        <div className="pg-container pt-6 pb-12 md:pt-16 md:pb-20">
          <div className="grid grid-cols-12 gap-8">

            {/* Logo — desktop first column */}
            <div className="hidden md:flex col-span-4 flex-col justify-start items-start" style={{ marginLeft: "-32px" }}>
              <Image src="/assets/logo-lockup-white.svg" alt="Dr. Yalda Jamali" width={400} height={64} className="w-auto" style={{ height: "64px", opacity: 0.9 }} />
            </div>

            {/* Nav links */}
            <div className="col-span-6 md:col-span-2 md:col-start-6 flex flex-col gap-4 border-t border-neutral-800 pt-8">
              <p className="text-neutral-600 text-[9px] font-light tracking-[0.45em] uppercase mb-1">Navigate</p>
              {links.map(({ label, href }) => (
                <Link key={href} href={href} className="text-neutral-300 text-sm font-light hover:text-white transition-colors duration-300">{label}</Link>
              ))}
            </div>

            {/* Clinics */}
            <div className="col-span-6 md:col-span-4 md:col-start-9 flex flex-col gap-5 border-t md:border-l border-neutral-800 md:pl-8 pt-8">
              <p className="text-neutral-600 text-[9px] font-light tracking-[0.45em] uppercase mb-1">Clinic Locations</p>
              {clinics.map(({ name, address }) => (
                <div key={name} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-neutral-500">
                      <path d="M4 0C1.791 0 0 1.791 0 4C0 7 4 12 4 12C4 12 8 7 8 4C8 1.791 6.209 0 4 0Z" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                      <circle cx="4" cy="4" r="1.25" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                    </svg>
                    <p className="text-neutral-300 text-sm font-light">{name}</p>
                  </div>
                  <p className="text-neutral-500 text-xs font-light" style={{ paddingLeft: "17px" }}>{address}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar — faint */}
      <div className="border-t border-neutral-800">
        <div className="pg-container py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-neutral-600 text-[10px] font-light tracking-[0.2em]">© {new Date().getFullYear()} Dr. Yalda Jamali. All rights reserved.</p>
          <p className="text-neutral-600 text-[10px] font-light tracking-[0.2em]">MBChB · MSc Dermatology · FACCSM</p>
        </div>
      </div>

    </footer>
  );
}
