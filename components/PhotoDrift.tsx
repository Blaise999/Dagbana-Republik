import EditorialImage from './EditorialImage';
import {portraits} from '@/data/experience';
export default function PhotoDrift() {
  return <section className="photo-drift" aria-labelledby="photo-drift-title">
    <div className="photo-drift__heading"><span>UNFILTERED / AN ARCHIVE OF MOMENTS</span><h2 id="photo-drift-title">Inside the Republik.</h2><p>THE PEOPLE, THE PRESENCE, THE CULTURE.</p></div>
    <div className="photo-drift__rail">
      {[...portraits, ...portraits].map((p, i) => <div className={`photo-drift__card photo-drift__card--${i%5}`} key={`${p.artist}-${i}`}>
        <EditorialImage src={p.image} fallback={p.fallback} alt={`Editorial portrait: ${p.artist}`} />
        <div className="photo-drift__caption"><span>{p.label}</span><strong>{p.artist}</strong></div>
      </div>)}
    </div>
    <div className="photo-drift__fineprint">EDITORIAL PHOTO SOURCES: NOTJUSTOK, HIPTV, BELLA SHMURDA/X, BUSINESSDAY, AFRICAN FOLDER. IMAGES FOR DESIGN CONCEPT ONLY; SECURE LICENSES FOR LAUNCH.</div>
  </section>;
}
