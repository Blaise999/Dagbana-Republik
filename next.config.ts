import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol:'https', hostname:'notjustok.com' },
      { protocol:'https', hostname:'albumtalks.com' },
      { protocol:'https', hostname:'is1-ssl.mzstatic.com' },
      { protocol:'https', hostname:'geo-media.beatport.com' },
      { protocol:'https', hostname:'i.scdn.co' },
      { protocol:'https', hostname:'i.audiomack.com' },
      { protocol:'https', hostname:'pbs.twimg.com' },
      { protocol:'https', hostname:'sportal365images.com' },
      { protocol:'https', hostname:'assets.lummi.ai' },
      { protocol:'https', hostname:'i.ytimg.com' },
    ]
  }
};
export default nextConfig;
