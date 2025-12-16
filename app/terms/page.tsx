"use client";

import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { SOCIALS } from "@/lib/constants";

export default function TermsOfService() {
  const email =
    SOCIALS.find((s) => s.platform === "Email")?.url.replace("mailto:", "") ||
    "contact@example.com";

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 bg-hud-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-hud-accent/10 blur-[100px]" />
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
          <div className="p-3 bg-hud-accent/10 border border-hud-accent rounded-sm text-hud-accent">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-500 font-mono text-sm mt-1 uppercase tracking-widest">
              Protocol v2.5 // Last Updated: DEC 16, 2025
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <div className="space-y-12">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement.",
            },
            {
              title: "2. Use License",
              content:
                "Permission is granted to temporarily view the materials on this website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.",
            },
            {
              title: "3. Disclaimer",
              content:
                "The materials on this website are provided on an 'as is' basis. The owner makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
            },
            {
              title: "4. Limitations",
              content:
                "In no event shall the owner or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.",
            },
            {
              title: "5. Revisions and Errata",
              content:
                "The materials appearing on this website could include technical, typographical, or photographic errors. The owner does not warrant that any of the materials on its website are accurate, complete or current.",
            },
            {
              title: "6. Links",
              content:
                "The owner has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the owner of the site.",
            },
          ].map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-3">
                <span className="w-1.5 h-6 bg-hud-accent rounded-sm" />
                {section.title}
              </h2>
              <div className="pl-5 border-l border-white/10 ml-0.5 text-slate-300 leading-relaxed text-sm md:text-base">
                <p>{section.content}</p>
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-3">
              <span className="w-1.5 h-6 bg-hud-accent rounded-sm" />
              07. Contact Protocol
            </h2>
            <div className="pl-5 border-l border-white/10 ml-0.5 text-slate-300 leading-relaxed text-sm md:text-base">
              <p className="mb-4">
                If you have any questions about these Terms, establishing a
                secure connection is encouraged via:
              </p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 hover:border-hud-accent text-hud-accent font-mono text-sm rounded-sm transition-all hover:bg-hud-accent/10"
              >
                {email}
              </a>
            </div>
          </section>
        </div>

        {/* Footer Signature */}
        <div className="mt-20 pt-8 border-t border-dashed border-white/10 text-center font-mono text-xs text-slate-600 uppercase">
          End of Terms Document // Secure
        </div>
      </div>
    </div>
  );
}
