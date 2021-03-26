const BASE_URL = 'https://electinth.github.io/political-network/'
// const BASE_URL = 'https://elect.in.th/political-network/'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: process.env.BASE_URL || '/',
  },
  generate: {
    dir: 'political-network',
  },
  build: {
    publicPath: `${process.env.BASE_URL || ''}/_nuxt/`,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ที่สุดของตระกูลการเมืองไทย ถิ่นไหน.. ใครครอง',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ' วิเคราะห์ความสัมพันธ์และการครองอำนาจผ่านนามสกุล',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ที่สุดของตระกูลการเมืองไทย ถิ่นไหน.. ใครครอง',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ' วิเคราะห์ความสัมพันธ์และการครองอำนาจผ่านนามสกุล',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: BASE_URL + 'home_og.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: BASE_URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: ' วิเคราะห์ความสัมพันธ์และการครองอำนาจผ่านนามสกุล',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ' วิเคราะห์ความสัมพันธ์และการครองอำนาจผ่านนามสกุล',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image:src',
        content: BASE_URL + 'home_og.jpg',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: BASE_URL,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: BASE_URL + 'favicon.ico',
      },
      { rel: 'stylesheet', href: 'https://elect.in.th/assets/typography.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/globals.scss', './assets/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/elect.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '@/tailwind.config.js',
    cssPath: '@/assets/css/globals.scss',
    exposeConfig: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-mq'],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      })
    },
  },
  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      mobile: 767,
      tablet: 1023,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity,
    },
  },
}
