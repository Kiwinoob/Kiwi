import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata = {
  title: "Kee Hui - Web Developer Portfolio",
  description: "Web Developer specializing in secure and scalable applications",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-cyber-dark text-white min-h-screen`}>
        <Nav />
        <main className="pt-16 sm:pt-20 relative z-10">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'