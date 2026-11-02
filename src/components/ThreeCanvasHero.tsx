'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { soundFx } from '@/utils/audio';
import { Eye, Layers, Sparkles, RotateCw, Volume2, VolumeX } from 'lucide-react';
import { Locale } from '@/data/translations';

interface ThreeCanvasHeroProps {
  locale: Locale;
}

export const ThreeCanvasHero: React.FC<ThreeCanvasHeroProps> = ({ locale }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<'solid' | 'wireframe' | 'particles'>('solid');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [interactiveRotation, setInteractiveRotation] = useState(true);

  // References to three objects to update live without re-mounting
  const sceneObjectsRef = useRef<{
    coreMesh?: THREE.Mesh;
    wireMesh?: THREE.Mesh;
    particles?: THREE.Points;
    mainGroup?: THREE.Group;
    ringMesh?: THREE.Mesh;
    ring2Mesh?: THREE.Mesh;
    satelliteMesh?: THREE.Mesh;
  }>({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Renderer setup
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
    camera.position.set(0, 0, 7.5);

    // Root Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    sceneObjectsRef.current.mainGroup = mainGroup;

    // --- 1. PROCEDURAL 3D M-SHAPED / POLYHEDRAL CORE (Inspired by MIGO logo) ---
    // We create a composite geometric structure with 2 angled pillars and chevron center resembling 'M'
    const mGroup = new THREE.Group();
    mainGroup.add(mGroup);

    // Core central faceted crystal
    const crystalGeo = new THREE.OctahedronGeometry(1.6, 2);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x15191F,
      roughness: 0.15,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(crystalGeo, crystalMat);
    mGroup.add(coreMesh);
    sceneObjectsRef.current.coreMesh = coreMesh;

    // Wireframe overlay in vibrant orange
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFF781F,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const wireMesh = new THREE.Mesh(crystalGeo, wireMat);
    mGroup.add(wireMesh);
    sceneObjectsRef.current.wireMesh = wireMesh;

    // Outer geometric chevron ring segments
    const chevronGeo = new THREE.TorusGeometry(1.9, 0.08, 6, 4);
    const chevronMat = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0x803500,
      roughness: 0.2,
      metalness: 0.8,
    });
    const chevronMesh = new THREE.Mesh(chevronGeo, chevronMat);
    chevronMesh.rotation.z = Math.PI / 4;
    mGroup.add(chevronMesh);

    // --- 2. ICONIC MIGO ORBITAL RING & SATELLITE (Exact signature from user's logo) ---
    // Elliptical inclined main orbit ring
    const ringGeo = new THREE.TorusGeometry(2.6, 0.05, 16, 120);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0xFF781F,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.95,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.8;
    ringMesh.rotation.y = Math.PI / 5;
    mainGroup.add(ringMesh);
    sceneObjectsRef.current.ringMesh = ringMesh;

    // Secondary subtle cosmic ring
    const ring2Geo = new THREE.TorusGeometry(3.1, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xFF9E59,
      transparent: true,
      opacity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 3;
    ring2Mesh.rotation.y = -Math.PI / 6;
    mainGroup.add(ring2Mesh);
    sceneObjectsRef.current.ring2Mesh = ring2Mesh;

    // Orbiting Satellite Sphere with intense orange glow
    const satGeo = new THREE.SphereGeometry(0.22, 32, 32);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xFF9E59,
      emissive: 0xFF781F,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.9,
    });
    const satelliteMesh = new THREE.Mesh(satGeo, satMat);
    mainGroup.add(satelliteMesh);
    sceneObjectsRef.current.satelliteMesh = satelliteMesh;

    // Glowing PointLight attached right on the satellite sphere!
    const satelliteLight = new THREE.PointLight(0xFF781F, 4, 8);
    satelliteMesh.add(satelliteLight);

    // --- 3. DYNAMIC PARTICLE NEBULA ---
    const pCount = 350;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    const pScales = new Float32Array(pCount);

    for (let i = 0; i < pCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 14;
      pPositions[i + 1] = (Math.random() - 0.5) * 14;
      pPositions[i + 2] = (Math.random() - 0.5) * 10;
      pScales[i / 3] = Math.random();
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xFF781F,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
    sceneObjectsRef.current.particles = particles;

    // --- 4. LIGHTING ---
    const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambLight);

    const keyLight = new THREE.DirectionalLight(0xFF781F, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x3B82F6, 1.2);
    rimLight.position.set(-5, -3, -2);
    scene.add(rimLight);

    // --- 5. INTERACTION & SCROLL SYSTEM ---
    let targetRotX = 0;
    let targetRotY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = -(e.clientY / window.innerHeight) * 2 + 1;
        targetRotY = normX * 0.35;
        targetRotX = normY * 0.35;
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Transformation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Scroll influences camera and rotation
      const scrollProgress = Math.min(scrollY / 1000, 1.5);
      camera.position.z = 7.5 + scrollProgress * 2.2;
      camera.position.y = -scrollProgress * 1.5;

      // Smooth damping
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;

      // Continuous rotation
      mGroup.rotation.y = elapsed * 0.25;
      mGroup.rotation.x = Math.sin(elapsed * 0.5) * 0.15;

      ringMesh.rotation.z = elapsed * 0.4;
      ring2Mesh.rotation.z = -elapsed * 0.2;

      // Orbit Satellite around ellipse
      const orbitSpeed = elapsed * 1.1;
      const r = 2.6;
      satelliteMesh.position.x = Math.cos(orbitSpeed) * r;
      satelliteMesh.position.y = Math.sin(orbitSpeed) * r * Math.sin(Math.PI / 2.8);
      satelliteMesh.position.z = Math.sin(orbitSpeed) * r * Math.cos(Math.PI / 2.8);

      particles.rotation.y = elapsed * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crystalGeo.dispose();
      ringGeo.dispose();
      ring2Geo.dispose();
      satGeo.dispose();
      pGeo.dispose();
    };
  }, []);

  // Update render mode in live Three.js scene
  const changeMode = (mode: 'solid' | 'wireframe' | 'particles') => {
    setRenderMode(mode);
    soundFx.playClick();
    const { coreMesh, wireMesh, particles } = sceneObjectsRef.current;
    if (coreMesh && wireMesh && particles) {
      if (mode === 'solid') {
        coreMesh.visible = true;
        wireMesh.visible = true;
        particles.visible = true;
        (coreMesh.material as THREE.MeshStandardMaterial).wireframe = false;
      } else if (mode === 'wireframe') {
        coreMesh.visible = false;
        wireMesh.visible = true;
        (wireMesh.material as THREE.MeshBasicMaterial).opacity = 1.0;
        particles.visible = false;
      } else if (mode === 'particles') {
        coreMesh.visible = false;
        wireMesh.visible = false;
        particles.visible = true;
      }
    }
  };

  const toggleSound = () => {
    const isNowOn = soundFx.toggle();
    setSoundEnabled(isNowOn);
  };

  const isRTL = locale === 'fa';

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title={locale === 'en' ? 'Click & Drag to Rotate in 3D' : 'کلیک و درگ کنید تا سه‌بعدی بچرخد'}
      />

      {/* Floating Futuristic HUD Controls (Bottom Bar of Hero) */}
      <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
        {/* Left Side: Live Engine Coordinates & Status */}
        <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#0B0D10]/80 backdrop-blur-md border border-[#28303B] text-[11px] font-mono text-[#A0A6B0]">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-white font-semibold">MIGO // ENGINE 3D</span>
          <span className="text-[#6B7280]">|</span>
          <span className="text-brand-orange">WEBGL 2.0</span>
          <span className="text-[#6B7280]">|</span>
          <span>{locale === 'en' ? 'INTERACTIVE ORBIT' : 'مدار تعاملی فعال'}</span>
        </div>

        {/* Right Side: Mode Switcher Pills & Sound Toggle */}
        <div className="flex items-center gap-2 bg-[#0B0D10]/85 backdrop-blur-md p-1.5 rounded-xl border border-[#28303B]">
          <button
            onClick={() => changeMode('solid')}
            onMouseEnter={() => soundFx.playHover()}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              renderMode === 'solid'
                ? 'bg-brand-orange text-white shadow-glow-orange'
                : 'text-[#A0A6B0] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'PBR Solid' : 'سه‌بعدی جامد'}</span>
          </button>

          <button
            onClick={() => changeMode('wireframe')}
            onMouseEnter={() => soundFx.playHover()}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              renderMode === 'wireframe'
                ? 'bg-brand-orange text-white shadow-glow-orange'
                : 'text-[#A0A6B0] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'Wireframe' : 'وایر فریم'}</span>
          </button>

          <button
            onClick={() => changeMode('particles')}
            onMouseEnter={() => soundFx.playHover()}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              renderMode === 'particles'
                ? 'bg-brand-orange text-white shadow-glow-orange'
                : 'text-[#A0A6B0] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'Point Cloud' : 'موج ذرات'}</span>
          </button>

          <span className="w-[1px] h-4 bg-[#28303B] mx-1" />

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            title={locale === 'en' ? 'Toggle Audio Effects' : 'فعال‌سازی افکت‌های صوتی'}
            className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
              soundEnabled ? 'text-brand-orange bg-brand-orange/10' : 'text-[#6B7280] hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
