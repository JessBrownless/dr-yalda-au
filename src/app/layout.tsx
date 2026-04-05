import type { Metadata } from "next";
import { Lato, Marcellus, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AOSInit from "@/components/AOSInit";
import AnnouncementBar from "@/components/AnnouncementBar";

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
  weight: ["200", "300", "400", "500", "600"],
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
      <body>
        <SmoothScroll />
        <AOSInit />
<div className="sticky top-0 z-[60]">
          <AnnouncementBar />
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
