"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PolygonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const requestRef = useRef<number>();
  const polygonsRef = useRef<Polygon[]>([]);
  const isInitializedRef = useRef(false);

  // Polygon class for managing individual polygons
  class Polygon {
    x: number;
    y: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    sides: number;
    color: string;
    opacity: number;
    originalX: number;
    originalY: number;
    pulseSpeed: number;
    pulseAmount: number;
    pulseOffset: number;

    constructor(x: number, y: number, size: number) {
      this.x = x;
      this.y = y;
      this.originalX = x;
      this.originalY = y;
      this.size = size;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.002;
      this.sides = Math.floor(Math.random() * 3) + 3; // 3 to 5 sides
      this.color = "#00ff41"; // Cyber green
      this.opacity = Math.random() * 0.3 + 0.15; // Increased opacity for brightness
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseAmount = Math.random() * 5 + 2;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }

    update(time: number) {
      // Subtle rotation
      this.rotation += this.rotationSpeed;

      // Gentle pulsing
      const pulse =
        Math.sin(time * this.pulseSpeed + this.pulseOffset) * this.pulseAmount;

      this.x = this.originalX + pulse;
      this.y = this.originalY + pulse;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      ctx.beginPath();
      for (let i = 0; i < this.sides; i++) {
        const angle = ((Math.PI * 2) / this.sides) * i;
        const x = Math.cos(angle) * this.size;
        const y = Math.sin(angle) * this.size;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Wireframe style with thicker lines for better visibility
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.5; // Increased line width
      ctx.stroke();

      ctx.restore();
    }
  }

  // Initialize polygons
  const initPolygons = (width: number, height: number) => {
    const polygons: Polygon[] = [];
    // Slightly increased polygon count since we removed interactivity
    const polygonCount = Math.min(70, Math.floor((width * height) / 20000));

    for (let i = 0; i < polygonCount; i++) {
      const size = Math.random() * 30 + 20;
      const x = Math.random() * width;
      const y = Math.random() * height;
      polygons.push(new Polygon(x, y, size));
    }

    return polygons;
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      if (width > 0 && height > 0 && !isInitializedRef.current) {
        polygonsRef.current = initPolygons(width, height);
        isInitializedRef.current = true;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Animation function
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw polygons
      polygonsRef.current.forEach((polygon) => {
        polygon.update(time * 0.001);
        polygon.draw(ctx);
      });

      // Draw connecting lines between nearby polygons
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 255, 65, 0.1)"; // Brighter connecting lines

      for (let i = 0; i < polygonsRef.current.length; i++) {
        const p1 = polygonsRef.current[i];

        for (let j = i + 1; j < polygonsRef.current.length; j++) {
          const p2 = polygonsRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Only connect nearby polygons
            ctx.globalAlpha = 0.1 * (1 - distance / 150); // Increased opacity
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
