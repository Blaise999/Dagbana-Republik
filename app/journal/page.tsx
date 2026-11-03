import type { Metadata } from 'next';
import NewsWall from '@/components/NewsWall';
import PhotoDrift from '@/components/PhotoDrift';
export const metadata:Metadata={title:'Journal / Press'};
export default function JournalPage(){return <>
<section className="experience-intro experience-intro--journal"><span className="experience-intro__top">THE PEOPLE ARE TALKING / 002</span><p>THE REPUBLIK DOESN&apos;T STOP MAKING NOISE.</p><h1>Press and stories.</h1><div className="experience-intro__bottom"><span>THE PRESS / THE CULTURE / THE MOMENTS</span><span>ARTICLES LINK TO THEIR ORIGINAL PUBLISHERS</span></div></section>
<NewsWall full/><PhotoDrift />
</>}
