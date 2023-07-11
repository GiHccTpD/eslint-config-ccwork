module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-undef': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-unused-vars': 'error',
    semi: ['error', 'always'],
    'no-var': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'lines-around-comment': [
      'error',
      { beforeLineComment: false, allowBlockStart: true },
    ],
  },
};
