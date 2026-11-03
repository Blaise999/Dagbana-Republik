import EditorialImage from '@/components/EditorialImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { artists } from '@/data/site';
import { ArrowUpRight } from '@/components/Icons';
import ArtistWordmark from '@/components/ArtistWordmark';

export const metadata: Metadata = { title: 'The Artists' };

export default function ArtistsPage() {
  return <>
    <section className="interior-hero interior-hero--artists"><div className="interior-topline"><span>THE REPUBLIK</span><span>OUR PEOPLE, OUR SOUND</span></div><div><p className="page-eyebrow">THIS IS THE ROSTER</p><h1>Meet the artists.</h1><p className="interior-hero__description">Distinct voices. Different journeys. One shared home for the music.</p></div></section>
    <div className="artist-directory section-pad"><div className="section-topline"><span>MEET THE MOVEMENT</span><span>THE STORY STARTS WITH THE ARTISTS</span></div>{artists.map((artist, i) => <Link href={`/artists/${artist.slug}`} key={artist.slug} className={`directory-artist directory-artist--${i}`}><div className="directory-artist__image"><EditorialImage src={artist.image} fallback="/images/editorial-fallback.svg" alt={`Editorial promotional portrait of ${artist.name}`} /></div><div><span className="directory-artist__role">{artist.eyebrow}</span><h2><ArtistWordmark artist={artist.name}/></h2><p>{artist.intro}</p></div><span className="directory-artist__arrow"><ArrowUpRight/></span></Link>)}</div>
  </>;
}
