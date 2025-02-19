import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-8 bg-cyber-dark">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-cyber-light hover:text-cyber-light/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy policy</h1>
        <p className="text-white/60 text-sm mb-12">
          Last updated: February 16, 2024
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">In short</h2>
          <ul className="space-y-3 text-white/80">
            <li>• No personal information is collected</li>
            <li>• No information such as cookies is stored in the browser</li>
            <li>
              • No information is shared with, sent to or sold to third-parties
            </li>
            <li>• No information is shared with advertising companies</li>
            <li>
              • No information is mined and harvested for personal and
              behavioural trends
            </li>
            <li>• No information is monetized</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Contact</h2>
          <p className="text-white/80">
            If you have any questions about this Privacy Policy, please contact
            me at:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-cyber-light hover:text-cyber-light/80 underline"
            >
              your.email@example.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
