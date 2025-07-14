const fs = require('fs');

const isSSR = process.env.NEXT_USE_SSR !== 'false';

const pages = [
  {
    target: 'pages/index.tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;',
  },
  {
    target: 'pages/main.tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;',
  },
  {
    target: 'pages/details/[id].tsx',
    ssrExport: 'export const getServerSideProps = getSSRProps;',
    ssgExport: 'export const getStaticProps = getSSGProps;\nexport const getStaticPaths = getSSGPaths;',
  },
];

pages.forEach(({ target, ssrExport, ssgExport }) => {
  let content = fs.readFileSync(target, 'utf8');
  if (isSSR) {
    content += '\n' + ssrExport + '\n';
  } else {
    content += '\n' + ssgExport + '\n';
  }
  fs.writeFileSync(target, content);
  console.log(`✅ Сгенерирован ${target} [${isSSR ? 'SSR' : 'Static'}]`);
});
