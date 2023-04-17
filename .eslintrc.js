module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'package-lock.json',
    'package.json',
    'node_modules'
  ],
  root: true,
};