module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  env: {
    jest: true
  },
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      { ignores: [] }
    ]
  }
}
