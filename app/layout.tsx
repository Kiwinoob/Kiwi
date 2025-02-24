import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Kee Hui - Web Developer Portfolio",
  description:
    "Kee Hui is an aspiring Web Developer specializing in secure and scalable web applications using cutting-edge technologies.",
  keywords:
    "Web Developer, Frontend, Backend, Full Stack, React, Next.js, Node.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.keehui.dev",
    site_name: "Kee Hui - Web Developer Portfolio",
    images: [
      {
        url: "https://www.keehui.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kee Hui - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@keehuiDev",
    site: "@keehuiDev",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-cyber-dark text-white min-h-screen`}
      >
        <Nav />
        <main className="pt-16 sm:pt-20 relative z-10">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
