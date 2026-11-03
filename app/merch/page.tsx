import type { Metadata } from 'next';
import WorldTeasers from '@/components/WorldTeasers';
export const metadata: Metadata = {title:'Merch / Coming Soon'};
export default function MerchPage(){return <>
<section className="experience-intro experience-intro--merch"><span className="experience-intro__top">THE UNIFORM / 003</span><p>DO NOT ADJUST YOUR FREQUENCY.</p><h1>Merch, coming soon.</h1><div className="experience-intro__bottom"><span>NO PRODUCTS HAVE BEEN ANNOUNCED</span><span>DESIGN PREVIEW / NOT FOR SALE</span></div></section>
<WorldTeasers full only="merch"/>
<div className="teaser-coda"><span>NOT FOR SALE · COMING SOON</span><h2>Stay connected.</h2><p>Photographic apparel imagery is a generic placeholder; this is not an official merchandise announcement.</p></div>
</>}
