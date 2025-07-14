const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../pages');

// Рекурсивно обходит все файлы в pages
function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      callback(fullPath);
    }
  });
}

// Переименовывает экспорты getServerSideProps <-> _getServerSideProps, getStaticProps <-> _getStaticProps, getStaticPaths <-> _getStaticPaths
function toggleExports(filePath, enableSSR) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (enableSSR) {
    // SSR: включаем getServerSideProps, выключаем getStaticProps и getStaticPaths
    if (content.includes('export const _getServerSideProps')) {
      content = content.replace(/export const _getServerSideProps/g, 'export const getServerSideProps');
      changed = true;
    }
    if (content.includes('export const getStaticProps')) {
      content = content.replace(/export const getStaticProps/g, 'export const _getStaticProps');
      changed = true;
    }
    if (content.includes('export const getStaticPaths')) {
      content = content.replace(/export const getStaticPaths/g, 'export const _getStaticPaths');
      changed = true;
    }
  } else {
    // SSG: включаем getStaticProps/getStaticPaths, выключаем getServerSideProps
    if (content.includes('export const _getStaticProps')) {
      content = content.replace(/export const _getStaticProps/g, 'export const getStaticProps');
      changed = true;
    }
    if (content.includes('export const _getStaticPaths')) {
      content = content.replace(/export const _getStaticPaths/g, 'export const getStaticPaths');
      changed = true;
    }
    if (content.includes('export const getServerSideProps')) {
      content = content.replace(/export const getServerSideProps/g, 'export const _getServerSideProps');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${enableSSR ? 'SSR:' : 'SSG:'} Обновлены экспорты в ${filePath}`);
  }
}

const enableSSR = process.argv.includes('--ssr');
walk(pagesDir, (file) => toggleExports(file, enableSSR));
