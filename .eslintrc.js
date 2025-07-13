module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@front-common/frontend'
  ],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};