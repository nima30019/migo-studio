'use client';

import React from 'react';
import { Locale } from '@/data/translations';
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface StudioStatsMarqueeProps {
  locale: Locale;
}

export const StudioStatsMarquee: React.FC<StudioStatsMarqueeProps> = ({ locale }) => {
  const marqueeItems = [
    'VIRTUAL REALITY (VR/MR)',
    'KINETIC EXHIBITION WALLS',
    'ZERO-INSTALL WEBAR',
    'SERIOUS GAMES & SIMULATION',
    'TOUCHDESIGNER SENSORS',
    'PHOTOREAL 3D CONFIGURATORS',
    'PHYSICAL COMPUTING',
    'REAL-TIME SHADERS',
    'UNREAL ENGINE 5',
    'UNITY SPATIAL XR',
  ];

  const stats = [
    {
      val: '60 / 120',
      unit: 'FPS',
      title: { en: 'Smooth Real-time Rendering', fa: 'نرخ فریم ریل‌تایم پایدار' },
      icon: Zap,
    },
    {
      val: '< 4.5',
      unit: 'MB',
      title: { en: 'Compressed WebAR Bundles', fa: 'حجم فوق‌العاده بهینه WebAR' },
      icon: Activity,
    },
    {
      val: '100%',
      unit: 'Turnkey',
      title: { en: 'Software & Hardware Deployment', fa: 'اجرای صفر تا صد سخت‌افزار و نرم‌افزار' },
      icon: ShieldCheck,
    },
    {
      val: '0',
      unit: 'Risk',
      title: { en: 'Hazardous Training Elimination', fa: 'حذف کامل خطرات جانی در شبیه‌سازی' },
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Infinite Seamless Ticker */}
      <div className="w-full overflow-hidden border-y border-[#28303B]/60 bg-[#0B0D10]/80 py-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0D10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0D10] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-8 items-center text-xs sm:text-sm font-mono font-bold tracking-widest text-[#A0A6B0]">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-white hover:text-brand-orange transition-colors">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            </span>
          ))}
        </div>
      </div>

      {/* 4 Impact Stat Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/60 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-4xl font-extrabold font-mono text-white">
                    {stat.val}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                    {stat.unit}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A0A6B0]">
                  <Icon className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{stat.title[locale]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
