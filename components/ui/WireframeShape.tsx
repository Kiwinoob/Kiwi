import React from "react";

const WireframeShape: React.FC = () => {
  return (
    <div className="relative w-64 h-64 [perspective:1000px]">
      <div className="relative w-full h-full animate-[spin-slow_12s_linear_infinite] [transform-style:preserve-3d]">
        {/* Cube Faces */}
        {/* Front */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:translateZ(128px)] flex items-center justify-center">
          <div className="w-16 h-16 border border-kiwi-500/50 rounded-full" />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:rotateY(180deg)translateZ(128px)]" />

        {/* Right */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:rotateY(90deg)translateZ(128px)] grid grid-cols-2 gap-2 p-4">
          <div className="bg-kiwi-500/20" />
          <div className="bg-transparent" />
          <div className="bg-transparent" />
          <div className="bg-kiwi-500/20" />
        </div>

        {/* Left */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:rotateY(-90deg)translateZ(128px)]" />

        {/* Top */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:rotateX(90deg)translateZ(128px)]" />

        {/* Bottom */}
        <div className="absolute w-full h-full border-2 border-kiwi-500/30 bg-kiwi-500/5 [transform:rotateX(-90deg)translateZ(128px)]" />

        {/* Inner Axis Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 [transform:translateZ(0)]" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/20 [transform:translateZ(0)]" />
      </div>
    </div>
  );
};

export default WireframeShape;
