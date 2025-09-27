import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  typedRoutes: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'laser-world-paris.fr' },
      { protocol: 'https', hostname: 'www.laser-world-paris.fr' },
      { protocol: 'https', hostname: 'laser-world-paris.fr', pathname: '/**' },
    ],
  },
};

export default nextConfig;
