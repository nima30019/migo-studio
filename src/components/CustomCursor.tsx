'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on pointer devices (not touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth trail animation
  useEffect(() => {
    let animId: number;
    const animateTrail = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(animateTrail);
    };
    animId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer Glowing Ring */}
      <div
        className="fixed rounded-full border border-brand-orange/60 shadow-[0_0_15px_rgba(255,120,31,0.5)] transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          backgroundColor: isHovered ? 'rgba(255, 120, 31, 0.15)' : 'transparent',
        }}
      />
      {/* Center Precise Dot */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-brand-orange -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};
