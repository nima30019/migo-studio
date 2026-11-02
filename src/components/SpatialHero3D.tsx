'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SpatialHero3DProps {
  className?: string;
}

export const SpatialHero3D: React.FC<SpatialHero3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 5.2);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- 1. Sculptural Morphing Spatial Core (Inspired by Lusion & MIGO Identity) ---
    // A delicate, high-precision geometric sculpture: TorusKnot with customized PBR material
    const coreGeometry = new THREE.TorusKnotGeometry(1.15, 0.28, 120, 24, 2, 3);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x12151B,
      emissive: 0x241103,
      emissiveIntensity: 0.4,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // --- 2. Fluid Glowing Orbital Ring with Satellite (MIGO's Signature Motif) ---
    // Smooth elliptical outer ring tilted at a dynamic angle
    const ringGeometry = new THREE.TorusGeometry(2.1, 0.025, 16, 120);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0xFF781F,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.7;
    ringMesh.rotation.y = Math.PI / 5.5;
    rootGroup.add(ringMesh);

    // Subtle counter-ring
    const ring2Geometry = new THREE.TorusGeometry(2.35, 0.012, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0xFFA059,
      transparent: true,
      opacity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2Mesh.rotation.x = -Math.PI / 3;
    ring2Mesh.rotation.y = -Math.PI / 6;
    rootGroup.add(ring2Mesh);

    // Orbiting Satellite Sphere with dynamic light (reproducing the exact MIGO logo orbit)
    const satGeometry = new THREE.SphereGeometry(0.12, 32, 32);
    const satMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF8829,
      emissive: 0xFF781F,
      emissiveIntensity: 1.5,
      roughness: 0.1,
      metalness: 0.9,
    });
    const satMesh = new THREE.Mesh(satGeometry, satMaterial);
    rootGroup.add(satMesh);

    // Satellite point light for localized dynamic highlights
    const satLight = new THREE.PointLight(0xFF781F, 2.5, 6);
    satMesh.add(satLight);

    // --- 3. Ambient Particle Nebula (High-Tech Spatial Dust) ---
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xFF781F,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 4. Professional Cinematic Studio Lighting (Lusion & Apple standard) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Primary Warm Studio Key Light
    const keyLight = new THREE.DirectionalLight(0xFF8829, 3.5);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);

    // Cool Cyber Rim Light (creating metallic edge definition)
    const rimLight = new THREE.DirectionalLight(0x4A6FFF, 1.8);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Top subtle white highlight
    const topLight = new THREE.PointLight(0xffffff, 1.5, 8);
    topLight.position.set(0, 4, 2);
    scene.add(topLight);

    // --- 5. Fluid Inertia & Mouse Tracking (Smooth Lusion-style dynamics) ---
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = normX * 0.45;
      targetY = normY * 0.35;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    setIsReady(true);

    // Render Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Damped spring motion towards mouse
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      rootGroup.rotation.y = currentX + elapsed * 0.22;
      rootGroup.rotation.x = currentY + Math.sin(elapsed * 0.4) * 0.12;

      // Sculptural mesh internal counter-twist
      coreMesh.rotation.y = elapsed * 0.15;
      coreMesh.rotation.z = Math.sin(elapsed * 0.3) * 0.1;

      // Orbiting satellite path
      const orbitSpeed = elapsed * 0.95;
      const radius = 2.1;
      satMesh.position.x = Math.cos(orbitSpeed) * radius;
      satMesh.position.y = Math.sin(orbitSpeed) * radius * Math.sin(Math.PI / 2.7);
      satMesh.position.z = Math.sin(orbitSpeed) * radius * Math.cos(Math.PI / 2.7);

      // Rings subtle precession
      ringMesh.rotation.z = elapsed * 0.25;
      ring2Mesh.rotation.z = -elapsed * 0.15;

      // Gentle floating particles
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      satGeometry.dispose();
      satMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
        isReady ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
};
