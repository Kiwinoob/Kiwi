"use client";

import React from "react";
import { SKILLS } from "@/lib/constants";
import { Network, Database, LayoutTemplate, Hexagon } from "lucide-react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-hud-dark border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider mb-2">
            Tech <span className="text-hud-accent">Tree</span>
          </h2>
          <div className="w-24 h-1 bg-hud-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {SKILLS.map((group, idx) => {
            // Assign Icons
            let Icon = LayoutTemplate;
            let accentColor = "text-kiwi-500";
            let borderColor = "border-kiwi-500";

            if (group.category.includes("Backend")) {
              Icon = Database;
              accentColor = "text-hud-accent";
              borderColor = "border-hud-accent";
            } else if (group.category.includes("Language")) {
              Icon = Network;
              accentColor = "text-blue-400";
              borderColor = "border-blue-400";
            }

            return (
              <div key={group.category} className="flex flex-col items-center">
                {/* Root Node */}
                <div
                  className={`w-20 h-20 border-2 ${borderColor} bg-black/50 backdrop-blur rounded-full flex items-center justify-center mb-8 relative z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                >
                  <Icon className={accentColor} size={32} />
                  {/* Connecting Line Down */}
                  <div
                    className={`absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-${borderColor.replace(
                      "border-",
                      ""
                    )} to-white/10`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white uppercase mb-8 bg-black px-4 z-20">
                  {group.category}
                </h3>

                {/* Leaf Nodes */}
                <div className="w-full grid grid-cols-2 gap-4 relative">
                  {/* Horizontal Connector Bar */}
                  <div className="absolute -top-4 left-1/4 right-1/4 h-0.5 bg-white/10 rounded-full" />

                  {group.items.map((skill, i) => (
                    <div key={skill} className="relative group">
                      {/* Vertical connector to horizontal bar */}
                      <div className="absolute -top-4 left-1/2 w-px h-4 bg-white/10" />

                      <div className="p-3 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-center rounded-sm relative overflow-hidden">
                        <span className="text-sm font-mono text-slate-300 relative z-10 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                        <Hexagon
                          className="absolute -right-2 -bottom-2 text-white/5 group-hover:text-white/10 transition-colors"
                          size={32}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Status */}
        <div className="mt-20 p-6 border border-dashed border-white/10 bg-black/40 text-center font-mono text-xs text-slate-500">
          ALL SKILL NODES UNLOCKED // READY FOR DEPLOYMENT
        </div>
      </div>
    </section>
  );
};

export default Skills;
