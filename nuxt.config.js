const pkg = require('./package')

module.exports = {
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css'
      }
    ]
  },
  css: [
    '@/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  loading: { color: '#409EFF' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  devModules: [
    '@nuxtjs/eslint-module'
  ],
  plugins: [
    '@/plugins/element-ui.js',
    '@/plugins/muse-ui.js',
    '@/plugins/filters.js'
  ],
  router: {
    middleware: 'redirect'
  },
  axios: {
    baseURL: 'https://proxy-oagpwnbkpe.now.sh',
    credentials: false,
    proxyHeaders: false
  }
}
