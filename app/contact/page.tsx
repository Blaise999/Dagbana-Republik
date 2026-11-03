import type { Metadata } from 'next';
import InquiryComposer from '@/components/InquiryComposer';
import { ArrowUpRight } from '@/components/Icons';
import { socials } from '@/data/site';
export const metadata: Metadata = { title: 'Contact' };
export default function ContactPage() {
  return <><section className="interior-hero interior-hero--contact"><div className="interior-topline"><span>THE REPUBLIK</span><span>CONVERSATIONS START HERE</span></div><div><p className="page-eyebrow">HAVE SOMETHING TO SAY?</p><h1>Get in touch.</h1><p className="interior-hero__description">For music, culture and everything in between.</p></div></section>
    <section className="contact-section section-pad"><div className="section-topline"><span>START A CONVERSATION</span><span>WELCOME TO THE REPUBLIK</span></div><div className="contact-grid"><div className="contact-copy"><h2>Start a conversation.</h2><p>For bookings, partnerships, press and other inquiries, use the label&apos;s verified public channel. An official management email has not yet been supplied for this concept.</p><a className="instagram-card" href={socials.instagram} target="_blank" rel="noopener noreferrer"><span>OFFICIAL PUBLIC CHANNEL</span><strong>INSTAGRAM</strong><ArrowUpRight/></a><p className="contact-footnote">Independent website concept. The inquiry composer does not submit directly to the label.</p></div><div className="contact-form-wrap"><div className="contact-form-top"><span>WRITE YOUR MESSAGE</span><span>READY TO COPY</span></div><InquiryComposer /></div></div></section>
  </>;
}
