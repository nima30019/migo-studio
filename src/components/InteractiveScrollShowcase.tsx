'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Locale } from '@/data/translations';
import {
  Glasses,
  Sparkles,
  Scan,
  Activity,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

interface InteractiveScrollShowcaseProps {
  locale: Locale;
}

export const InteractiveScrollShowcase: React.FC<InteractiveScrollShowcaseProps> = ({ locale }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<number>(0);
  const isRTL = locale === 'fa';

  const pillars = [
    {
      id: 'vr',
      tag: '01 // SPATIAL VR',
      title: {
        en: 'Standalone Spatial VR & MR Architectures',
        fa: 'معماری پیشرفته واقعیت مجازی و ترکیبی',
      },
      desc: {
        en: 'Precision inside-out neural tracking, spatial audio reverberation, and sub-millimeter physics interactions engineered for Meta Quest, Pico, and PC-VR rigs.',
        fa: 'رهگیری دقیق دست و چشم، محاسبات آکوستیک صدای فضایی و فیزیک میلی‌متری برای هدست‌های پیشرفته مستقل Meta Quest، Pico و سیستم‌های PC-VR.',
      },
      specs: [
        { label: { en: 'Framerate Target', fa: 'نرخ فریم هدف' }, val: '90 / 120 FPS' },
        { label: { en: 'Physics Latency', fa: 'تاخیر تعامل فیزیکی' }, val: '< 11 ms' },
        { label: { en: 'Supported Ecosystems', fa: 'پلتفرم‌های سازگار' }, val: 'OpenXR / Meta' },
      ],
      link: `/${locale}/services/virtual-reality`,
      icon: Glasses,
      color: '#FF781F',
    },
    {
      id: 'exhibitions',
      tag: '02 // KINETIC TECH',
      title: {
        en: 'Multi-Sensor Kinetic Exhibition Walls',
        fa: 'دیوارهای حرکتی تعاملی و سنسورهای نمایشگاهی',
      },
      desc: {
        en: 'Turnkey interactive projection installations utilizing Azure Kinect depth cameras, LiDAR arrays, and generative GLSL shaders that stop convention foot traffic.',
        fa: 'سیستم‌های نمایشگاهی تعاملی با سنسورهای عمق‌سنج فروسرخ، رادارهای LiDAR و شیدرهای دینامیک که پای هر بازدیدکننده‌ای را به داخل غرفه می‌کشانند.',
      },
      specs: [
        { label: { en: 'Sensor Tracking', fa: 'فناوری رهگیری' }, val: 'LiDAR + Depth' },
        { label: { en: 'Dwell Time Boost', fa: 'افزایش ماندگاری در غرفه' }, val: '+ 420%' },
        { label: { en: 'System Stability', fa: 'پایداری مداوم' }, val: '99.9% Uptime' },
      ],
      link: `/${locale}/services/interactive-exhibitions`,
      icon: Sparkles,
      color: '#FFA86B',
    },
    {
      id: 'webar',
      tag: '03 // INSTANT 3D',
      title: {
        en: 'Zero-Install WebAR & 3D Configurators',
        fa: 'واقعیت افزوده وب (WebAR) بدون نیاز به نصب',
      },
      desc: {
        en: 'Lightweight WebGL pipelines delivering luxury 3D product visualization directly inside mobile Chrome & Safari at 60 FPS from a simple camera QR scan.',
        fa: 'پایپ‌لاین فوق‌العاده سبک WebGL که مدل‌های سه‌بعدی لوکس و ریل‌تایم را بدون نصب هیچ برنامه‌ای تنها با اسکن کد QR در مرورگر موبایل اجرا می‌کند.',
      },
      specs: [
        { label: { en: 'Asset Payload', fa: 'حجم بهینه فایل' }, val: '< 4.5 MB' },
        { label: { en: 'Device Compatibility', fa: 'پشتیبانی دیوایس‌ها' }, val: 'iOS & Android' },
        { label: { en: 'Drop-off Reduction', fa: 'کاهش ریزش مخاطب' }, val: '- 75%' },
      ],
      link: `/${locale}/services/augmented-reality`,
      icon: Scan,
      color: '#FF9E59',
    },
    {
      id: 'simulation',
      tag: '04 // CRITICAL SIM',
      title: {
        en: 'Mission-Critical Industrial Simulators',
        fa: 'شبیه‌سازهای صنعتی و آموزش ایمنی (HSE)',
      },
      desc: {
        en: 'Simulating hazardous petrochemical emergency valve sequences, high-voltage equipment, and refinery logistics with full error evaluation logging.',
        fa: 'شبیه‌سازی حوادث خطوط لوله نفتی، قطعی اضطراری شیرها و کار با تجهیزات پرخطر صنعتی بدون هیچ‌گونه ریسک جانی یا استهلاک ماشین‌آلات.',
      },
      specs: [
        { label: { en: 'Disaster Risk', fa: 'ریسک خطرات جانی' }, val: 'Zero (0%)' },
        { label: { en: 'LMS Telemetry', fa: 'ارزیابی کارنامه' }, val: 'SCORM / xAPI' },
        { label: { en: 'Operator Retention', fa: 'ماندگاری آموزش' }, val: '3.2x Higher' },
      ],
      link: `/${locale}/services/simulation`,
      icon: Activity,
      color: '#FF6B08',
    },
  ];

  // 3D Object references for smooth transition
  const sceneStateRef = useRef<{
    mesh?: THREE.Mesh;
    ring?: THREE.Mesh;
    targetRotationY: number;
    targetScale: number;
    targetEmissive: THREE.Color;
  }>({
    targetRotationY: 0,
    targetScale: 1,
    targetEmissive: new THREE.Color(0xFF781F),
  });

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

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 4.8);

    const group = new THREE.Group();
    scene.add(group);

    // Sculptural artifact representing engineering precision
    const geom = new THREE.IcosahedronGeometry(1.3, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x151922,
      emissive: 0xFF781F,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);
    sceneStateRef.current.mesh = mesh;

    // Glowing wireframe contour
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFF781F,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const wire = new THREE.Mesh(geom, wireMat);
    group.add(wire);

    // Orbital ring
    const ringGeo = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xFF781F,
      emissive: 0xFF781F,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);
    sceneStateRef.current.ring = ring;

    // Light
    const amb = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(amb);

    const key = new THREE.DirectionalLight(0xFF781F, 3.0);
    key.position.set(3, 4, 3);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x3B82F6, 1.5);
    fill.position.set(-3, -2, -2);
    scene.add(fill);

    // Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth interpolation to target states
      group.rotation.y += (sceneStateRef.current.targetRotationY - group.rotation.y) * 0.05 + 0.003;
      group.rotation.x = Math.sin(t * 0.4) * 0.15;

      ring.rotation.z = t * 0.25;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  // Update 3D orientation when switching pillars
  const handlePillarChange = (idx: number) => {
    setActivePillar(idx);
    sceneStateRef.current.targetRotationY = idx * (Math.PI / 2);
  };

  const current = pillars[activePillar];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>{locale === 'en' ? 'ENGINEERING BENCHMARK' : 'بخش‌های تخصصی و مهندسی استودیو'}</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          {locale === 'en' ? (
            <>
              Interactive Technology <span className="text-gradient-orange">Dissected</span>
            </>
          ) : (
            <>
              کالبدشکافی فناوری‌های <span className="text-gradient-orange">تعاملی MIGO</span>
            </>
          )}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
          {locale === 'en'
            ? 'Explore how we combine spatial computing, hardware sensors, and real-time 3D pipelines into cohesive digital experiences.'
            : 'بررسی نحوه تلفیق رایانش فضایی، سنسورهای سخت‌افزاری و شیدرهای ریل‌تایم در قالب راهکارهای یکپارچه دیجیتال.'}
        </p>
      </div>

      {/* Main 2-Column Interactive Showcase Container */}
      <div className="rounded-3xl bg-[#0F1217] border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Navigation Switcher Tabs (Inspired by Apple / Resend) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08] bg-[#0A0C10]">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => handlePillarChange(idx)}
                className={`p-4 sm:p-5 text-start transition-all cursor-pointer flex flex-col justify-between border-b-2 sm:border-b-0 sm:border-r border-white/[0.06] last:border-r-0 ${
                  isActive
                    ? 'bg-[#151922] border-b-brand-orange text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono tracking-wider text-brand-orange font-semibold">
                    {p.tag}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-orange' : 'text-neutral-500'}`} />
                </div>
                <span className="text-xs sm:text-sm font-semibold line-clamp-1">{p.title[locale]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body & 3D Interactive Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Column: Narrative & Technical Telemetry */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  {current.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white mb-4 leading-tight">
                {current.title[locale]}
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light mb-8">
                {current.desc[locale]}
              </p>

              {/* Technical Telemetry Badges (Apple-style precision) */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-[#161B22]/70 border border-white/[0.04]">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                      {spec.label[locale]}
                    </span>
                    <span className="block text-sm font-bold text-white font-mono">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep-dive Link */}
            <div className="mt-8 pt-4">
              <Link
                href={current.link}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors cursor-pointer group"
              >
                <span>{locale === 'en' ? 'View Technical Specifications' : 'بررسی مشخصات فنی و نمونه پروژه‌ها'}</span>
                <ArrowRight
                  className={`w-4 h-4 group-hover:translate-x-1.5 transition-transform ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : ''
                  }`}
                />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Performance 3D Real-time Canvas */}
          <div className="lg:col-span-5 relative bg-gradient-to-b from-[#0B0D12] to-[#121620] border-t lg:border-t-0 lg:border-l border-white/[0.06] flex items-center justify-center min-h-[320px] lg:min-h-full">
            {/* Subtle background ambient light */}
            <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

            {/* Three.js Canvas Container */}
            <div ref={mountRef} className="w-full h-full min-h-[340px]" />

            {/* Technical HUD Corner Labels */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-500 flex items-center gap-2 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>REAL-TIME DISCIPLINE VIEWPORT</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500 pointer-events-none">
              <span>MIGO // 3D KINEMATICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
