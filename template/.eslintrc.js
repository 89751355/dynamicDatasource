// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  globals:{
    //添加全局变量，eslint就不检验
    //'BMap':true
  },

  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    //以下添加自己的eslint规则，具体见：http://eslint.cn/docs/rules/
    'eqeqeq': 0, // 剔除必须使用全等
    'space-before-function-paren': [0, 'always'] //函数定义时括号前面要不要有空格


  }
}
