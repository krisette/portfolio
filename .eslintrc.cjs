module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }]
  }
};
