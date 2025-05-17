"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["skills", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
      setActiveSection("/");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href === "/" || href === "#projects" || href === "#skills") {
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-cyber-dark/80 backdrop-blur-sm z-20">
      <div className="px-4 sm:px-8 xl:px-32 2xl:px-64 h-full">
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-cyber-light font-bold font-mono text-lg sm:text-xl mr-4 sm:mr-8"
            >
              Kiwi
            </Link>
            <div className="hidden sm:flex items-center gap-4 sm:gap-8">
              {navItems.map(({ href, label }) => {
                const isActive = activeSection === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="relative group"
                    aria-label={label}
                    onClick={handleScroll}
                  >
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
                        isActive
                          ? "text-cyber-light"
                          : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/Lam Kee Hui's CV.docx"
              download
              className="hidden sm:flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-cyber-light border border-cyber-light/50 rounded hover:bg-cyber-light/10 transition-colors"
            >
              <Download size={14} className="sm:w-4 sm:h-4" />
              Resume
            </a>
            <button
              className="sm:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cyber-dark/95 backdrop-blur-sm">
          <div className="px-4 py-2">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-2 text-white/70 hover:text-white"
                onClick={(e) => {
                  handleScroll(e);
                  setMobileMenuOpen(false);
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="/Lam Kee Hui's Resume.pdf"
              download
              className="block py-2 text-cyber-light hover:text-cyber-light/80"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
