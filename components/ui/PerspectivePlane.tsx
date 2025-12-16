import React from "react";

interface PerspectivePlaneProps {
  mouseX: number;
  mouseY: number;
}

const PerspectivePlane: React.FC<PerspectivePlaneProps> = ({
  mouseX,
  mouseY,
}) => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none perspective-container"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          transform: `rotateX(60deg) translateZ(-100px) rotateZ(${
            mouseX * 5
          }deg) translateY(${mouseY * 20}px)`,
          transformOrigin: "center center",
          maskImage:
            "linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)",
        }}
      />

      {/* Glow effect at horizon */}
      <div className="absolute top-[40%] left-0 right-0 h-[20%] bg-gradient-to-b from-kiwi-500/10 to-transparent blur-3xl" />
    </div>
  );
};

export default PerspectivePlane;
