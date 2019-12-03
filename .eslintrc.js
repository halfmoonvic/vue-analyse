// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'comma-dangle': [1, 'never'],
    eqeqeq: 1,
    indent: [1, 2],
    'generator-star-spacing': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-multi-spaces': 1,
    'no-unused-vars': 1,
    semi: [1, 'never'],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': 1
  }
}
