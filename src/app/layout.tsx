import type { Metadata } from "next";
import { Lato, Marcellus, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Yalda",
  description: "",
  themeColor: "#EEEDE7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${marcellus.variable} ${hankenGrotesk.variable}`}>
      <body className="overflow-x-hidden">
<div className="sticky top-0">
          <div className="relative z-[60] text-white/80 flex items-center justify-center gap-2 px-6 py-2.5 text-center" style={{ backgroundColor: "#141312" }}>
            <p style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-hanken)" }} className="font-light uppercase">
              Limited phone consultations.
            </p>
            <a
              href="/appointments"
              style={{ fontSize: "9px", letterSpacing: "0.35em", fontFamily: "var(--font-hanken)", paddingBottom: "2px", marginBottom: "-2px", paddingLeft: "2px", paddingRight: "2px" }}
              className="font-light uppercase whitespace-nowrap inline-flex items-center gap-0.5 border-b border-white/30 hover:border-white hover:text-white transition-all duration-700"
            >
              Book Now
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="0.4"/>
                <polyline points="9,1 13,4 9,7" fill="none" stroke="currentColor" strokeWidth="0.4" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
