"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Database, Languages } from "lucide-react";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    icon: <Languages className="w-6 h-6" />,
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Objective C",
      "C#",
      "Swift",
      "Python",
      "SQL",
    ],
  },
  {
    category: "Frameworks",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Angular", "ASP.net", "Ionic", "React JS", "Next JS"],
  },
  {
    category: "Backend & Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Express", "Firebase", "MongoDB", "MySQL"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-[#141414]/80 to-cyber-dark/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="w-16 h-1 bg-cyber-light mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-white/60 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Technologies I work with
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyber-light/30 via-cyber-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"
                style={{ mixBlendMode: "color-dodge" }}
              />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0f0f0f]/90 rounded-xl p-6 h-full border border-white/10 backdrop-blur-3xl overflow-hidden content-card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-light/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-cyber-light/10 rounded-lg text-cyber-light"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + categoryIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {skillCategory.icon}
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + categoryIndex * 0.1,
                      }}
                    >
                      {skillCategory.category}
                    </motion.h3>
                  </div>

                  <motion.div
                    className="grid grid-cols-2 gap-3"
                    variants={containerVariants}
                  >
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={skillItemVariants}
                        custom={skillIndex}
                        className="group/item relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-light/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="relative p-3 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm">
                          <span className="text-sm text-white/80 group-hover/item:text-white transition-colors duration-200">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
