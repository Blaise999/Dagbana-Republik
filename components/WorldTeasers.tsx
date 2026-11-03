import Link from 'next/link';
import EditorialImage from './EditorialImage';
import { conceptShows } from '@/data/experience';
export default function WorldTeasers({full=false, only}:{full?:boolean; only?:'merch'|'tour'}) {
  return <div className={`world-teasers ${full?'world-teasers--full':''}`}>
    {only !== 'tour' && <section className="merch-tease" id="merch">
      <div className="tease-eyebrow"><span>MERCHANDISE</span><span>FUTURE DROP / NOT FOR SALE</span></div>
      <div className="merch-tease__body"><div className="merch-tease__copy" data-reveal><h2>Merch is coming.</h2><p>THE SOUND WILL HAVE A UNIFORM. FIRST WE MAKE THE NOISE.</p><Link href="/merch" className="tease-link">EXPLORE THE MERCH CONCEPT <span>↗</span></Link></div><div className="merch-tease__visual"><div className="merch-tease__photo"><EditorialImage src="https://assets.lummi.ai/assets/QmSR112sYsLxaaupf8MxCpjBCJrELYos12pBQLd7ZoDW3b" fallback="/images/merch-hoodie-placeholder.svg" alt="Generic black hooded sweatshirt used as an illustrative merchandise placeholder" /></div></div></div>
      <div className="merch-tease__bottom">MERCHANDISE — COMING SOON / CONCEPTUAL MOCKUP ONLY <span>NO ITEMS ARE AVAILABLE TO BUY</span></div>
    </section>}
    {only !== 'merch' && <section className="tour-tease" id="tour">
      <div className="tease-eyebrow"><span>LIVE</span><span>SHOW YOUR FACE / FEEL THE SOUND</span></div>
      <div className="tour-tease__top" data-reveal><div><p>THE NEXT CHAPTER</p><h2>Live shows.<br/>Coming soon.</h2></div><div className="tour-tease__art"><EditorialImage src="https://pbs.twimg.com/media/GZnBrheWMA8DLBH.jpg" fallback="/images/editorial-fallback.svg" alt="Bella Shmurda and FOLA editorial portrait — tour concept"/></div></div>
      <div className="tour-tease__notice">SAMPLE DESIGN ONLY — THE FOLLOWING DATES, CITIES AND EVENTS ARE FICTIONAL PLACEHOLDERS, NOT ANNOUNCED SHOWS.</div>
      <div className="tour-tease__dates">{conceptShows.slice(0,full?4:3).map((show,index)=><div className="tour-date" key={show.city}><span className="tour-date__visual"><EditorialImage src={["https://notjustok.com/wp-content/uploads/2025/02/IMG_0069.jpeg", "https://notjustok.com/wp-content/uploads/2024/12/IMG_9017.jpeg", "https://pbs.twimg.com/media/GZnBrheWMA8DLBH.jpg", "https://notjustok.com/wp-content/uploads/2025/02/Bella-Shmurda.jpg"][index % 4]} fallback="/images/editorial-fallback.svg" alt="Editorial artist portrait, used for a fictional tour card" /></span><div className="tour-date__when"><strong>{show.day}</strong><span>{show.month}<br/>{show.year}</span></div><div className="tour-date__where"><strong>{show.city}</strong><small>{show.country} / {show.venue}</small></div><div className="tour-date__status">CONCEPT / NOT ANNOUNCED</div><span className="tour-date__arrow">↗</span></div>)}</div>
      <div className="tour-tease__foot"><span>TOUR ANNOUNCEMENTS COMING SOON.</span><Link href="/tour" className="tease-link">EXPLORE TOUR CONCEPT <span>↗</span></Link></div>
    </section>}
  </div>;
}
