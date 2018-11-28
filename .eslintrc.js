module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      { ignores: [] }
    ]
  }
}
