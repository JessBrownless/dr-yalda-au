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
  title: "Dr Yalda Jamali — Cosmetic Doctor, Sydney",
  description: "",
  themeColor: "#EEEDE7",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${marcellus.variable} ${hankenGrotesk.variable}`}>
      <body aria-label="Dr Yalda Jamali — Cosmetic Doctor, Sydney">
        <SmoothScroll />
        <AOSInit />
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
