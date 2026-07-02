import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Lato, Marcellus, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AOSInit from "@/components/AOSInit";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteSchema from "@/components/SiteSchema";

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

const SITE_URL = "https://dryalda.com.au";
const TITLE = "Dr Yalda Jamali — Cosmetic Doctor, Sydney";
const DESCRIPTION =
  "Dr Yalda Jamali is a Sydney cosmetic doctor focused on natural-looking results, skin health, and considered, evidence-based care across two clinics.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Dr Yalda Jamali",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Dr Yalda Jamali",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/og-dr-yalda.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Yalda Jamali — Sydney cosmetic doctor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/og-dr-yalda.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F2EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${marcellus.variable} ${hankenGrotesk.variable}`}>
      <body aria-label="Dr Yalda Jamali — Cosmetic Doctor, Sydney">
        <SiteSchema />
        <SmoothScroll />
        <AOSInit />
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
        {/* GA4 — inert until NEXT_PUBLIC_GA_ID is set in the environment (Netlify) */}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
