import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://migo-studio.com'),
  title: 'MIGO | Creative Technology Studio',
  description:
    'MIGO designs and develops immersive digital experiences, interactive exhibitions, VR/AR, serious games, and photorealistic 3D simulations.',
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
  openGraph: {
    title: 'MIGO | Creative Technology Studio',
    description: 'We Create Interactive Experiences. From Virtual Reality to Interactive Worlds.',
    url: 'https://migo-studio.com',
    siteName: 'MIGO Studio',
    images: [
      {
        url: '/migo-logo.png',
        width: 1200,
        height: 630,
        alt: 'MIGO Creative Technology Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/migo-logo.png',
    apple: '/migo-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
