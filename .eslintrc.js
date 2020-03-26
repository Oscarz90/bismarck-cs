module.exports = {
  parser: 'babel-eslint',
  env: {
    mocha: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:mocha/recommended',
  ],
  plugins: [
    'prettier',
    'mocha',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      }
    ],
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
  }
};
