module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['turbo', 'plugin:react/recommended', 'prettier'],
  rules: {
    'react/jsx-key': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
