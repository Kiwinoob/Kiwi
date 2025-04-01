"use client";

import { useRef, useEffect } from "react";

interface PolygonAccentProps {
  className?: string;
  color?: string;
  density?: "low" | "medium" | "high";
  size?: "small" | "medium" | "large";
  animated?: boolean;
}

export default function PolygonAccent({
  className = "",
  color = "#00ff41",
  density = "medium",
  size = "medium",
  animated = false, // Default to false now
}: PolygonAccentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Determine polygon count based on density
    const getPolygonCount = () => {
      const area = canvas.width * canvas.height;
      switch (density) {
        case "low":
          return Math.max(3, Math.floor(area / 20000));
        case "high":
          return Math.max(10, Math.floor(area / 5000));
        default:
          return Math.max(5, Math.floor(area / 10000)); // medium
      }
    };

    // Determine polygon size based on size prop
    const getPolygonSize = () => {
      const minDimension = Math.min(canvas.width, canvas.height);
      switch (size) {
        case "small":
          return minDimension * 0.05;
        case "large":
          return minDimension * 0.15;
        default:
          return minDimension * 0.1; // medium
      }
    };

    // Create polygons
    const polygonCount = getPolygonCount();
    const maxSize = getPolygonSize();

    const polygons = Array.from({ length: polygonCount }, () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize * 0.6 + maxSize * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: animated ? (Math.random() - 0.5) * 0.01 : 0,
        sides: Math.floor(Math.random() * 3) + 3, // 3 to 5 sides
        opacity: Math.random() * 0.4 + 0.2, // Increased opacity for brightness
      };
    });

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw polygons
      polygons.forEach((polygon) => {
        if (animated) {
          polygon.rotation += polygon.rotationSpeed;
        }

        ctx.save();
        ctx.globalAlpha = polygon.opacity;
        ctx.translate(polygon.x, polygon.y);
        ctx.rotate(polygon.rotation);

        ctx.beginPath();
        for (let i = 0; i < polygon.sides; i++) {
          const angle = ((Math.PI * 2) / polygon.sides) * i;
          const x = Math.cos(angle) * polygon.size;
          const y = Math.sin(angle) * polygon.size;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5; // Increased line width
        ctx.stroke();

        ctx.restore();
      });

      if (animated) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    // Initial render
    animate();

    // Only set up animation loop if animated
    if (animated) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [color, density, size, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
