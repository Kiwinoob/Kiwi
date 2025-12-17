"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjects, type Project } from "@/lib/actions";
import ProjectSkeleton from "./ProjectSkeleton";
import Image from "next/image";

const Projects: React.FC<{ initialProjects?: Project[] }> = ({
  initialProjects,
}) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const [isLoading, setIsLoading] = useState(!initialProjects);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (initialProjects) return;

    async function fetchProjects() {
      setIsLoading(true);
      const { projects } = await getProjects();
      if (projects) {
        setProjects(projects);
      }
      setIsLoading(false);
    }
    fetchProjects();
  }, [initialProjects]);

  // Track scroll progress
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateProgress = () => {
      const scrollWidth = slider.scrollWidth - slider.clientWidth;
      const scrolled = slider.scrollLeft;
      const progress = scrollWidth > 0 ? (scrolled / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    slider.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial calculation

    return () => slider.removeEventListener("scroll", updateProgress);
  }, [projects]);

  // Drag to scroll implementation
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    sliderRef.current.classList.add("cursor-grabbing");
    sliderRef.current.classList.remove("cursor-grab");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!sliderRef.current) return;
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
    sliderRef.current.classList.add("cursor-grab");
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
    sliderRef.current.classList.add("cursor-grab");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    const gap = 32;
    const amount = (child?.clientWidth ?? el.clientWidth) + gap;
    el.scrollTo({
      left: dir === "left" ? el.scrollLeft - amount : el.scrollLeft + amount,
      behavior: "smooth",
    });
  };

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
                SWIPE TO NAVIGATE DATABASE
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-kiwi-500">
            <span>{projects.length} ENTRIES // ONLINE</span>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 border border-white/10 text-slate-400 hover:text-white hover:border-kiwi-500 hover:bg-kiwi-500/10 transition-all active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border border-white/10 text-slate-400 hover:text-white hover:border-kiwi-500 hover:bg-kiwi-500/10 transition-all active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory cursor-grab scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[85vw] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] snap-center"
                >
                  <ProjectSkeleton />
                </div>
              ))
            : projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="min-w-[85vw] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] snap-center flex flex-col h-full"
                >
                  <a
                    href={project.link}
                    draggable="false"
                    className="group relative bg-hud-dark border border-white/10 hover:border-kiwi-500/50 transition-all duration-300 flex flex-col overflow-hidden h-full select-none"
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
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          priority={idx < 2}
                          className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-white border border-white/10 z-20">
                        {project.status}
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
                  </a>
                </div>
              ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-kiwi-500 to-kiwi-400 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="font-mono text-xs text-slate-500">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
