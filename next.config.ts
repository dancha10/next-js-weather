import type { NextConfig } from 'next';

const isSSR = process.env.NEXT_PUBLIC_USE_SSR === 'true';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: isSSR ? undefined : true,
  },
  basePath: '/next-js-weather',
  assetPrefix: '/next-js-weather/',
  ...(isSSR
    ? {}
    : {
        output: 'export',
        trailingSlash: true,
      }),
};

export default nextConfig;
