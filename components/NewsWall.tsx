import Link from 'next/link';
import EditorialImage from './EditorialImage';
import {journal} from '@/data/experience';
export default function NewsWall({full=false}: {full?:boolean}) {
  const items = full ? journal : journal.slice(0,4);
  return <section className={`news-wall ${full?'news-wall--full':''}`} id="newsroom">
    <div className="news-wall__top"><span>FROM THE FRONTLINES / JOURNAL ENTRIES</span><span>PRESS. CULTURE. THE MOMENT.</span></div>
    <div className="news-wall__heading" data-reveal><h2>In the news.</h2><p>RECENT COVERAGE AND STORIES.</p></div>
    <div className="news-wall__grid">
      {items.map((story, index) => <a href={story.url} target="_blank" rel="noopener noreferrer" key={story.url} className={`news-story news-story--${index+1}`}>
        <div className="news-story__image"><EditorialImage src={story.image} fallback={story.fallback} alt={`Editorial image accompanying ${story.title}`} /><span className="news-story__arrow">↗</span></div>
        <div className="news-story__metadata"><span>{story.source}</span><span>{story.date}</span></div>
        <h3>{story.title}</h3><div className="news-story__under">READ ORIGINAL STORY <span>↗</span></div>
      </a>)}
    </div>
    {!full&&<div className="news-wall__end"><span>THE STORY IS STILL UNFOLDING.</span><Link href="/journal">ENTER THE JOURNAL ↗</Link></div>}
  </section>;
}
