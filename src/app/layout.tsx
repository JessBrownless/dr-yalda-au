import type { Metadata } from "next";
import { Lato, Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en" className={`${lato.variable} ${marcellus.variable}`}>
      <body>
        <CustomCursor />
        <div className="sticky top-0 z-[60]">
          <div className="bg-brand-black text-white flex items-center justify-center gap-3 px-6 py-2.5 text-center">
            <p style={{ fontSize: "10px", letterSpacing: "0.35em", fontFamily: "sans-serif" }} className="font-light uppercase">
              Limited phone consultations available
            </p>
            <span className="text-white/30 text-[8px]">—</span>
            <a
              href="/appointments"
              style={{ fontSize: "10px", letterSpacing: "0.35em", fontFamily: "sans-serif" }}
              className="font-normal uppercase border-b border-white/30 pb-px hover:border-white transition-colors duration-300 whitespace-nowrap"
            >
              Book Now
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
