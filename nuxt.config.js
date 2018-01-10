module.exports = {
  head: {
    title: 'N2EX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' }
    ]
  },
  css: [
    '~assets/css/main.css',
    '~assets/font/material-icons.css',
    'muse-ui/dist/muse-ui.css',
    'muse-ui/dist/theme-carbon.css'
  ],
  loading: {
    color: '#ff4081'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache'
  ],
  axios: {
    baseURL: 'https://proxy-oagpwnbkpe.now.sh',
    credentials: false,
    proxyHeaders: false
  },
  plugins: [
    { src: '~plugins/muse-ui.js', ssr: true },
    '~plugins/filters.js'
  ]
}
