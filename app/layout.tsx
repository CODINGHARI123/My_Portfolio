import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Yanamala Sree Hari — Data Scientist & ML Engineer",
    template: "%s | Yanamala Sree Hari",
  },
  description:
    "Portfolio of Yanamala Sree Hari — Data Scientist and Machine Learning Engineer specializing in Python, NLP, Deep Learning, PySpark, SQL, Power BI, and Tableau.",
  keywords: [
    "Yanamala Sree Hari",
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
  authors: [{ name: "Yanamala Sree Hari" }],
  creator: "Yanamala Sree Hari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Yanamala Sree Hari — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer focused on turning data into insight: Python, NLP, Deep Learning, PySpark, SQL, Power BI, Tableau.",
    siteName: "Yanamala Sree Hari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanamala Sree Hari — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer specializing in Python, NLP, Deep Learning, PySpark, and Data Visualization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
