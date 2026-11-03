'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { SpotlightArtist, SpotlightVideo } from '@/data/experience';
import YouTubeSpotlightPlayer from './YouTubeSpotlightPlayer';
import ArtistWordmark from './ArtistWordmark';

const PREVIEW_INTERVAL = 16000;
function shuffle<T,>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function SpotlightDeck({artist, active, onActivate}: {
  artist: SpotlightArtist;
  active: boolean;
  onActivate: (slug: string, manual?: boolean) => void;
}) {
  const [order, setOrder] = useState<SpotlightVideo[]>(artist.videos);
  const [inView, setInView] = useState(false);
  const [explicitPlay, setExplicitPlay] = useState(false);
  const [auto, setAuto] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => { if (!active || !inView) setSoundOn(false); }, [active, inView]);
  const root = useRef<HTMLDivElement>(null);
  const rotations = useRef(0);

  useEffect(() => { setOrder(shuffle(artist.videos)); }, [artist.videos]);
  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && entry.intersectionRatio >= .2;
      setInView(visible);
      // On a phone the decks are stacked: play whichever deck the visitor reaches.
      if (visible && window.matchMedia('(max-width:900px)').matches) onActivate(artist.slug);
    }, { threshold: [.2,.5], rootMargin: '0px' });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [artist.slug, onActivate]);
  // Idle decks still change their cover and next-three queue occasionally.
  useEffect(() => {
    if (active && inView || !auto || !inView || document.hidden || explicitPlay) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setOrder(previous => {
        if (previous.length < 2) return previous;
        rotations.current++;
        return rotations.current % previous.length === 0 ? shuffle(previous) : [...previous.slice(1), previous[0]];
      });
    }, PREVIEW_INTERVAL);
    return () => window.clearInterval(timer);
  }, [active, auto, explicitPlay, inView]);

  const saveData = typeof navigator !== 'undefined' && Boolean((navigator as Navigator & {connection?: {saveData?: boolean}}).connection?.saveData);
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shouldPlay = active && inView && (explicitPlay || (!saveData && !reducedMotion && auto));
  const current = order[0];
  if (!current) return null;
  const nextThree = order.slice(1,4);
  const advance = () => setOrder(prev => prev.length < 2 ? prev : [...prev.slice(1), prev[0]]);
  const select = (video: SpotlightVideo) => {
    setOrder(prev => [video, ...prev.filter(item => item.id !== video.id)]);
    setExplicitPlay(true);
    setBlocked(false);
    onActivate(artist.slug, true);
  };
  const next = () => { advance(); setBlocked(false); onActivate(artist.slug, true); setExplicitPlay(true); };
  const open = () => { setExplicitPlay(true); setBlocked(false); onActivate(artist.slug, true); };

  return <div ref={root} className={`spotlight-deck spotlight-deck--${artist.slug}`}>
    <div className="spotlight-deck__head">
      <div className="spotlight-deck__head-left"><div><p>ARTIST SPOTLIGHT</p><h3 className="spotlight-name"><ArtistWordmark artist={artist.name}/></h3></div></div>
      <span className="spotlight-live">{shouldPlay ? 'NOW PLAYING' : 'MUSIC VIDEO ARCHIVE'}</span>
    </div>
    <div className="spotlight-stage">
      {shouldPlay && !blocked ? <YouTubeSpotlightPlayer key={artist.slug} videoId={current.id} title={current.title} onEnded={advance} onClose={() => {setExplicitPlay(false);setAuto(false);}} onBlocked={() => setBlocked(true)} soundOn={soundOn} onSoundChange={value => { setSoundOn(value); if(value) onActivate(artist.slug,true); }} /> : <button type="button" className="spotlight-cover" onClick={open} aria-label={`Play ${current.title} by ${artist.name}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image className="spotlight-cover__img" src={`https://i.ytimg.com/vi/${current.id}/hqdefault.jpg`} alt="" width={640} height={360} sizes="(max-width: 900px) 92vw, 44vw" quality={70} loading="lazy" />
        <span className="spotlight-play"><span>▶</span></span>
        <span className="spotlight-frame-label">PLAY VIDEO</span>
      </button>}
    </div>
    <div className="spotlight-now">
      <div><span className="spotlight-now__label">{current.year} / OFFICIAL VIDEO</span><h4 key={current.id}>{current.title}</h4><p>{current.credit}</p></div>
      <div className="spotlight-now__actions">
        <a href={`https://www.youtube.com/watch?v=${current.id}`} target="_blank" rel="noreferrer" className="youtube-link" aria-label={`Watch ${current.title} on YouTube`}>YOUTUBE ↗</a>
        <button type="button" className="spotlight-next" onClick={next}>NEXT ↗</button>
      </div>
    </div>
    <div className="spotlight-queue">
      <div className="spotlight-queue__head"><span>COMING UP · {String(nextThree.length).padStart(2,'0')}</span><button type="button" aria-pressed={auto} onClick={() => { setAuto(value => !value); setExplicitPlay(false); }}>{auto ? 'AUTO ON' : 'AUTO OFF'}</button></div>
      {nextThree.map((video,i) => <button className="spotlight-nextrow" key={video.id} type="button" onClick={() => select(video)}>
        
        <span className="spotlight-nextrow__thumb"><Image src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`} alt="" width={180} height={100} sizes="95px" quality={65} loading="lazy" /></span>
        <span className="spotlight-nextrow__meta"><strong>{video.title}</strong><small>{video.credit}</small></span>
        <span className="spotlight-nextrow__arr">↗</span>
      </button>)}
    </div>
  </div>;
}
