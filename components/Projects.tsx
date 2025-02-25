"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjects, type Project } from "@/lib/actions";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

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
    <div
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
            Projects made with passion.
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-light/20"
                aria-label={`View ${project.title} on GitHub`}
              >
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
                    <span className="px-2 py-1 text-xs rounded-full bg-cyber-light/10 text-cyber-light border border-cyber-light/30">
                      {project.status}
                    </span>
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
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
