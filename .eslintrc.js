module.exports = {
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier', 'jest'],
  env: {
    jest: true,
  },
  rules: {
    'arrow-parens': 0, // does not work with Flow generic types.
    'global-require': 0, // used by react-native
    'import/first': 0, // we sort by unit/atom
    'import/no-named-as-default': 0, // we export components for testing
    'import/prefer-default-export': 0, // actions can have only one action
    'no-confusing-arrow': 0, // this rule is confusing
    'no-duplicate-imports': 0, // handled by eslint-plugin-import
    'no-underscore-dangle': 0,
    'require-jsdoc': 'warn',
    'valid-jsdoc': 'error',
  },
};
