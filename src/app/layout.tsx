import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });
const ar = Tajawal({ subsets: ["arabic", "latin"], weight: ["300", "400", "500"], variable: "--font-ar", display: "swap" });

export const metadata: Metadata = {
  title: "Rawiya Studio — Architecture & Interior Design, Riyadh",
  description:
    "Rawiya Studio is a Riyadh architecture and interior design practice creating calm, enduring homes and workplaces. Available in English and Arabic.",
};

const bootScript = `try{var l=localStorage.getItem('rawiya-lang');if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl'}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${sans.variable} ${mono.variable} ${ar.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <LangProvider>
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
