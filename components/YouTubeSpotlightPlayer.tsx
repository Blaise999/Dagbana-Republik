'use client';
import { useEffect, useRef, useState } from 'react';

// Official YouTube iframe API. A player mounts only when its spotlight is visible.
type PlayerInstance = {
  loadVideoById(videoId: string): void;
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  destroy(): void;
};
type YTNamespace = {
  Player: new (element: HTMLElement, options: {
    videoId: string;
    playerVars: Record<string, string | number>;
    events: {
      onReady: (event: {target: PlayerInstance}) => void;
      onStateChange: (event: {data: number}) => void;
      onError?: (event: {data: number}) => void;
      onAutoplayBlocked?: () => void;
    }
  }) => PlayerInstance;
};
declare global {
  interface Window { YT?: YTNamespace; onYouTubeIframeAPIReady?: () => void; }
}
let ytAPI: Promise<YTNamespace> | null = null;
function loadAPI(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!ytAPI) {
    ytAPI = new Promise((resolve,reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { previous?.(); if (window.YT?.Player) resolve(window.YT); else reject(new Error('YouTube API unavailable')); };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => reject(new Error('YouTube cannot be reached'));
      document.head.appendChild(script);
    });
  }
  return ytAPI;
}
export default function YouTubeSpotlightPlayer({videoId,title,onEnded,onClose,onBlocked,soundOn,onSoundChange}:{
  videoId:string; title:string; onEnded:()=>void; onClose:()=>void; onBlocked:()=>void;
  soundOn:boolean; onSoundChange:(soundOn:boolean)=>void;
}) {
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<PlayerInstance|null>(null);
  const current = useRef(videoId);
  const onEndedRef = useRef(onEnded);
  const [failed,setFailed] = useState(false);
  const [ready,setReady] = useState(false);
  useEffect(() => { onEndedRef.current = onEnded; },[onEnded]);
  useEffect(() => { if (player.current && current.current !== videoId) {current.current=videoId; player.current.loadVideoById(videoId);} },[videoId]);
  useEffect(() => {
    let live = true;
    loadAPI().then(YT => {
      if (!live || !host.current) return;
      const node = document.createElement('div');
      host.current.appendChild(node);
      player.current = new YT.Player(node, {
        videoId: current.current,
        playerVars: { autoplay:0, playsinline:1, controls:1, rel:0, origin:window.location.origin },
        events: {
          onReady: event => {
            if(!live) return;
            event.target.mute(); // Browsers generally block unsolicited autoplay with sound.
            event.target.playVideo();
            setReady(true);
          },
          onStateChange: event => { if(live && event.data === 0) onEndedRef.current(); },
          onError: () => { if(live) setFailed(true); },
          onAutoplayBlocked: () => { if(live) onBlocked(); },
        },
      });
    }).catch(() => { if(live) setFailed(true); });
    return () => {
      live = false;
      try {player.current?.destroy();} catch {}
      player.current = null;
      host.current?.replaceChildren();
    };
  }, []);
  useEffect(() => {
    if(!ready || !player.current) return;
    if(soundOn) player.current.unMute(); else player.current.mute();
  }, [ready,soundOn]);
  return <div className="spotlight-player">
    <div ref={host} className="spotlight-player__mount" aria-label={`${title} YouTube video player`} />
    {failed && <div className="spotlight-player__error"><p>The video could not load here.</p><a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a></div>}
    <div className="spotlight-player__controls">
      <button type="button" onClick={() => onSoundChange(!soundOn)} aria-pressed={soundOn} disabled={!ready}>{soundOn ? 'SOUND ON ◖))' : 'SOUND OFF · TAP TO LISTEN'}</button>
      <button type="button" onClick={onClose}>CLOSE</button>
    </div>
  </div>;
}
