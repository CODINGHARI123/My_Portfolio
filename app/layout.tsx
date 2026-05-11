import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/effects/CursorSpotlight";
import SectionNav from "@/components/effects/SectionNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://yanamala-sree-hari.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yanamala SreeHari — Software Developer · Data Science & ML",
    template: "%s | Yanamala SreeHari",
  },
  description:
    "Portfolio of Yanamala SreeHari — Software Developer at Bixbi Systems with a Data Science background in Python, NLP, Deep Learning, PySpark, SQL, Power BI, and Tableau.",
  keywords: [
    "Yanamala SreeHari",
    "Software Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Python",
    "NLP",
    "Deep Learning",
    "PySpark",
    "Power BI",
    "Tableau",
    "Portfolio",
  ],
  authors: [{ name: "Yanamala SreeHari" }],
  creator: "Yanamala SreeHari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Yanamala SreeHari — Software Developer · Data Science & ML",
    description:
      "Software Developer with a Data Science background — Python, ML, NLP, PySpark, SQL, Power BI, and Tableau.",
    siteName: "Yanamala SreeHari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanamala SreeHari — Software Developer · Data Science & ML",
    description:
      "Software Developer + Data Science. Python, ML, NLP, PySpark, Power BI, Tableau.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="relative">
        {/* Decorative dot grid behind everything */}
        <div
          aria-hidden
          className="dot-grid pointer-events-none fixed inset-0 z-0"
        />
        <CursorSpotlight />
        <SectionNav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
