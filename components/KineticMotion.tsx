'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Reveal sections every time a Next.js route changes (not only on first load). */
export default function KineticMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('revealed'));
      document.body.classList.remove('motion-enabled');
      return;
    }
    document.body.classList.add('motion-enabled');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }), {threshold: .04, rootMargin: '0px 0px -18px 0px'});
    targets.forEach(el => observer.observe(el));
    return () => { observer.disconnect(); document.body.classList.remove('motion-enabled'); };
  }, [pathname]);
  return null;
}
