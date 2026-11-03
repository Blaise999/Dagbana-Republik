import EditorialImage from '@/components/EditorialImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { artists, releases } from '@/data/site';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import ReleaseCard from '@/components/ReleaseCard';
import ArtistWordmark from '@/components/ArtistWordmark';

export function generateStaticParams() { return artists.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists.find(a => a.slug === slug);
  return { title: artist?.name ?? 'Artist' };
}

export default async function ArtistDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find(a => a.slug === slug);
  if (!artist) notFound();
  const relevant = releases.filter(r => r.filter === (slug === 'fola' ? 'fola' : 'bella') || r.filter === 'both').slice(0, 6);
  return <>
    <section className={`artist-profile-hero artist-profile-hero--${artist.className}`}><EditorialImage src={artist.image} fallback="/images/editorial-fallback.svg" alt={`Editorial promotional portrait of ${artist.name}`} /><div className="artist-profile-veil"/><div className="artist-profile-top"><span>THE REPUBLIK / THE ARTISTS</span></div><div className="artist-profile-title"><span>{artist.eyebrow}</span><h1><ArtistWordmark artist={artist.name}/></h1></div><span className="artist-profile-credit">PHOTO: {artist.imageCredit}</span></section>
    <section className="artist-bio section-pad"><div className="section-topline"><span>ARTIST / PROFILE</span><span>{artist.name}</span></div><div className="artist-bio-grid"><h2>{artist.intro}</h2><div><p>{artist.bio}</p><a className="text-link" href={artist.listenUrl} target="_blank" rel="noopener noreferrer">{artist.listenLabel} <ArrowUpRight /></a></div></div></section>
    <section className="music-section section-pad artist-music"><div className="section-topline"><span>THE MUSIC</span><span>SELECTED RELEASES</span></div><div className="section-heading-row"><h2>Listen to the music.</h2><Link className="pill-link" href="/music">ALL RELEASES <ArrowUpRight /></Link></div><div className="release-grid">{relevant.map(r => <ReleaseCard key={r.title} release={r} />)}</div><div className="roster-foot"><Link href="/artists">BACK TO THE ARTISTS <ArrowRight /></Link></div></section>
  </>;
}
