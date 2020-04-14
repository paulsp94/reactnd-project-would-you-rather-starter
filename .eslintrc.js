module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'prettier/prettier': 'error',
  },
  ignore: ['./src/utils/_DATA.js', './src/utils/api.js'],
};
