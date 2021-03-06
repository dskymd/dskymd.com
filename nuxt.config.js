export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:title', property: 'og:title', content: 'dskymd.com Front-end Developper' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dskymd.com' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dskymd.com/images/ogp-card.jpg'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'dskymd.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Playfair+Display:400,700|Roboto:400,500|Roboto+Slab&:400,700&display=swap' }
    ],
    script: [{ src: 'https://kit.fontawesome.com/fdc02ad3eb.js' }]
    // { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=es6' },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#EC2200' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
    // '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: ['./assets/scss/var.scss', './assets/scss/common.scss']
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
