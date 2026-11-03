/** Typography study based on the actual Dagbana Riddim and other release artwork.
 * Not an official downloadable wordmark. */
export default function ArtistWordmark({artist, className=''}:{artist:string;className?:string}) {
  if (artist.toLowerCase().includes('bella')) return (
    <span className={`artist-lockup artist-lockup--bella ${className}`} aria-label="Bella Shmurda">
      <span>BELLA</span><span>SHMURDA<span className="artist-lockup__dot">.</span></span>
    </span>
  );
  return <span className={`artist-lockup artist-lockup--fola ${className}`} aria-label="FOLA">Fola<span className="artist-lockup__dot">.</span></span>;
}
