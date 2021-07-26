
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {url: 'https://jsonplaceholder.typicode.com/users', method: 'post'},
  //         user: {url: '/me', method: 'get', propertyName: 'data'},
  //         logout : {url: '/', method: 'post'}
  //       },
  //       tokenRequired: false,
  //       tokenType: false
  //     }
  //   },
  //   redirect: {
  //     logout: '/'
  //   },
  //   cookie: false
  // },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
