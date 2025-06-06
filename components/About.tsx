"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import CyberCrystal from "./CyberCrystal";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-8 xl:px-32 2xl:px-64 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full md:w-2/3 lg:w-1/2 h-full z-0">
        <CyberCrystal />
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
          <span className="text-cyber-light block mt-2">
            <TypeAnimation
              sequence={[
                "Kee Hui", // Type 'Kee Hui'
                1000, // Wait 1s
                "Web Developer", // Delete 'Kee Hui' and type 'Web Developer'
                1000, // Wait 1s
                "Kee Hui", // Delete 'Web Developer' and type 'Kee Hui'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              className="text-cyber-light"
            />
          </span>
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
            href="https://github.com/kiwinoob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/70 p-2 rounded-full backdrop-blur-sm cyber-glow"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/kee-hui-lam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/70 p-2 rounded-full backdrop-blur-sm cyber-glow"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:kiwi1@live.com.sg"
            className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/70 p-2 rounded-full backdrop-blur-sm cyber-glow"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
