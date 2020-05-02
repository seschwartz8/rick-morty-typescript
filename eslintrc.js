module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',

    'plugin:@typescript-eslint/eslint-recommended',

    'plugin:@typescript-eslint/recommended',

    'prettier/@typescript-eslint',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier

    'plugin:prettier/recommended',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

    'plugin:react/recommended'
  ],

  rules: {
    '@typescript-eslint/camelcase': 0,

    '@typescript-eslint/explicit-function-return-type': 0,

    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false
      }
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true
      }
    ],

    'react/prop-types': 0,

    'react/display-name': 0
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
};
