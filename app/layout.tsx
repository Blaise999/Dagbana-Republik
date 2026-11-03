import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KineticMotion from '@/components/KineticMotion';
import './globals.css';
import './refinements.css';
import './v5.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dagbana.vercel.app'),
  title: { default: 'Dagbana Republik — Website Concept', template: '%s | Dagbana Republik' },
  description: 'An independent website concept for Dagbana Republik, featuring Bella Shmurda, FOLA, music and the movement.',
  robots: { index: false, follow: false },
  icons: { icon: "/images/dagbana-favicon.png", apple: "/images/dagbana-favicon.png" },
  openGraph: { title: 'Dagbana Republik — Website Concept', description: 'The music. The artists. The Republik.', images: ['/images/hero-desktop.webp'] },
};
export const viewport: Viewport = { themeColor: '#111311', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><KineticMotion /><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
