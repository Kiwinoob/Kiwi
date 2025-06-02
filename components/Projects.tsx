"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { getProjects, type Project } from "@/lib/actions";
import PolygonAccent from "./PolygonAccent";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    async function fetchProjects() {
      const { projects, error } = await getProjects();
      if (projects) {
        const sortedProjects = projects.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ); // Sort by createdAt in descending order
        setProjects(sortedProjects);
      }
    }
    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-cyber-dark to-[#141414]"
    >
      {/* Decorative polygon accent */}
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-20 z-0">
        <PolygonAccent density="low" size="large" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            My Projects
          </motion.h2>
          <motion.p
            className="text-white/60 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Projects made with passion.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-light/20 hover:-translate-y-2"
                aria-label={`View ${project.title} on GitHub`}
              >
                 <div className="aspect-video relative overflow-hidden bg-black">Add commentMore actions
                  {project.image?.endsWith(".mp4") ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        </motion.div>
      </motion.div>
    </div>
  );
}
