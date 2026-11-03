'use client';

import { useState } from 'react';
import { releases } from '@/data/site';
import ReleaseCard from './ReleaseCard';

type Filter = 'all' | 'bella' | 'fola';
const filters: { key: Filter; label: string }[] = [{ key: 'all', label: 'ALL RELEASES' }, { key: 'bella', label: 'BELLA SHMURDA' }, { key: 'fola', label: 'FOLA' }];

export default function MusicFilter() {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = filter === 'all' ? releases : releases.filter(r => r.filter === filter || r.filter === 'both');
  return <><div className="music-filter" role="group" aria-label="Filter music releases">{filters.map(f => <button key={f.key} type="button" aria-pressed={filter === f.key} className={filter === f.key ? 'is-active' : ''} onClick={() => setFilter(f.key)}>{f.label}<span> ↗</span></button>)}</div><div className="release-grid release-grid--catalogue">{shown.map(r => <ReleaseCard key={r.title} release={r} />)}</div><div className="music-count">{shown.length} RELEASES</div></>;
}
