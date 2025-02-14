"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download } from "lucide-react"
import type React from "react" // Added import for React

const navItems = [
  { href: "/", label: "About" },
  { href: "#projects", label: "Projects" },
]

export function Nav() {
  const pathname = usePathname()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Check if the clicked item is "Projects"
    if (e.currentTarget.getAttribute("href") === "#projects") {
      e.preventDefault()
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-cyber-dark/80 backdrop-blur-sm z-20">
      <div className="px-4 sm:px-8 xl:px-32 2xl:px-64 h-full">
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-cyber-light font-mono text-lg sm:text-xl mr-4 sm:mr-8">
              Kiwi
            </Link>
            <div className="flex items-center gap-4 sm:gap-8">
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <Link key={href} href={href} className="relative group" aria-label={label} onClick={handleScroll}>
                    <motion.div
                      className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-0.5 bg-cyber-light rounded-full"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <span
                      className={`text-xs sm:text-sm font-medium transition-colors ${
                        isActive ? "text-cyber-light" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-cyber-light border border-cyber-light/50 rounded hover:bg-cyber-light/10 transition-colors"
          >
            <Download size={14} className="sm:w-4 sm:h-4" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

