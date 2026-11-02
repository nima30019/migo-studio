'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/translations';
import { TiltCard } from './TiltCard';

interface BrandHeroShowcaseProps {
  locale: Locale;
}

export const BrandHeroShowcase: React.FC<BrandHeroShowcaseProps> = ({ locale }) => {
  return (
    <div className="relative my-8 sm:my-10 flex flex-col items-center">
      {/* Background Volumetric Orange Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[520px] h-[220px] sm:h-[320px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* 3D Perspective Card enclosing the Official MIGO Emblem */}
      <TiltCard maxTilt={8} className="rounded-3xl p-4 sm:p-6 bg-[#0B0D10]/75 backdrop-blur-md border border-[#28303B]/80 hover:border-brand-orange/60 shadow-[0_0_50px_rgba(255,120,31,0.25)]">
        <div className="relative w-[300px] sm:w-[480px] md:w-[560px] aspect-[16/9] flex items-center justify-center">
          <Image
            src="/migo-logo-transparent.png"
            alt="MIGO Interactive Experiences Studio Official Logo"
            fill
            className="object-contain drop-shadow-[0_10px_35px_rgba(255,120,31,0.45)]"
            priority
          />

          {/* Hologram Corner Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-orange" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-orange" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-orange" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-orange" />
        </div>
      </TiltCard>

      {/* Floor Orange Horizon Reflection */}
      <div className="w-64 sm:w-96 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent blur-[1px] shadow-[0_0_25px_#FF781F] mt-3" />
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#A0A6B0] mt-3">
        {locale === 'en' ? 'PHYSICAL SENSORS • REAL-TIME 3D • SPATIAL VR' : 'سنسورهای فیزیکی • وب سه‌بعدی • واقعیت مجازی'}
      </span>
    </div>
  );
};
