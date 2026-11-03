import './globals.css';
import { Metadata } from 'next';
import { getBaseUrl, SITE_CONFIG } from '@/utils/seo';

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'MIGO | Creative Technology Studio',
    template: '%s | MIGO',
  },
  description: SITE_CONFIG.description.en,
  keywords: [
    'MIGO Studio',
    'Creative Technology',
    'Virtual Reality',
    'Augmented Reality',
    'Interactive Exhibitions',
    'Game Development',
    '3D Visualization',
    'WebAR',
    'Industrial Simulation',
  ],
  authors: [{ name: 'MIGO Creative Technology Studio' }],
  icons: {
    icon: '/migo-logo-transparent.png',
    apple: '/migo-logo-transparent.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
