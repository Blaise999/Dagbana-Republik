'use client';
import { useCallback, useEffect, useState } from 'react';
import SpotlightDeck from './SpotlightDeck';
import { spotlightArtists } from '@/data/experience';

export default function VideoSpotlight({ full = false }: { full?:boolean }) {
  const [activeArtist, setActiveArtist] = useState(spotlightArtists[0]?.slug ?? 'bella');
  const [manualSelection, setManualSelection] = useState(false);
  useEffect(() => {
    if (manualSelection || spotlightArtists.length < 2) return;
    const timer = window.setInterval(() => {
      if (document.hidden || window.matchMedia('(max-width:900px)').matches) return;
      setActiveArtist(current => spotlightArtists[(spotlightArtists.findIndex(item => item.slug === current) + 1) % spotlightArtists.length].slug);
    }, 40000);
    return () => window.clearInterval(timer);
  }, [manualSelection]);
  const activate = useCallback((slug: string, manual = false) => {
    setActiveArtist(slug);
    if (manual) setManualSelection(true);
  },[]);
  return <section id="spotlights" className={`spotlights-section ${full ? 'spotlights-section--full' : ''}`}>
    <div className="spotlights-header">
      <div className="spotlights-header__tiny"><span>THE SCREENING ROOM</span><span>OFFICIAL MUSIC VIDEOS</span></div>
      <div className="spotlights-header__title" data-reveal>
        <div><p>FROM THE REPUBLIK</p><h2>Watch the music.</h2></div>
        <p className="spotlights-header__summary">Bella Shmurda and FOLA, on screen. The videos play automatically when in view, without interrupting you with sound.</p>
      </div>
    </div>
    <div className="spotlight-decks">
      {spotlightArtists.map(artist => <SpotlightDeck key={artist.slug} artist={artist} active={activeArtist === artist.slug} onActivate={activate} />)}
    </div>
    <div className="spotlights-bottom"><span>AUTOPLAY STARTS MUTED · SOUND AVAILABLE ON TAP</span><span>ONE PLAYER ACTIVE AT A TIME</span></div>
  </section>;
}
