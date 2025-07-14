const fs = require('fs');
const path = require('path');

// Определяем режим из env
const isSSR = process.env.NEXT_USE_SSR !== 'false';

// Конфигурация для SSR
const ssrConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // SSR конфигурация - без output: 'export'
};

// Конфигурация для статики
const staticConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
};

// Выбираем конфигурацию
const config = isSSR ? ssrConfig : staticConfig;

// Записываем в next.config.ts
const configContent = `import type { NextConfig } from "next";

const nextConfig: NextConfig = ${JSON.stringify(config, null, 2)};

export default nextConfig;
`;

fs.writeFileSync('next.config.ts', configContent);

console.log(`✅ Конфигурация создана для ${isSSR ? 'SSR' : 'статики'}`);
console.log(`📁 Режим: ${isSSR ? 'SSR (getServerSideProps)' : 'Статика (getStaticProps)'}`); 