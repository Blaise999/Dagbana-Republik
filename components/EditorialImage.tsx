'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function EditorialImage({src, fallback, alt, className = ''}: {src:string; fallback:string; alt:string; className?:string}) {
  const [failed, setFailed] = useState(false);
  return <Image className={className} src={failed ? fallback : src} onError={() => setFailed(true)} alt={alt} width={900} height={1100} sizes="(max-width: 600px) 90vw, (max-width: 1100px) 48vw, 34vw" loading="lazy" quality={73} style={{objectFit:'cover'}} />;
}
