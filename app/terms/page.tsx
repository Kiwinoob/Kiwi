import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/60 text-sm mb-12">
          Last updated: February 17, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-white/80 mb-4">
            By accessing and using this portfolio website, you accept and agree
            to be bound by the terms and provisions of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Use License
          </h2>
          <p className="text-white/80 mb-4">
            Permission is granted to temporarily view the materials on this
            website for personal, non-commercial use only. This is the grant of
            a license, not a transfer of title.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Disclaimer
          </h2>
          <p className="text-white/80 mb-4">
            The materials on this website are provided on an 'as is' basis. The
            owner makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Limitations
          </h2>
          <p className="text-white/80 mb-4">
            In no event shall the owner or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Revisions and Errata
          </h2>
          <p className="text-white/80 mb-4">
            The materials appearing on this website could include technical,
            typographical, or photographic errors. The owner does not warrant
            that any of the materials on its website are accurate, complete or
            current.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
          <p className="text-white/80 mb-4">
            The owner has not reviewed all of the sites linked to its website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by the owner of the
            site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-white/80">
            If you have any questions about these Terms, please contact me at:{" "}
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
