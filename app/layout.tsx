import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Parth Khanna — Full-Stack Developer & AI Developer",
  description:
    "Portfolio of Parth Khanna, a Computer Science Engineering graduate building full-stack web applications and AI-powered products.",
  openGraph: {
    title: "Parth Khanna — Full-Stack Developer & AI Developer",
    description: "Full-stack web applications and AI-powered products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Khanna — Full-Stack Developer & AI Developer",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%2309090B'/><rect x='1' y='1' width='30' height='30' rx='7' fill='none' stroke='%237C3AED' stroke-opacity='.6'/><text x='16' y='21' font-size='13' font-weight='700' text-anchor='middle' fill='%23A78BFA' font-family='monospace'>PK</text></svg>",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}