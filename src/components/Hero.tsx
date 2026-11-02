'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SpatialHero3D } from './SpatialHero3D';
import {
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Layers,
  Cpu,
  Activity,
  Globe2,
} from 'lucide-react';

interface HeroProps {
  locale: Locale;
}

export const Hero: React.FC<HeroProps> = ({ locale }) => {
  const isRTL = locale === 'fa';

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-glow">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#4A6FFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content / Typography) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* 1. Subtle Premium Studio Badge (With Mini Transparent Logo) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12151B]/90 border border-white/[0.1] shadow-inner backdrop-blur-md">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src="/migo-logo-transparent.png"
                  alt="MIGO"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
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
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-white leading-[1.12]">
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

            {/* 3. Authoritative Description */}
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

          {/* Right Column (3D Interactive Sculptural Showcase) - 5 cols */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Viewport Frame with Futuristic Tech Brackets */}
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-[#0E1117]/60 border border-white/[0.08] backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden group">
              
              {/* Corner Sci-Fi Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand-orange/60 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand-orange/60 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand-orange/60 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand-orange/60 z-20 pointer-events-none" />

              {/* Viewport HUD Header */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none text-[10px] font-mono text-neutral-400">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  MIGO_SPATIAL_ORBIT_V2
                </span>
                <span className="text-brand-orange font-semibold">PBR GLSL</span>
              </div>

              {/* Interactive 3D Canvas (Spatial Sculpture with Orbit Ring & Satellite) */}
              <div className="w-full h-full">
                <SpatialHero3D />
              </div>

              {/* Viewport HUD Footer */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none text-[10px] font-mono text-neutral-400">
                <span>INTERACTIVE 3D • MOUSE TRACKED</span>
                <span className="text-neutral-400">FPS: 60</span>
              </div>
            </div>

            {/* Subtle Reflection Glow */}
            <div className="absolute -bottom-6 w-3/4 h-8 bg-brand-orange/20 blur-2xl rounded-full pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce pointer-events-none">
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
};
