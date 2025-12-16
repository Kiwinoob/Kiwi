"use client";

import React, { useEffect, useRef, useState } from "react";
import { HERO_TEXT, SOCIALS } from "@/lib/constants";
import PerspectivePlane from "./ui/PerspectivePlane";
import WireframeShape from "./ui/WireframeShape";
import { Crosshair, Zap, Globe, Code, ShieldCheck } from "lucide-react";
import * as LucideIcons from "lucide-react";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center perspective-container bg-hud-black pt-20"
    >
      {/* 3D Grid Floor (Subtle) */}
      <div className="opacity-40">
        <PerspectivePlane mouseX={mousePos.x * 0.5} mouseY={mousePos.y * 0.5} />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-kiwi-500/30 bg-kiwi-500/5 rounded-sm text-kiwi-500 text-xs font-mono tracking-widest uppercase">
            <Zap size={12} /> System Online
          </div>

          <div>
            <h1 className="font-bold text-white leading-[0.85] tracking-tight mb-4">
              <span className="block text-2xl md:text-4xl text-slate-400 mb-2 font-medium tracking-normal">
                Hey there, I'm
              </span>
              <span className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-kiwi-500 to-emerald-400">
                Kee Hui
              </span>
            </h1>
            <h2 className="text-xl font-mono text-slate-400 border-l-2 border-kiwi-500 pl-4">
              {HERO_TEXT.title.split("&").map((line, i) => (
                <React.Fragment key={i}>
                  {line.trim()} {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-md text-sm border-t border-white/10 pt-4 font-mono">
            {HERO_TEXT.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-kiwi-500 text-black font-bold uppercase tracking-wider hover:bg-kiwi-400 transition-colors clip-corner flex items-center justify-center gap-2 group"
            >
              <Crosshair
                size={18}
                className="group-hover:rotate-90 transition-transform"
              />
              Initialize
            </a>
            <a
              href="#skills"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors clip-corner text-center"
            >
              System Logs
            </a>
          </div>

          {/* Social Uplink */}
          <div className="pt-6 border-t border-white/5 flex items-center gap-6">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              ESTABLISH UPLINK //
            </span>
            <div className="flex gap-4">
              {SOCIALS.map((s) => {
                // Dynamically load icon from string name
                const Icon = (LucideIcons as any)[s.icon] || LucideIcons.Link;
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 border border-white/10 bg-white/5 hover:border-kiwi-500/50 hover:bg-kiwi-500/10 transition-all rounded-sm"
                    title={s.platform}
                    aria-label={s.platform}
                  >
                    <Icon
                      size={18}
                      className="text-slate-400 group-hover:text-kiwi-500 transition-colors"
                    />
                    {/* Tiny corner accent */}
                    <div className="absolute top-0 right-0 w-1 h-1 bg-kiwi-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Data Core */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000 relative h-[500px] items-center">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-kiwi-500/10 to-transparent blur-[80px] pointer-events-none" />

          {/* The Core Container */}
          <div className="relative w-[400px] h-[400px] flex items-center justify-center transform-style-3d">
            {/* Rotating Outer Rings (HUD Style) */}
            <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-12 border border-dotted border-kiwi-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-24 border border-white/5 rounded-full" />

            {/* Orbital Markers */}
            <div className="absolute top-0 left-1/2 w-1 h-4 bg-kiwi-500 -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-kiwi-500 -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-4 h-1 bg-hud-accent -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-4 h-1 bg-hud-accent -translate-y-1/2" />

            {/* Central 3D Wireframe Object */}
            <div className="relative z-10 scale-75">
              <WireframeShape />
            </div>

            {/* Floating Data Modules */}
            {/* Module 1: Code */}
            <div
              className="absolute -top-4 -right-4 animate-float"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-3 p-3 bg-hud-black/80 backdrop-blur border border-white/10 text-xs font-mono text-slate-300 shadow-xl">
                <Code size={16} className="text-hud-accent" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Active Process
                  </div>
                  <div className="text-white">FULL_STACK_DEV</div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="absolute top-full right-1/2 w-px h-16 bg-gradient-to-b from-white/20 to-transparent -z-10 origin-top rotate-45" />
            </div>

            {/* Module 2: Network */}
            <div
              className="absolute bottom-12 -left-8 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3 p-3 bg-hud-black/80 backdrop-blur border border-white/10 text-xs font-mono text-slate-300 shadow-xl">
                <Globe size={16} className="text-kiwi-500" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Region
                  </div>
                  <div className="text-white">SINGAPORE_SG</div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="absolute bottom-full left-1/2 w-px h-12 bg-gradient-to-t from-white/20 to-transparent -z-10 origin-bottom -rotate-12" />
            </div>

            {/* Module 3: Security */}
            <div
              className="absolute top-1/3 -right-12 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-kiwi-500/10 border border-kiwi-500/30 rounded-full text-[10px] font-mono text-kiwi-500 shadow-lg">
                <ShieldCheck size={12} />
                <span>SECURE_CONNECTION</span>
              </div>
            </div>

            {/* Module 4: Terminal */}
            <div className="absolute bottom-0 right-0 animate-pulse-slow">
              <div className="text-[10px] font-mono text-hud-accent text-right">
                <div>UPTIME: 99.99%</div>
                <div>LATENCY: 12ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
