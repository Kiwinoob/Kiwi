"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

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
    gl_PointSize = isGlowing > 0.5 ? 4.0 : 1.5;
  }
`

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
      // Create a blinking effect
      float blinkSpeed = 2.0 + sin(vPosition.x * 10.0 + vPosition.y * 8.0 + vPosition.z * 6.0) * 1.5;
      float blink = sin(uTime * blinkSpeed) * 0.5 + 0.5;
      vec3 glowColor = vec3(0.0, 1.0, 0.25) * blink; // #00ff41
      
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);
      alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      
      gl_FragColor = vec4(glowColor, alpha);
    } else {
      gl_FragColor = vec4(baseColor, alpha);
    }
  }
`

function PointSphere() {
  const meshRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  // Generate sphere points with improved distribution and random glowing points
  const { positions, isGlowing } = useMemo(() => {
    const points = []
    const glowingStatus = []
    const radius = 1.5
    const numPoints = 5000

    const goldenRatio = (1 + Math.sqrt(5)) / 2
    const angleIncrement = Math.PI * 2 * goldenRatio

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints
      const inclination = Math.acos(1 - 2 * t)
      const azimuth = angleIncrement * i

      const x = radius * Math.sin(inclination) * Math.cos(azimuth)
      const y = radius * Math.sin(inclination) * Math.sin(azimuth)
      const z = radius * Math.cos(inclination)

      points.push(x, y, z)

      // Randomly set some points as glowing (about 2% of points)
      glowingStatus.push(Math.random() < 0.02 ? 1.0 : 0.0)
    }

    return {
      positions: new Float32Array(points),
      isGlowing: new Float32Array(glowingStatus),
    }
  }, [])

  // Animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1 // Slower rotation
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-isGlowing" count={isGlowing.length} array={isGlowing} itemSize={1} />
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
  )
}

export default function GlowingSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <PointSphere />
      </Canvas>
    </div>
  )
}

