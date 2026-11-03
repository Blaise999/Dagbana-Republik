import type { Metadata } from 'next';
import WorldTeasers from '@/components/WorldTeasers';
export const metadata: Metadata = {title:'Tour / Coming Soon'};
export default function TourPage(){return <>
<section className="experience-intro experience-intro--tour"><span className="experience-intro__top">THE WORLD IS THE STAGE / 004</span><p>THIS ONE IS GOING TO BE LOUD.</p><h1>Tour updates.</h1><div className="experience-intro__bottom"><span>TOUR ANNOUNCEMENTS / TBA</span><span>ALL EXAMPLE DATES ARE FICTIONAL</span></div></section>
<WorldTeasers full only="tour"/>
<div className="teaser-coda"><span>NOT AN OFFICIAL TOUR ANNOUNCEMENT</span><h2>See you out there.</h2><p>No tour dates are confirmed on this site. The sample schedule exists solely to demonstrate the layout.</p></div>
</>}
