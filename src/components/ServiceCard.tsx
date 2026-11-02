'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/data/services';
import { Locale, UI_STRINGS } from '@/data/translations';
import { TiltCard } from './TiltCard';
import { soundFx } from '@/utils/audio';
import {
  Glasses,
  Scan,
  Gamepad2,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Glasses,
  Scan,
  Gamepad2,
  Sparkles,
  Layers,
  Activity,
  Cpu,
};

interface ServiceCardProps {
  service: ServiceItem;
  locale: Locale;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, locale }) => {
  const IconComponent = ICON_MAP[service.icon] || Sparkles;
  const isRTL = locale === 'fa';

  return (
    <TiltCard maxTilt={8} className="rounded-3xl h-full">
      <div className="group h-full rounded-3xl bg-[#15191F]/80 backdrop-blur-md border border-[#28303B] hover:border-brand-orange/60 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl">
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -right-16 -top-16 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-all pointer-events-none" />

        <div>
          {/* Top Bar with Icon & Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#0B0D10] border border-[#28303B] flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:border-brand-orange group-hover:shadow-[0_0_20px_rgba(255,120,31,0.4)] transition-all duration-300">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-brand-orange bg-[#0B0D10] px-3 py-1 rounded-full border border-[#28303B]">
              {service.badge[locale]}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-brand-orange transition-colors">
            {service.title[locale]}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#A0A6B0] leading-relaxed mb-6 font-light">
            {service.shortDescription[locale]}
          </p>

          {/* Capabilities Checklist Preview */}
          <div className="space-y-2 mb-8 pt-4 border-t border-[#28303B]/60">
            {service.capabilities[locale].slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A0A6B0]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0 shadow-[0_0_8px_#FF781F]" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <Link
          href={`/${locale}/services/${service.slug}`}
          onMouseEnter={() => soundFx.playHover()}
          onClick={() => soundFx.playClick()}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-brand-orange transition-colors cursor-pointer"
        >
          <span>{UI_STRINGS.learnMore[locale]}</span>
          <ArrowRight
            className={`w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform ${
              isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : ''
            }`}
          />
        </Link>
      </div>
    </TiltCard>
  );
};
