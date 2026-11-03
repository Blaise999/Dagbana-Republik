import EditorialImage from '@/components/EditorialImage';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/Icons';
export const metadata: Metadata = { title: 'The Republik' };
export default function RepublikPage() {
  return <><section className="interior-hero interior-hero--story"><div className="interior-topline"><span>THE REPUBLIK</span><span>ROOTS. SOUND. MOVEMENT.</span></div><div><p className="page-eyebrow">THIS IS THE STORY</p><h1>The Republik.</h1><p className="interior-hero__description">A home for music that means something and for the people who make it move.</p></div></section>
    <section className="story-intro section-pad"><div className="section-topline"><span>THE STORY SO FAR</span><span>EST. 2021 / NIGERIA</span></div><div className="story-intro__grid"><div><h2>Where it began.</h2><p>Founded by Bella Shmurda in 2021, Dangbana Republik grew from an artist-led identity into an independent Nigerian music label and creative collective. Its evolving story connects the energy of Bella’s music with the rising voice of FOLA.</p></div></div></section>
    <section className="story-film"><EditorialImage src="https://pbs.twimg.com/media/GZnBrheWMA8DLBH.jpg" fallback="/images/editorial-fallback.svg" alt="Bella Shmurda and FOLA photographed together" /><div><span>THE ENERGY IS DIFFERENT HERE.</span><h2>From Lagos to everywhere.</h2></div></section>
    <section className="values-section section-pad"><div className="section-topline"><span>WHAT MOVES US</span><span>THREE WORDS / ONE MOVEMENT</span></div><div className="values-grid"><div><span>01</span><h3>THE<br />SOUND.</h3><p>A place for voices with something real to say.</p></div><div><span>02</span><h3>THE<br />PEOPLE.</h3><p>Artists, listeners and the culture that connects them.</p></div><div><span>03</span><h3>THE<br />FUTURE.</h3><p>Building what comes next without losing where it began.</p></div></div><Link className="text-link" href="/artists">EXPLORE THE ARTISTS <ArrowUpRight/></Link></section>
  </>;
}
