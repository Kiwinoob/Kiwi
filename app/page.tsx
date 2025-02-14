"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import GlowingSphere from "@/components/GlowingSphere";
import { getProjects } from "@/lib/actions";
import type { Project } from "@prisma/client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchProjects() {
      const { projects, error } = await getProjects();
      if (projects) {
        setProjects(projects);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center px-4 sm:px-8 xl:px-32 2xl:px-64 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-2/3 lg:w-1/2 h-full z-0"></div>
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
            A passionate Web Developer and open-source advocate. Currently
            focused on creating secure and scalable web applications with
            cutting-edge technologies.
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
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/50 p-2 rounded-full backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-white/80 hover:text-cyber-light transition-colors bg-cyber-dark/50 p-2 rounded-full backdrop-blur-sm"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={projectsRef}
        id="projects"
        className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-cyber-dark to-[#141414]"
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
              My Projects
            </motion.h2>
            <motion.p
              className="text-white/60 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Open-sourced projects, made with passion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="group"
              >
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-light/20">
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyber-light transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
