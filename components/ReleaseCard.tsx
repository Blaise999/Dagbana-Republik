'use client';
import { useEffect, useState } from 'react';
import type { Release } from '@/data/site';
import { ArrowUpRight } from './Icons';
import Image from 'next/image';

export default function ReleaseCard({ release }: { release: Release }) {
  const [opened,setOpened]=useState(false);
  const [imageFailed,setImageFailed]=useState(false);
  useEffect(()=>{
    if(!opened)return;
    const old=document.body.style.overflow;document.body.style.overflow='hidden';
    const onEsc=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpened(false)};
    window.addEventListener('keydown',onEsc);
    return ()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onEsc)};
  },[opened]);
  const appleEmbed = release.appleId ? `https://embed.music.apple.com/us/album/${release.appleId}` : undefined;
  const spotifyEmbed = release.spotifyId ? `https://open.spotify.com/embed/album/${release.spotifyId}?utm_source=generator` : undefined;
  return <>
    <article className="release-card release-card--real">
      <button className={`release-art cover-${release.theme}`} type="button" onClick={()=>setOpened(true)} aria-label={`Play ${release.title} by ${release.artist}`}>
        <span className="release-art__back">DANGBANA<br/>REPUBLIK<br/><small>OFFICIAL RELEASE / {release.year}</small></span>
        {!imageFailed && <Image className="release-art__image" src={release.artwork} onError={()=>setImageFailed(true)} alt={`Official cover artwork for ${release.title} by ${release.artist}`} width={900} height={900} sizes="(max-width: 650px) 88vw, (max-width: 1100px) 45vw, 30vw" quality={78} loading="lazy"/>}
        <span className="release-art__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19"><path d="m9 5 10 7-10 7z"/></svg></span>
        
      </button>
      <div className="release-meta"><div><strong>{release.title}</strong><span>{release.artist}</span></div><div><span>{release.type} · {release.year}</span><button className="release-open" onClick={()=>setOpened(true)} aria-label={`Play ${release.title}`}>Listen ↗</button></div></div>
    </article>
    {opened && <div className="release-dialog" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setOpened(false)}}>
      <section className="release-dialog__panel" role="dialog" aria-modal="true" aria-label={`${release.title} music player`}>
        <div className="release-dialog__top"><span>NOW PLAYING / DANGBANA DISCOGRAPHY</span><button type="button" onClick={()=>setOpened(false)} aria-label="Close release player">CLOSE ✕</button></div>
        <div className="release-dialog__main"><div className="release-dialog__art"><img src={release.artwork} alt={`${release.title} album artwork`}/></div><div className="release-dialog__information"><span>{release.type} / {release.year}</span><h3>{release.title}</h3><p>{release.artist}</p><div className="release-dialog__services"><a href={release.url} target="_blank" rel="noopener noreferrer">OPEN IN {release.url.includes('spotify.com')?'SPOTIFY':'APPLE MUSIC'} ↗</a>{release.spotifyUrl&&<a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer">SPOTIFY ↗</a>}</div></div></div>
        {(spotifyEmbed||appleEmbed) && <iframe className="release-dialog__embed" title={`Listen to ${release.title}`} src={spotifyEmbed||appleEmbed} loading="lazy" allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" />}
        {release.tracks && <details className="release-dialog__tracks"><summary>VIEW FULL TRACKLIST ({release.tracks.length})</summary><ol>{release.tracks.map((track,i)=><li key={track}><span>{String(i+1).padStart(2,'0')}</span>{track}</li>)}</ol></details>}
        <p className="release-dialog__note">Full playback depends on the listener’s streaming subscription and regional availability. Artwork and music © their respective rights holders.</p>
      </section>
    </div>}
  </>;
}
