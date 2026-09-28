import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SectionNav from "@/components/effects/SectionNav";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Runs before first paint so a saved (or system) dark preference never flashes light.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;

const siteUrl = "https://codinghari123.github.io/My_Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yanamala SreeHari — Software Developer · Data Science & ML",
    template: "%s | Yanamala SreeHari",
  },
  description:
    "Portfolio of Yanamala SreeHari — Software Developer at MakeMyTechnology with a Data Science background in Python, NLP, SQL, Power BI, and Tableau.",
  keywords: [
    "Yanamala SreeHari",
    "Software Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Python",
    "NLP",
    "Deep Learning",
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
      "Software Developer with a Data Science background — Python, ML, NLP, SQL, Power BI, and Tableau.",
    siteName: "Yanamala SreeHari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanamala SreeHari — Software Developer · Data Science & ML",
    description:
      "Software Developer + Data Science. Python, ML, NLP, SQL, Power BI, Tableau.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable} ${serif.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative overflow-x-hidden">
        <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[80]" />
        <ScrollProgress />
        <SectionNav />
        {children}
      </body>
    </html>
  );
}
