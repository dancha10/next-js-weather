const fs = require('fs');

const repo = 'next-js-weather';

const isSSR = process.env.NEXT_PUBLIC_USE_SSR !== 'false';

const config = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    ${!isSSR ? 'unoptimized: true,' : ''}
  },
  basePath: '/${repo}',
  assetPrefix: '/${repo}/',
  ${
    !isSSR
      ? `output: 'export',
  trailingSlash: true,`
      : ''
  }
};

export default nextConfig;
`;

fs.writeFileSync('next.config.ts', config);

console.log(`✅ Конфигурация создана для ${isSSR ? 'SSR' : 'статики'}`);
console.log(`📁 Режим: ${isSSR ? 'SSR (getServerSideProps)' : 'Статика (getStaticProps)'}`);
