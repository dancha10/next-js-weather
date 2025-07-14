import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    
  },
  basePath: '/next-js-weather',
  assetPrefix: '/next-js-weather/',
  
};

export default nextConfig;
