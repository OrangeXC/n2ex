module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'N2EX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    'muse-ui/dist/muse-ui.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4081' },
  plugins: [
    { src: '~plugins/muse-ui.js', ssr: true }
  ],
  build: {
    vendor: ['axios']
  }
}
