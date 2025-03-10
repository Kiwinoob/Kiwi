"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-dark px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-cyber-light mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-white/70 mb-8">
          Redirecting you to the home page in 3 seconds...
        </p>
        <div className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-cyber-light to-transparent">
          <motion.div
            className="h-full bg-cyber-light"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
          />
        </div>
        <button
          onClick={() => router.push("/")}
          className="mt-8 px-6 py-3 bg-cyber-light/10 text-cyber-light border border-cyber-light/30 rounded-md hover:bg-cyber-light/20 transition-colors"
        >
          Go Home Now
        </button>
      </motion.div>
    </div>
  );
}
