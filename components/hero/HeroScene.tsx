"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

/* ─── Constants ─── */
const LERP_FACTOR = 0.03;
const BREATH_SPEED = 1 / 6;       // full cycle = 6 seconds
const BREATH_MIN = 0.98;
const BREATH_MAX = 1.02;
const ROT_Y = 0.0015;
const ROT_X = 0.0008;
const TERRACOTTA = new THREE.Color("#D85C3E");

/* ─── Types ─── */
interface ShapeProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

/* ─── Faceted crystal ─── */
function Crystal({ isMobile, reducedMotion }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const scrollSpeed = useRef(0);
  const lastScroll = useRef(0);
  const { viewport } = useThree();

  // MeshPhysicalMaterial — jewel/glass feel
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#1A1A1F"),
        metalness: 0.6,
        roughness: 0.2,
        clearcoat: 0.4,
        clearcoatRoughness: 0.1,
        transmission: 0.3,
        ior: 1.5,
        thickness: 1.2,
        envMapIntensity: 1.4,
      }),
    [],
  );

  // Mouse tracking (desktop only)
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, reducedMotion]);

  // Scroll velocity tracking
  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      const y = window.scrollY;
      scrollSpeed.current = Math.abs(y - lastScroll.current) * 0.002;
      lastScroll.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  useFrame(() => {
    if (!meshRef.current || reducedMotion) return;

    // Smooth mouse follow
    if (!isMobile) {
      smoothMouse.current.x +=
        (mouse.current.x - smoothMouse.current.x) * LERP_FACTOR;
      smoothMouse.current.y +=
        (mouse.current.y - smoothMouse.current.y) * LERP_FACTOR;

      meshRef.current.position.x =
        smoothMouse.current.x * (viewport.width * 0.1);
      meshRef.current.position.y =
        smoothMouse.current.y * (viewport.height * 0.06);
    }

    // Rotation — base speed + scroll boost
    const scrollBoost = Math.min(scrollSpeed.current, 0.4);
    meshRef.current.rotation.y += ROT_Y + scrollBoost * 0.01;
    meshRef.current.rotation.x += ROT_X;

    // Decay scroll speed
    scrollSpeed.current *= 0.95;

    // Scale breathing (sine wave, 6s period)
    const t = performance.now() * 0.001 * BREATH_SPEED;
    const breath =
      BREATH_MIN +
      (BREATH_MAX - BREATH_MIN) * (0.5 + 0.5 * Math.sin(t * Math.PI * 2));
    meshRef.current.scale.setScalar(breath);
  });

  const detail = isMobile ? 1 : 2;

  return (
    <mesh ref={meshRef} material={material}>
      <icosahedronGeometry args={[1.8, detail]} />
    </mesh>
  );
}

/* ─── Scene wrapper ─── */
function Scene({ isMobile, reducedMotion }: ShapeProps) {
  return (
    <>
      {/* Environment map for reflections */}
      <Environment preset="studio" />

      {/* Key light — warm white, top-right */}
      <directionalLight
        position={[4, 5, 3]}
        intensity={1.5}
        color="#FFF5E6"
      />

      {/* Fill light — cool blue tint, bottom-left */}
      <directionalLight
        position={[-4, -3, -2]}
        intensity={0.4}
        color="#A8C4E0"
      />

      {/* Rim light — terracotta tint, behind object, creates glow edge */}
      <directionalLight
        position={[0, 1, -5]}
        intensity={2.0}
        color={TERRACOTTA}
      />

      {/* Terracotta accent — bottom-left, subtle warm rim on visible edge */}
      <directionalLight
        position={[-5, -3, 1]}
        intensity={1.2}
        color={TERRACOTTA}
      />

      <Crystal isMobile={isMobile} reducedMotion={reducedMotion} />
    </>
  );
}

/* ─── Public Canvas component ─── */
export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const checkEnv = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    checkEnv();
    window.addEventListener("resize", checkEnv, { passive: true });
    return () => window.removeEventListener("resize", checkEnv);
  }, [checkEnv]);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      shadows={false}
      style={{ background: "transparent" }}
    >
      <Scene isMobile={isMobile} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
