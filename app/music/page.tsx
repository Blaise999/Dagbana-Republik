import type { Metadata } from 'next';
import MusicFilter from '@/components/MusicFilter';
export const metadata: Metadata = { title: 'The Music' };
export default function MusicPage() {
  return <><section className="interior-hero interior-hero--music"><div className="interior-topline"><span>THE REPUBLIK</span><span>THE SOUND NEVER STOPS</span></div><div><p className="page-eyebrow">SELECTED RELEASES / 2024 — 2026</p><h1>The discography.</h1><p className="interior-hero__description">The records, the collaborations, the moments. Follow the sound.</p></div></section><section className="catalogue-section section-pad"><div className="section-topline"><span>THE CATALOGUE</span><span>CLICK A RELEASE TO LISTEN</span></div><MusicFilter/></section></>;
}
