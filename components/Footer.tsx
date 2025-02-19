"use client";
export default function Footer() {
  return (
    <footer className="bg-cyber-dark text-white py-4 px-4 sm:px-8 xl:px-32 2xl:px-64">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Kiwi.dev. All rights reserved.</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="/terms" className="hover:text-cyber-light transition-colors">
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="hover:text-cyber-light transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
