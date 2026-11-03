import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import ReleaseCard from '@/components/ReleaseCard';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { artists, releases } from '@/data/site';
import VideoSpotlight from '@/components/VideoSpotlight';
import PhotoDrift from '@/components/PhotoDrift';
import NewsWall from '@/components/NewsWall';
import WorldTeasers from '@/components/WorldTeasers';
import ArtistWordmark from '@/components/ArtistWordmark';
import EditorialImage from '@/components/EditorialImage';

export default function Home() {
  return <>
    <section className="hero" aria-label="Dangbana Republik introduction">
      <HeroVideo />
      <div className="hero-topline"><span><i/> EST. 2021 / LAGOS, NIGERIA</span><span>THE SOUND OF THE REPUBLIK</span></div>
      <div className="hero-content">
        <div className="hero-brand-seal" aria-label="Dangbana Republik label emblem"><div className="hero-brand-seal__orbit" aria-hidden="true">DR • LAGOS • 2021 • THE MOVEMENT •</div><img src="/images/dagbana-emblem.webp" width="152" height="152" alt="Dangbana Republik wheel and floral logo" /></div>
        <p className="hero-kicker hero-kicker--desktop">BELLA SHMURDA · FOLA · THE REPUBLIK</p><p className="hero-kicker hero-kicker--mobile">ONE SOUND. MANY STORIES. NO LIMITS.</p>
        <h1><span>DANGBANA</span><em>REPUBLIK</em></h1>
        <div className="hero-bottomline hero-bottomline--desktop"><p>Independent sound. Global ambition.</p><Link href="/artists" className="hero-discover">Explore the artists <ArrowUpRight/></Link></div><div className="hero-bottomline hero-bottomline--mobile"><p>MORE THAN A LABEL.<br />IT&apos;S A MOVEMENT.</p><Link href="/artists" className="circle-arrow" aria-label="Explore our artists"><ArrowUpRight/></Link><p className="hero-counter">BELLA SHMURDA / FOLA <span>001 — 002</span></p></div>
      </div>
      <div className="scroll-prompt"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
    </section>

    

    <section className="manifesto section-pad">
      <div className="section-topline"><span>THE STORY</span><span>ROOTED IN CULTURE. BUILT TO MOVE.</span></div>
      <div className="manifesto-grid"><div className="manifesto-side"><span>INDEPENDENT IN SPIRIT.<br />UNLIMITED IN SOUND.</span></div><div className="manifesto-body" data-reveal><h2>More than music.</h2><p>Born from Nigerian street culture, Dangbana Republik is home to fearless voices, honest stories and music that travels beyond borders.</p><Link className="text-link" href="/republik">Discover the Republik <ArrowUpRight /></Link></div></div>
    </section>

    <section className="roster section-pad" id="artists">
      <div className="section-topline"><span>THE ARTISTS</span><span>THE FACES BEHIND THE SOUND</span></div>
      <div className="roster-title" data-reveal><h2>Meet the artists.</h2><p>Bella Shmurda and FOLA.<br />Two voices. One home.</p></div>
      <div className="artist-grid">{artists.map(artist => <Link key={artist.slug} href={`/artists/${artist.slug}`} className={`artist-tile artist-tile--${artist.className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <EditorialImage src={artist.image} fallback="/images/editorial-fallback.svg" alt={`Editorial promotional portrait of ${artist.name}`} />
        <div className="artist-tile__veil"/><div className="artist-tile__top"><span>THE ROSTER</span><span>{artist.eyebrow}</span></div>
        <div className="artist-tile__bottom"><h3><ArtistWordmark artist={artist.name}/></h3><span className="artist-tile__circle"><ArrowUpRight/></span></div>
      </Link>)}</div>
      <div className="roster-foot"><span>THE STORY IS STILL BEING WRITTEN.</span><Link href="/artists">MEET THE ARTISTS <ArrowRight /></Link></div>
    </section>

    <section className="music-section section-pad" id="music">
      <div className="section-topline"><span>NEW AND NOTABLE</span><span>THE RECORDS SPEAK FOR THEMSELVES</span></div>
      <div className="section-heading-row" data-reveal><h2>Explore releases.</h2><p className="music-section__subline">The records behind the movement. Explore, discover, listen.</p><Link className="pill-link" href="/music">Explore all releases <ArrowUpRight/></Link></div>
      <div className="home-release-stage"><div className="release-grid release-grid--featured">{releases.slice(0,3).map(release => <ReleaseCard key={release.title} release={release} />)}</div></div>
    </section>

    <VideoSpotlight />

    <PhotoDrift />

    <NewsWall />

    <WorldTeasers />

    <section className="end-cta"><div className="end-cta__top"><span>STAY CONNECTED</span><span>DANGBANA REPUBLIK</span></div><p>Stay with the Republik.</p><div className="end-cta__bottom"><span>KEEP UP WITH THE MUSIC, THE CULTURE AND EVERYTHING IN BETWEEN.</span><Link href="/contact" className="cta-link">GET IN TOUCH <ArrowUpRight/></Link></div></section>
  </>;
}
