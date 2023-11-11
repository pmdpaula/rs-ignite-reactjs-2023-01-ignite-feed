/* eslint-disable no-undef */
module.exports = {
  'env': {
    "browser": true,
    "es2021": true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  'overrides': [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint', 'react'
  ],
  'rules': {
    // "@typescript-eslint/ban-ts-comment": "off",
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    'import/namespace': 0,
    'import/no-unresolved': [2, { ignore: ['^@'] }],
  },
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
  }
};
