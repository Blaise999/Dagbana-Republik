'use client';

import { useState } from 'react';
import { ArrowUpRight } from './Icons';

export default function InquiryComposer() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Partnership');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  async function copy() {
    if (!name.trim() || !message.trim()) { setStatus('Add your name and message first.'); return; }
    const text = `Hello Dangbana Republik,\n\nInquiry: ${type}\nName: ${name.trim()}\n\n${message.trim()}\n`;
    try { await navigator.clipboard.writeText(text); setStatus('Copied. Paste your message into the label’s official contact channel.'); }
    catch { setStatus('Copy unavailable in this browser. Please copy the message manually.'); }
  }
  return <div className="inquiry"><div className="form-row"><label htmlFor="inquiry-name">YOUR NAME</label><input id="inquiry-name" value={name} onChange={e => setName(e.target.value)} placeholder="Name / Company" /></div><div className="form-row"><label htmlFor="inquiry-topic">WHAT IS THIS ABOUT?</label><select id="inquiry-topic" value={type} onChange={e => setType(e.target.value)}><option>Partnership</option><option>Bookings</option><option>Press / Media</option><option>General inquiry</option></select></div><div className="form-row"><label htmlFor="inquiry-message">YOUR MESSAGE</label><textarea id="inquiry-message" value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Tell us what you're working on..." /></div><button type="button" onClick={() => void copy()} className="inquiry-copy">COPY INQUIRY MESSAGE <ArrowUpRight/></button><p className="inquiry-status" role="status">{status || 'This draft tool does not send messages or store your information.'}</p></div>;
}
