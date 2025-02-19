"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import GlowingSphere from "./GlowingSphere";

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-8 xl:px-32 2xl:px-64 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-2/3 lg:w-1/2 h-full z-0">
        {/* <GlowingSphere /> */}
      </div>
      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hey there, I'm{" "}
          <span className="text-cyber-light block mt-2">Kee Hui</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mb-8 sm:mb-12 bg-cyber-dark/50 p-4 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          An aspiring Web Developer. Currently focused on creating secure and
          scalable web applications with cutting-edge technologies.
        </motion.p>
        <motion.div
          className="flex gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/50 p-2 rounded-full backdrop-blur-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/50 p-2 rounded-full backdrop-blur-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/50 p-2 rounded-full backdrop-blur-sm"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
