module.exports = {
  extends: ['eslint-config-codely/typescript'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'warn'
      }
    }
  ]
};
