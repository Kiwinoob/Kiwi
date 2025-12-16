"use client";

import React from "react";
import { SOCIALS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-hud-black pt-16 pb-8 z-10 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kiwi-500/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Socials */}
          <div className="flex gap-4">
            {SOCIALS.map((s) => {
              const Icon = (LucideIcons as any)[s.icon] || LucideIcons.Link;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-slate-500 hover:border-kiwi-500 hover:text-kiwi-500 hover:bg-kiwi-500/10 transition-all rounded-sm group relative overflow-hidden"
                  aria-label={s.platform}
                >
                  <Icon size={16} className="relative z-10" />
                  <div className="absolute inset-0 bg-kiwi-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* Links & Info */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex gap-6 text-xs font-mono font-bold tracking-wider text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-kiwi-500 transition-colors uppercase"
              >
                Privacy_Policy
              </Link>
              <span className="text-white/10">//</span>
              <Link
                href="/terms"
                className="hover:text-kiwi-500 transition-colors uppercase"
              >
                Terms_of_Use
              </Link>
            </div>

            <div className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
              SYSTEM_STATUS:{" "}
              <span className="text-kiwi-500 animate-pulse">OPTIMAL</span>
              <span className="mx-2 text-white/10">|</span>©{" "}
              {new Date().getFullYear()} Kee Hui.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
