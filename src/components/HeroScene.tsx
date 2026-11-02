'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    // Group for the entire central emblem
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Abstract Geometric Polyhedron (representing MIGO core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0B0D10,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Wireframe overlay in orange
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xFF781F,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // 2. Iconic Orbiting Ring (inspired directly by MIGO logo orbit)
    const ringGeometry = new THREE.TorusGeometry(2.5, 0.04, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0xFF781F,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.9,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh);

    // Second counter ring
    const ring2Geometry = new THREE.TorusGeometry(2.9, 0.02, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0xFF9E59,
      transparent: true,
      opacity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // 3. Orbiting Satellite Sphere (as seen on the MIGO logo orbit!)
    const satelliteGeometry = new THREE.SphereGeometry(0.18, 32, 32);
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0xFF9E59,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    mainGroup.add(satelliteMesh);

    // 4. Background Starfield / Particle Dust
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFF781F,
      size: 0.05,
      transparent: true,
      opacity: 0.45,
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const orangePointLight = new THREE.PointLight(0xFF781F, 3.5, 20);
    orangePointLight.position.set(4, 3, 4);
    scene.add(orangePointLight);

    const blueSubtleLight = new THREE.PointLight(0x2A323D, 2.0, 20);
    blueSubtleLight.position.set(-4, -3, 2);
    scene.add(blueSubtleLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth dampening towards mouse target
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.04;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.04;

      // Continuous subtle idle rotations
      coreMesh.rotation.y = elapsedTime * 0.2;
      coreMesh.rotation.x = elapsedTime * 0.1;
      wireframeMesh.rotation.y = elapsedTime * 0.2;
      wireframeMesh.rotation.x = elapsedTime * 0.1;

      ringMesh.rotation.z = elapsedTime * 0.35;
      ring2Mesh.rotation.z = -elapsedTime * 0.25;

      // Orbit satellite along the main ring
      const orbitSpeed = elapsedTime * 0.9;
      const orbitRadius = 2.5;
      satelliteMesh.position.x = Math.cos(orbitSpeed) * orbitRadius;
      satelliteMesh.position.y = Math.sin(orbitSpeed) * orbitRadius * Math.sin(Math.PI / 3);
      satelliteMesh.position.z = Math.sin(orbitSpeed) * orbitRadius * Math.cos(Math.PI / 3);

      particlePoints.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      ringGeometry.dispose();
      ring2Geometry.dispose();
      satelliteGeometry.dispose();
      particleGeometry.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Three.js Container */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Static Fallback Backdrop Glow in case WebGL is disabled or on low-end devices */}
      {!webglSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-brand-orange/20 filter blur-3xl animate-pulse" />
        </div>
      )}
    </div>
  );
};
