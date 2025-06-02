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
    "An aspiring Web Developer focused on creating secure and scalable web applications with cutting-edge technologies.",
  keywords:
    "Web Developer, Frontend, Backend, Full Stack, React, Next.js, Node.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiwi-orpin.vercel.app/",
    site_name: "Kee Hui - Web Developer Portfolio",
    description: "Kee Hui is an aspiring Web Developer...",
    images: [
      {
        url: "https://kiwi-orpin.vercel.app/portfilo.png",
        width: 1200,
        height: 630,
        alt: "Kee Hui - Web Developer Portfolio",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Kee Hui - Web Developer Portfolio",
      description: "Kee Hui is an aspiring Web Developer...",
      images: ["https://kiwi-orpin.vercel.app/portfilo.png"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="JaVcWgV5MQJD3X-FwSxYA9XNbFcKVDe9r5LzxjhwFto"
        />
        <meta
          name="description"
          content="Kee Hui is an aspiring Web Developer specializing in secure and scalable web applications using cutting-edge technologies."
        />
      </head>
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
