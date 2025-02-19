"use client";
import { motion } from "framer-motion";
import { Code2, Database, Languages } from "lucide-react";

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
  return (
    <div
      id="skills"
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-[#141414] to-cyber-dark"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 h-1 bg-cyber-light mx-auto mb-6"></div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-white/60 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Technologies I work with
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.4 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyber-light/30 via-cyber-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"
                style={{ mixBlendMode: "color-dodge" }}
              />
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 h-full border border-white/10 backdrop-blur-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-light/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyber-light/10 rounded-lg text-cyber-light">
                      {skillCategory.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {skillCategory.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.1 + categoryIndex * 0.2,
                        }}
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
