'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SpatialHero3D } from './SpatialHero3D';
import { getAssetPath } from '@/utils/asset';
import {
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Activity,
  Cpu,
  Globe2,
  Maximize2,
} from 'lucide-react';

interface HeroProps {
  locale: Locale;
}

export const Hero: React.FC<HeroProps> = ({ locale }) => {
  const isRTL = locale === 'fa';
  const logoUrl = getAssetPath('/migo-logo-transparent.png');

  // Subtle 3D tilt interaction for the showcase card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-glow">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#4A6FFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content & Narrative) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* 1. Studio Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#12151B]/90 border border-white/[0.1] shadow-inner backdrop-blur-md">
              <img
                src={logoUrl}
                alt={locale === 'en' ? 'MIGO Studio Symbol' : 'نشان استودیو MIGO'}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/migo-studio/')) {
                    target.src = '/migo-studio/migo-logo-transparent.png';
                  }
                }}
              />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-orange">
                {locale === 'en' ? 'MIGO STUDIO' : 'استودیو MIGO'}
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-xs text-neutral-300 font-light">
                {locale === 'en' ? 'CREATIVE TECH & 3D' : 'فناوری‌های خلاق و سه‌بعدی'}
              </span>
            </div>

            {/* 2. Bold Taglines */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-white leading-[1.14]">
                {locale === 'en' ? (
                  <>
                    We Create <br />
                    <span className="text-gradient-orange">Interactive</span> Experiences.
                  </>
                ) : (
                  <>
                    ما تجربیات <span className="text-gradient-orange">تعاملی</span> <br />
                    خلق می‌کنیم.
                  </>
                )}
              </h1>
              
              <p className="text-base sm:text-lg font-medium text-brand-orange/90 font-mono">
                {locale === 'en'
                  ? '// From Virtual Reality to Interactive Worlds'
                  : '// از واقعیت مجازی تا جهان‌های تعاملی و سه‌بعدی'}
              </p>
            </div>

            {/* 3. Description */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed font-light">
              {locale === 'en'
                ? 'MIGO is an international creative technology studio merging cutting-edge spatial computing, virtual reality, game engines, and kinetic exhibition installations to build extraordinary brand engagements.'
                : 'استودیو فناوری خلاق MIGO با تلفیق گرافیک پیشرفته سه‌بعدی بی‌درنگ، فناوری‌های واقعیت مجازی و افزوده، شبیه‌سازها و چیدمان‌های تعاملی نمایشگاهی، تجربه‌های دیجیتال متمایز و اثرگذار خلق می‌کند.'}
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href={`/${locale}/work`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange hover:shadow-glow-orange-lg transition-all duration-300 text-sm group hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>{UI_STRINGS.exploreWork[locale]}</span>
                <ArrowUpRight
                  className={`w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${
                    isRTL ? 'rotate-[-90deg]' : ''
                  }`}
                />
              </Link>

              <Link
                href={`/${locale}/start-project`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#12151B]/90 hover:bg-[#1C212A] border border-white/[0.12] hover:border-brand-orange/60 backdrop-blur-md transition-all duration-300 text-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>{UI_STRINGS.startProject[locale]}</span>
              </Link>
            </div>

            {/* 5. Live Studio Capabilities / Telemetry Row */}
            <div className="pt-4 border-t border-white/[0.08] w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-orange" />
                  60+ FPS
                </span>
                <span className="text-[11px] text-neutral-400 font-light mt-0.5">
                  {locale === 'en' ? 'Real-Time WebGL' : 'رندر بی‌درنگ وب'}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                  XR Engine
                </span>
                <span className="text-[11px] text-neutral-400 font-light mt-0.5">
                  {locale === 'en' ? 'OpenXR & Unity' : 'واقعیت مجازی و انجین'}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-brand-orange" />
                  Turnkey
                </span>
                <span className="text-[11px] text-neutral-400 font-light mt-0.5">
                  {locale === 'en' ? 'Exhibition Tech' : 'سنسور و کیوسک نمایشگاهی'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: World-Class Interactive Studio Brand Stage - 5 cols */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Futuristic Studio Showcase Frame */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[480px] rounded-3xl bg-[#0D1016]/80 border border-white/[0.1] backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 flex flex-col items-center overflow-hidden group hover:border-brand-orange/40 transition-colors duration-500"
            >
              {/* Sci-Fi HUD Top Header */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-white/[0.06] text-[11px] font-mono text-neutral-400">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                  <span className="text-white font-semibold">MIGO STUDIO</span>
                </div>
                <span className="text-brand-orange font-mono">EST. 2024</span>
              </div>

              {/* Central Logo Stage with Volumetric Light Halo */}
              <div className="relative w-full py-8 sm:py-10 flex items-center justify-center">
                {/* Volumetric Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-brand-orange/25 rounded-full blur-[70px] pointer-events-none group-hover:bg-brand-orange/35 transition-all duration-500" />
                
                {/* Official MIGO Transparent Logo */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={logoUrl}
                    alt={
                      locale === 'en'
                        ? 'MIGO Creative Technology Studio Official 3D Emblem'
                        : 'نشان رسمی سه‌بعدی استودیو فناوری خلاق MIGO'
                    }
                    width={380}
                    height={180}
                    fetchPriority="high"
                    className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(255,120,31,0.4)]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/migo-studio/')) {
                        target.src = '/migo-studio/migo-logo-transparent.png';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Sci-Fi Floor Reflection Line */}
              <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent blur-[0.5px] shadow-[0_0_20px_#FF781F] mb-4" />

              {/* Stage Subtitle & Discipline Tags */}
              <div className="w-full text-center space-y-2">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-300 font-medium">
                  {locale === 'en'
                    ? 'REAL-TIME 3D • SPATIAL VR • KINETIC TECH'
                    : 'وب سه‌بعدی • واقعیت مجازی • تکنولوژی نمایشگاهی'}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">
                  {locale === 'en' ? 'INTERACTIVE EXPERIENCES STUDIO' : 'استودیو خلق تجربیات تعاملی'}
                </div>
              </div>

              {/* Subtle Tech Corner Accent Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand-orange/50 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand-orange/50 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand-orange/50 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand-orange/50 pointer-events-none" />
            </div>

            {/* Ambient Base Shadow Glow */}
            <div className="absolute -bottom-8 w-4/5 h-10 bg-brand-orange/20 blur-3xl rounded-full pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce pointer-events-none">
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
};
