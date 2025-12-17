"use client";

import React, { useState } from "react";
import { Menu, X, Download, Terminal, ChevronRight } from "lucide-react";

const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-4xl bg-hud-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-between p-2 pl-4 pr-2 ring-1 ring-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Custom Logo SVG */}
            <div className="w-8 h-8 bg-kiwi-500/10 border border-kiwi-500 text-kiwi-500 flex items-center justify-center rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-kiwi-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 21V3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
                <path
                  d="M20 21L9 11.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
                <path
                  d="M20 3L9 13"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <span className="font-bold text-white tracking-widest text-sm hidden sm:block">
              Kee Hui <span className="text-slate-600">v2.4</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-md p-1 border border-white/5">
            {["About", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 rounded-sm transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/Lam Kee Hui's CV.docx"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-kiwi-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-kiwi-400 transition-colors rounded-sm clip-corner-sm group"
            >
              <span>Resume</span>
              <Download
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center bg-white/10 text-white rounded-sm hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-hud-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-slate-400 hover:text-white p-2"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            {/* Brand in Mobile Menu */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-kiwi-500/10 border border-kiwi-500 text-kiwi-500 flex items-center justify-center rounded-sm">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 21V3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                  <path
                    d="M20 21L9 11.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                  <path
                    d="M20 3L9 13"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <span className="font-bold text-white tracking-widest text-lg">
                Kee Hui <span className="text-slate-600">v2.4</span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 bg-white/5 rounded-md p-1 border border-white/5 w-full">
              {["About", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 rounded-sm transition-all text-center"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/Lam Kee Hui's CV.docx"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-kiwi-500 text-black text-sm font-bold uppercase tracking-wider hover:bg-kiwi-400 transition-colors rounded-sm w-full group"
            >
              <span>Resume</span>
              <Download
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
