import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-config-prettier'

export default [
  {
    ignores: ['**/node_modules/**', './coverage/**'],
    files: ['**/*.js'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
  },
]
