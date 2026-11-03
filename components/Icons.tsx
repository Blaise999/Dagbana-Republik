import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 19 19 5M7 5h12v12" /></svg>;
}

export function ArrowRight(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>;
}

export function PlayIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="m8 5 12 7-12 7V5Z" /></svg>;
}

export function PauseIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>;
}
