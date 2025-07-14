const fs = require('fs');
const path = require('path');

const isSSR = process.env.NEXT_USE_SSR !== 'false';

const pages = [
  {
    template: 'pages/index.template.tsx',
    target: 'pages/index.tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;',
  },
  {
    template: 'pages/main.template.tsx',
    target: 'pages/main.tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;',
  },
  {
    template: 'pages/details/[id].template.tsx',
    target: 'pages/details/[id].tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;\nexport const getStaticPaths = getSSGPaths;',
  },
];

pages.forEach(({ template, target, ssrExport, ssgExport }) => {
  let content = fs.readFileSync(template, 'utf8');
  if (isSSR) {
    content += '\n' + ssrExport + '\n';
  } else {
    content += '\n' + ssgExport + '\n';
  }
  fs.writeFileSync(target, content);
  console.log(`✅ Сгенерирован ${target} [${isSSR ? 'SSR' : 'Static'}]`);
}); 