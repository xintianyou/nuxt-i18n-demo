export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ssr-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', 
        name: 'description', 
        content: '' 
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  modules: [
    'nuxt-i18n'
  ],

  /*
   ** i18n config
   */
  i18n: {
    // baseUrl: appUrl,
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-AU',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文'
      }
    ],
    defaultLocale: 'zh',
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        en: require('./locales/en.json'),
        zh: require('./locales/zh.json'),
      },
      dateTimeFormats: {
        en: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
        zh: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
      },
    },
    // Netlify will do the language detection
    detectBrowserLanguage: false,
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
