"use client";

import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { SOCIALS } from "@/lib/constants";

export default function PrivacyPolicy() {
  const email =
    SOCIALS.find((s) => s.platform === "Email")?.url.replace("mailto:", "") ||
    "contact@example.com";

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 bg-hud-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kiwi-500/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-slate-400 hover:text-kiwi-500 mb-12 group transition-colors font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to System
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-kiwi-500/10 border border-kiwi-500 rounded-sm text-kiwi-500">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-mono text-sm mt-1 uppercase tracking-widest">
              Protocol v2.5 // Last Updated: DEC 16, 2025
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-3">
              <span className="w-1.5 h-6 bg-kiwi-500 rounded-sm" />
              01. Data Collection
            </h2>
            <div className="pl-5 border-l border-white/10 ml-0.5 space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>In short: No personal information is collected.</p>
              <ul className="list-disc list-inside space-y-2 marker:text-kiwi-500">
                <li>No information such as cookies is stored in the browser</li>
                <li>
                  No information is shared with, sent to, or sold to
                  third-parties
                </li>
                <li>No information is shared with advertising companies</li>
                <li>
                  No information is mined and harvested for personal and
                  behavioural trends
                </li>
                <li>No information is monetized</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-3">
              <span className="w-1.5 h-6 bg-kiwi-500 rounded-sm" />
              02. Contact Protocol
            </h2>
            <div className="pl-5 border-l border-white/10 ml-0.5 text-slate-300 leading-relaxed text-sm md:text-base">
              <p className="mb-4">
                If you have any questions about this Privacy Policy,
                establishing a secure connection is encouraged via:
              </p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 hover:border-kiwi-500 text-kiwi-500 font-mono text-sm rounded-sm transition-all hover:bg-kiwi-500/10"
              >
                {email}
              </a>
            </div>
          </section>
        </div>

        {/* Footer Signature */}
        <div className="mt-20 pt-8 border-t border-dashed border-white/10 text-center font-mono text-xs text-slate-600 uppercase">
          End of Policy Document // Secure
        </div>
      </div>
    </div>
  );
}
