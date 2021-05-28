export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dev Airdrop for GitHub',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:title', content: 'Dev Airdrop for GitHub' },
      { property: 'og:site_name', content: 'Dev Airdrop for GitHub' },
      { property: 'og:url', content: 'https://airdrop.devprotocol.xyz' },
      {
        property: 'og:description',
        content:
          'Dear all OSS developers, thank you for supporting the OSS ecosystem thus far. Dev Protocol will reward up to $2,100,000 to the most active GitHub users as a tribute and thank you for all your efforts.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://airdrop.devprotocol.xyz/image/eyecatch.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@devprtcl' },
      {
        name: 'twitter:description',
        content:
          'Dear all OSS developers, thank you for supporting the OSS ecosystem thus far. Dev Protocol will reward up to $2,100,000 to the most active GitHub users as a tribute and thank you for all your efforts.',
      },
      { name: 'twitter:title', content: 'Dev Airdrop for GitHub' },
      {
        name: 'twitter:image',
        content: 'https://airdrop.devprotocol.xyz/image/eyecatch.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/css/styles.scss' }, 'ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  server: {
    host: '0.0.0.0',
  },

  env: {
    REDIRECT_URI: process.env.REDIRECT_URI,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GET_GENDOU_API_URL: process.env.GET_GENDOU_API_URL,
  },
}
