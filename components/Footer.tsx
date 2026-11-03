import Link from 'next/link';
import { ArrowUpRight } from './Icons';
import { socials } from '@/data/site';

export default function Footer() {
  return <footer className="footer">
    <div className="footer-top"><div className="footer-label"><span className="signal-dot"/> FROM THE STREETS. TO THE WORLD.</div><div className="footer-links"><Link href="/artists">Artists</Link><Link href="/music">Music</Link><Link href="/visuals">Videos</Link><Link href="/journal">Journal</Link><Link href="/merch">Merch</Link><Link href="/tour">Tour</Link><Link href="/republik">Story</Link><Link href="/contact">Contact</Link><a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight /></a></div></div>
    <div className="footer-brand-display"><img src="/images/dagbana-emblem.webp" width="190" height="190" alt="Dagbana Republik wheel-and-floral emblem" loading="lazy"/><Link className="footer-wordmark" href="/" aria-label="Home">DAGBANA <span>REPUBLIK</span></Link></div>
    <div className="footer-bottom"><span>REPUBLIK / LAGOS, NIGERIA</span><span>INDEPENDENT WEBSITE CONCEPT — NOT AN OFFICIAL LABEL WEBSITE.</span><span>© 2026 Blaisetechh</span></div>
  </footer>;
}
