'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from './Icons';

const routes = [
  ['/', 'Home'],
  ['/artists', 'Artists'],
  ['/music', 'Music'],
  ['/visuals', 'Videos'],
  ['/journal', 'Journal'],
  ['/merch', 'Merch'],
  ['/tour', 'Tour'],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return <>
    <header className={`site-header ${scrolled || pathname !== '/' ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <Link className="brand" href="/" aria-label="Dangbana Republik, home">
        <Image className="brand-logo" src="/images/dagbana-emblem.webp" alt="" width={58} height={58} priority />
        <span className="brand-words"><strong>DANGBANA</strong><em>REPUBLIK</em></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {routes.map(([href, title]) => <Link key={href} href={href} className={pathname === href || (href === '/artists' && pathname.startsWith('/artists/')) ? 'is-active' : ''}>{title}</Link>)}
      </nav>
      <Link href="/contact" className="header-contact">GET IN TOUCH <ArrowUpRight /></Link>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}><span/><span/></button>
    </header>
    <div id="mobile-navigation" className={`mobile-navigation ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="mobile-navigation__inner">
        {routes.map(([href, title], i) => <Link key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{title}<ArrowUpRight/></Link>)}
        <Link href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Contact<ArrowUpRight/></Link>
        <p>INDEPENDENT SITE CONCEPT · LAGOS, NG</p>
      </div>
    </div>
  </>;
}
