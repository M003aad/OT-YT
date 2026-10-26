import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'out/**', 'coverage/**'],
  },
  {
    files: ['content.js', 'interceptor.js', 'scripts/**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        chrome: 'readonly',
        browser: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
];
