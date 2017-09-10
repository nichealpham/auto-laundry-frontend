module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 4],
    'semi': ['error', 'always'],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'max-len': 'off',
    'curly': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off'
    // 'quotes': ['error', 'double']
  },
  globals: {}
}
