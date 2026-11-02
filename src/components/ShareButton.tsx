'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Locale } from '@/data/translations';

interface ShareButtonProps {
  locale: Locale;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ locale }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-lg bg-[#15191F] border border-[#28303B] hover:border-brand-orange text-xs text-white flex items-center gap-1.5 transition-colors cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-brand-orange">
            {locale === 'en' ? 'Copied!' : 'کپی شد!'}
          </span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-brand-orange" />
          <span>{locale === 'en' ? 'Copy Link' : 'کپی لینک'}</span>
        </>
      )}
    </button>
  );
};
