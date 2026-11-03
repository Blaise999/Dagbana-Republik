'use client';

import { useEffect, useRef, useState } from 'react';
import { PauseIcon, PlayIcon } from './Icons';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByVisitor = useRef(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browser autoplay is most reliable when both the attribute and the
    // DOM properties are muted before requesting playback (notably on iOS).
    video.defaultMuted = true;
    video.muted = true;

    const start = () => {
      if (pausedByVisitor.current || !video.paused) return;
      const request = video.play();
      if (request) {
        void request.catch(() => {
          // Some browsers/low-power modes block autoplay; leave the
          // play control available for a user-initiated retry.
          setPaused(true);
        });
      }
    };

    // Do not wait for a connection/reduced-data state check to mount the film.
    // The browser can start fetching the appropriate source immediately.
    start();
    video.addEventListener('canplay', start);

    const resumeIfAllowed = () => {
      if (!document.hidden) start();
    };
    document.addEventListener('visibilitychange', resumeIfAllowed);

    return () => {
      video.removeEventListener('canplay', start);
      document.removeEventListener('visibilitychange', resumeIfAllowed);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      pausedByVisitor.current = false;
      video.muted = true;
      void video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      pausedByVisitor.current = true;
      video.pause();
      setPaused(true);
    }
  }

  return (
    <div className="hero-media">
      <picture className="hero-poster">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-desktop.webp"
          alt="Cinematic still from the Dangbana video"
          fetchPriority="high"
        />
      </picture>
      <video
        ref={videoRef}
        className={`hero-video ${ready ? 'is-ready' : ''}`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster="/images/hero-desktop.webp"
        onPlaying={() => { setReady(true); setPaused(false); }}
        onPause={() => setPaused(true)}
        onError={() => setPaused(true)}
        aria-label="Dangbana Republik cinematic hero montage"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>
      <div className="hero-vignette" aria-hidden="true" />
      <button
        className="video-control"
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? 'Play hero video' : 'Pause hero video'}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
        <span>{paused ? 'PLAY FILM' : 'PAUSE FILM'}</span>
      </button>
    </div>
  );
}
