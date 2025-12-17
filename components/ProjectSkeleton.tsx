import React from "react";

const ProjectSkeleton: React.FC = () => {
  return (
    <div className="relative bg-hud-dark border border-white/10 flex flex-col overflow-hidden h-full">
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Image Area */}
      <div className="relative aspect-[16/9] bg-white/5 w-full" />

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          {/* Title */}
          <div className="h-7 w-3/4 bg-white/10 rounded animate-pulse" />
          {/* Icon */}
          <div className="h-4 w-4 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6 border-l-2 border-white/5 pl-3">
          <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-white/5 rounded animate-pulse" />
        </div>

        {/* Technologies */}
        <div className="mt-auto flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-white/5 rounded animate-pulse" />
          <div className="h-6 w-20 bg-white/5 rounded animate-pulse" />
          <div className="h-6 w-14 bg-white/5 rounded animate-pulse" />
          <div className="h-6 w-12 bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
