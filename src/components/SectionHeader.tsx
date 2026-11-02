import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'center' | 'start';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-start'
      } ${className}`}
    >
      {badge && (
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/20 mb-3">
          {badge}
        </div>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#A0A6B0] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
