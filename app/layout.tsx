import "./globals.css";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  metadataBase: new URL("https://keehui.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Kee Hui Portfolio",
  description:
    "Kee Hui is an aspiring Web Developer focused on creating secure and scalable web applications with cutting-edge technologies.",
  keywords:
    "Web Developer, Frontend, Backend, Full Stack, React, Next.js, Node.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keehui.vercel.app/",
    siteName: "Kee Hui Portfolio",
    description:
      "Kee Hui is an aspiring Web Developer focused on creating secure and scalable web applications with cutting-edge technologies.",
    images: [
      {
        url: "https://keehui.vercel.app/keehui-og-image.png",
        width: 1200,
        height: 630,
        alt: "Kee Hui Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kee Hui Portfolio",
    description:
      "Kee Hui is an aspiring Web Developer focused on creating secure and scalable web applications with cutting-edge technologies.",
    creator: "@keehui",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="WjLLwCbs_6p5dbN5LKF0u1ncblCz2HWF4-ZZS0BSpmc"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${rajdhani.variable} font-sans min-h-screen text-slate-300 selection:bg-kiwi-500 selection:text-black flex flex-col relative bg-hex-pattern bg-hud-black`}
      >
        <div className="noise-layer"></div>

        <Nav />

        <main className="flex-grow relative z-10 w-full">
          {/* Decorative Grid Lines */}
          <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 lg:px-12 opacity-10">
            <div className="w-px h-full bg-white" />
            <div className="w-px h-full bg-white hidden md:block" />
            <div className="w-px h-full bg-white hidden lg:block" />
            <div className="w-px h-full bg-white" />
          </div>
          {children}
        </main>

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
