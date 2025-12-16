"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Crosshair, Folder } from "lucide-react";
import { getProjects, type Project } from "@/lib/actions";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { projects } = await getProjects();
      if (projects) {
        setProjects(projects);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-hud-accent/10 text-hud-accent border border-hud-accent/30 rounded-sm">
              <Folder size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                Mission Log
              </h2>
              <p className="text-slate-500 font-mono text-xs">
                SELECT MISSION TO INITIALIZE
              </p>
            </div>
          </div>
          <div className="hidden md:block font-mono text-xs text-kiwi-500">
            {projects.length} RECORDS FOUND
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative bg-hud-dark border border-white/10 hover:border-kiwi-500/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-kiwi-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image Area (Cover Art) */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-kiwi-900/20 mix-blend-overlay z-10" />
                {project.image?.endsWith(".mp4") ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                )}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-white border border-white/10 z-20">
                  IMG_0{idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-kiwi-500 transition-colors uppercase">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 group-hover:text-white transition-colors"
                  />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-mono border-l-2 border-white/5 pl-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] uppercase font-bold text-slate-300 bg-white/5 border border-white/5 group-hover:border-kiwi-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[10px] uppercase font-bold text-slate-500 bg-white/5 border border-white/5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay Text */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-0 pointer-events-none">
                {/* Kept clear for now, allowing cover art to shine */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
