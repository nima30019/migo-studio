'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { soundFx } from '@/utils/audio';
import { Locale } from '@/data/translations';
import { Sparkles, RotateCw, Layers, Shield, Cpu, Sliders } from 'lucide-react';

interface Interactive3DLabProps {
  locale: Locale;
}

export const Interactive3DLab: React.FC<Interactive3DLabProps> = ({ locale }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMaterial, setActiveMaterial] = useState<'orange' | 'carbon' | 'holo' | 'gold'>('orange');
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const modelRef = useRef<{
    mesh?: THREE.Mesh;
    ringsGroup?: THREE.Group;
    light?: THREE.PointLight;
  }>({});

  useEffect(() => {
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
    camera.position.set(0, 0, 5.5);

    const group = new THREE.Group();
    scene.add(group);

    // Geometry: Complex TorusKnot (simulating an intricate robotic component or VR spatial emblem)
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      roughness: 0.2,
      metalness: 0.9,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    group.add(knotMesh);
    modelRef.current.mesh = knotMesh;

    // Surrounding gimbal rings
    const ringsGroup = new THREE.Group();
    group.add(ringsGroup);
    modelRef.current.ringsGroup = ringsGroup;

    const ring1Geo = new THREE.TorusGeometry(2.1, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xFF781F, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ringsGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2;
    ringsGroup.add(ring2);

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(amb);

    const pointLight = new THREE.PointLight(0xFF781F, 3, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);
    modelRef.current.light = pointLight;

    const fillLight = new THREE.DirectionalLight(0x3B82F6, 1.5);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    // Mouse Drag Rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onUp = () => (isDragging = false);
    const onMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      group.rotation.y += dx * 0.01;
      group.rotation.x += dy * 0.01;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    container.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const t = clock.getElapsedTime();

      if (autoRotate && !isDragging) {
        group.rotation.y += 0.008;
        group.rotation.x = Math.sin(t * 0.5) * 0.2;
      }

      ringsGroup.rotation.z = t * 0.3;
      ringsGroup.rotation.x = -t * 0.2;

      renderer.render(scene, camera);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
      knotGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
    };
  }, [autoRotate]);

  const setMaterialType = (mat: 'orange' | 'carbon' | 'holo' | 'gold') => {
    setActiveMaterial(mat);
    soundFx.playClick();
    const mesh = modelRef.current.mesh;
    if (!mesh) return;

    if (mat === 'orange') {
      mesh.material = new THREE.MeshStandardMaterial({
        color: 0xFF781F,
        roughness: 0.2,
        metalness: 0.9,
        wireframe,
      });
    } else if (mat === 'carbon') {
      mesh.material = new THREE.MeshStandardMaterial({
        color: 0x15191F,
        roughness: 0.4,
        metalness: 0.8,
        wireframe,
      });
    } else if (mat === 'holo') {
      mesh.material = new THREE.MeshStandardMaterial({
        color: 0x00E5FF,
        emissive: 0x007799,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: true,
      });
    } else if (mat === 'gold') {
      mesh.material = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        roughness: 0.15,
        metalness: 0.95,
        wireframe,
      });
    }
  };

  const toggleWireframe = () => {
    const nextState = !wireframe;
    setWireframe(nextState);
    soundFx.playClick();
    const mesh = modelRef.current.mesh;
    if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
      mesh.material.wireframe = nextState;
    }
  };

  return (
    <div className="rounded-3xl bg-[#15191F] border border-[#28303B] overflow-hidden relative shadow-2xl">
      <div className="p-6 sm:p-8 border-b border-[#28303B] flex flex-wrap items-center justify-between gap-4 bg-[#0B0D10]/50">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'MIGO Interactive WebGL Engine' : 'موتور تعاملی وب‌جی‌ال استودیو'}</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            {locale === 'en' ? 'Real-Time 3D Shader & Physics Sandbox' : 'میز کار سه‌بعدی و شیدر ریل‌تایم'}
          </h3>
          <p className="text-xs text-[#A0A6B0]">
            {locale === 'en'
              ? 'Click & drag the 3D model below to test our lightweight WebGL pipeline.'
              : 'مدل سه‌بعدی را بچرخانید و متریال‌ها را تغییر دهید تا روانی و کیفیت رندرینگ وب ما را بسنجید.'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Materials */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0B0D10] border border-[#28303B]">
            <button
              onClick={() => setMaterialType('orange')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeMaterial === 'orange' ? 'bg-brand-orange text-white' : 'text-[#A0A6B0] hover:text-white'
              }`}
            >
              Orange
            </button>
            <button
              onClick={() => setMaterialType('carbon')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeMaterial === 'carbon' ? 'bg-[#28303B] text-white' : 'text-[#A0A6B0] hover:text-white'
              }`}
            >
              Carbon
            </button>
            <button
              onClick={() => setMaterialType('holo')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeMaterial === 'holo' ? 'bg-cyan-500 text-black' : 'text-[#A0A6B0] hover:text-white'
              }`}
            >
              Cyber
            </button>
            <button
              onClick={() => setMaterialType('gold')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeMaterial === 'gold' ? 'bg-amber-400 text-black' : 'text-[#A0A6B0] hover:text-white'
              }`}
            >
              Gold
            </button>
          </div>

          {/* Wireframe toggle */}
          <button
            onClick={toggleWireframe}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              wireframe ? 'bg-brand-orange text-white border-brand-orange' : 'bg-[#0B0D10] border-[#28303B] text-[#A0A6B0] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>

          {/* Auto rotate toggle */}
          <button
            onClick={() => {
              setAutoRotate(!autoRotate);
              soundFx.playClick();
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              autoRotate ? 'bg-brand-orange/20 border-brand-orange text-brand-orange' : 'bg-[#0B0D10] border-[#28303B] text-[#A0A6B0]'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Auto Orbit</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div
        ref={mountRef}
        className="w-full h-80 sm:h-96 cursor-grab active:cursor-grabbing bg-gradient-to-b from-[#0B0D10] to-[#15191F]"
      />

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-4 left-6 text-[10px] font-mono text-[#6B7280]">
        <span>CLICK + DRAG TO INSPECT // 60 FPS SHADER ENGINE</span>
      </div>
    </div>
  );
};
