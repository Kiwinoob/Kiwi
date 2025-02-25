"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the About section height to determine when to show the button
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutHeight = aboutSection.offsetHeight;
        setIsVisible(window.scrollY > aboutHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyber-dark border border-cyber-light/50 text-cyber-light 
                     hover:bg-cyber-light hover:text-cyber-dark transition-colors duration-300 shadow-lg 
                     hover:shadow-cyber-light/20 focus:outline-none focus:ring-2 focus:ring-cyber-light focus:ring-offset-2 
                     focus:ring-offset-cyber-dark"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
