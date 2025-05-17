"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
attribute float isGlowing;
uniform float uTime;
varying float vDepth;
varying float vIsGlowing;
varying vec3 vPosition;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  
  vDepth = -(viewMatrix * modelMatrix * vec4(position, 1.0)).z;
  vIsGlowing = isGlowing;
  vPosition = position;
  
  gl_Position = projectedPosition;
  gl_PointSize = isGlowing > 0.5 ? 6.0 : 2.0;
}
`;

const fragmentShader = `
uniform float uTime;
varying float vDepth;
varying float vIsGlowing;
varying vec3 vPosition;

void main() {
  float depth = smoothstep(5.0, 15.0, vDepth);
  vec3 baseColor = mix(vec3(1.0), vec3(0.3), depth);
  float alpha = mix(1.0, 0.1, depth);
  
  if (vIsGlowing > 0.5) {
    // Blinking effect for cyber green glow
    float blink = sin(uTime * 3.0 + vPosition.x * 10.0 + vPosition.y * 8.0 + vPosition.z * 6.0) * 0.5 + 0.5;
    vec3 glowColor = vec3(0.0, 1.0, 0.25) * blink;
    
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    float delta = fwidth(r);
    alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
    
    gl_FragColor = vec4(glowColor, alpha * 0.8);
  } else {
    gl_FragColor = vec4(baseColor, alpha * 0.8);
  }
}
`;

function CrystalPoints() {
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Generate crystal points
  const { positions, isGlowing } = useMemo(() => {
    const points = [];
    const glowingStatus = [];
    const numPoints = 10000; // More points for more detail

    // Create a crystal/diamond-like shape
    const createCrystalShape = () => {
      // Top pyramid
      const topHeight = 2.5;
      const baseRadius = 1.2;
      const topTip = [0, topHeight, 0];

      // Base vertices (pentagon)
      const baseVertices = [];
      const numSides = 5;
      for (let i = 0; i < numSides; i++) {
        const angle = ((Math.PI * 2) / numSides) * i;
        baseVertices.push([
          Math.cos(angle) * baseRadius,
          0,
          Math.sin(angle) * baseRadius,
        ]);
      }

      // Bottom pyramid
      const bottomHeight = -1.8;
      const bottomTip = [0, bottomHeight, 0];

      // Generate points for the crystal
      const crystalPoints = [];

      // Function to add points along a line
      const addPointsAlongLine = (
        start: number[],
        end: number[],
        numPoints: number
      ) => {
        for (let i = 0; i < numPoints; i++) {
          const t = i / numPoints;
          const x = start[0] + (end[0] - start[0]) * t;
          const y = start[1] + (end[1] - start[1]) * t;
          const z = start[2] + (end[2] - start[2]) * t;

          // Add some randomness for a more organic look
          const jitter = 0.05;
          const jx = (Math.random() - 0.5) * jitter;
          const jy = (Math.random() - 0.5) * jitter;
          const jz = (Math.random() - 0.5) * jitter;

          crystalPoints.push([x + jx, y + jy, z + jz]);
        }
      };

      // Add points for edges (from base to top tip)
      for (const vertex of baseVertices) {
        addPointsAlongLine(vertex, topTip, 200);
      }

      // Add points for edges (from base to bottom tip)
      for (const vertex of baseVertices) {
        addPointsAlongLine(vertex, bottomTip, 150);
      }

      // Add points for base edges
      for (let i = 0; i < baseVertices.length; i++) {
        const start = baseVertices[i];
        const end = baseVertices[(i + 1) % baseVertices.length];
        addPointsAlongLine(start, end, 100);
      }

      // Add some random points inside the crystal for volume
      for (let i = 0; i < 5000; i++) {
        // Random barycentric coordinates for triangles
        const u = Math.random();
        const v = Math.random() * (1 - u);
        const w = 1 - u - v;

        // Pick random triangle (either to top or bottom)
        const useTop = Math.random() > 0.5;
        const tip = useTop ? topTip : bottomTip;

        // Pick two random adjacent base vertices
        const idx = Math.floor(Math.random() * baseVertices.length);
        const v1 = baseVertices[idx];
        const v2 = baseVertices[(idx + 1) % baseVertices.length];

        // Compute point inside triangle
        const x = u * tip[0] + v * v1[0] + w * v2[0];
        const y = u * tip[1] + v * v1[1] + w * v2[1];
        const z = u * tip[2] + v * v1[2] + w * v2[2];

        crystalPoints.push([x, y, z]);
      }

      return crystalPoints;
    };

    const crystalPoints = createCrystalShape();

    // Convert to flat array and set glowing status
    for (const point of crystalPoints) {
      points.push(point[0], point[1], point[2]);
      // About 8% of points are glowing for highlights
      glowingStatus.push(Math.random() < 0.08 ? 1.0 : 0.0);
    }

    return {
      positions: new Float32Array(points),
      isGlowing: new Float32Array(glowingStatus),
    };
  }, []);

  // Animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate slowly around Y axis
      meshRef.current.rotation.y += delta * 0.1;

      // Subtle wobble
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-isGlowing"
          count={isGlowing.length}
          array={isGlowing}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </points>
  );
}

export default function CyberCrystal() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <CrystalPoints />
      </Canvas>
    </div>
  );
}
