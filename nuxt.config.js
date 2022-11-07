// No Borrar, This is for the fullcalendar.io
import PnpWebpackPlugin from "pnp-webpack-plugin";

const description = "MMORPG 2D gratuito de fantasía medieval, hecho en Argentina. ¡Celebramos 20 años! Creá un personaje, subí de nivel, combatí, trabajá, ¡y viví aventuras únicas con tus amigos!";

export default {
  target: "server",
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} - Argentum 20 - El MMORPG 2D gratuito argentino`
        : "Argentum 20 - El MMORPG 2D gratuito argentino";
    },
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "mmorpg, juego, argentino, gratuito, código libre, edad media, medieval, open source, noland studios, argentum online, servidor oficial",
      },
      {
        hid: "description",
        name: "description",
        content: description,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:title",
        content: "Argentum 20 - El MMORPG 2D gratuito argentino",
      },
      { hid: "og:url", property: "og:url", content: "https://ao20.com.ar" },
      {
        property: "og:image",
        content: "https://ao20.com.ar/assets/img/og_image.png",
      },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:description", content: description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Livvic:ital,wght@0,400;0,600;1,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css",
      },
    ],
    style: [
      {
        cssText:
          "figure.character-head { width: calc(var(--w) * var(--scale)); height: calc(var(--h) * var(--scale)); background: url(/assets/img/heads_trimmed.png) no-repeat; background-position: top calc(var(--y) * var(--scale)) left calc(var(--x) * var(--scale)); background-size: calc(512px * var(--scale)); image-rendering: crisp-edges; image-rendering: pixelated; }",
        type: "text/css",
      },
    ],
    script: [
      // {
      //   vmid: "widgetbot",
      //   src: "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3",
      //   async: true,
      //   defer: true,
      //   body: false,
      //   innerHTML: `new Crate({ server: "761213868352471040", channel: "761286044229959701" })`,
      // },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  loading: {
    color: "var(--primary)",
    height: "3px",
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/fontawesome.min.css", "@/assets/css/light.min.css", "@/assets/css/brands.min.css", "@/assets/css/styles.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/vuePlugins"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    '@nuxtjs/dotenv'
  ],
  googleFonts: {
    families: {
      "Alegreya+Sans": [400, 700],
      Cardo: [400, 700],
    },
    display: "swap",
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/dayjs",
    "@nuxtjs/recaptcha",
    "@nuxtjs/gtm",
    // "nuxt-web3",
    ["nuxt-matomo", { matomoUrl: "//analytics.ao20.com.ar/", siteId: 1 }],
    // "@nuxtjs/sitemap",
  ],
  axios: {
    baseURL: process.env.AXIOS_BASE_URL,
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "access_token",
        },
        endpoints: {
          login: { url: "/accounts/auth/login", method: "post" },
          logout: { url: "/accounts/auth/logout", method: "post" },
          user: { url: "/accounts/user", method: "get" },
        },
      },
    },
    redirect: {
      login: "/",
      logout: "/",
      callback: "/login",
      home: "/",
    },
  },
  dayjs: {
    locales: ["es"],
    defaultLocale: "es",
    defaultTimeZone: "America/Argentina/Buenos_Aires",
    plugins: [
      // "utc", // import 'dayjs/plugin/utc'
      "timezone", // import 'dayjs/plugin/timezone'
      "relativeTime",
    ],
  },
  recaptcha: {
    siteKey: "6LdCSd4ZAAAAACG2A4w2_Zv5GIzIaKA1gBAW_usJ",
    version: 3,
    hideBadge: true,
  },
  gtm: {
    id: "GTM-NDQTJ6H",
  },
  env: {
    AXIOS_BASE_URL: process.env.AXIOS_BASE_URL,
    OPENSEA_IFRAME_URL: process.env.OPENSEA_IFRAME_URL,
    TOKEN_AOLB_CONTRACT_ADDRESS: process.env.TOKEN_AOLB_CONTRACT_ADDRESS,
    PAYMENT_ADDRESS: process.env.PAYMENT_ADDRESS,
    MERCADOPAGO_PUBLIC_KEY: process.env.MERCADOPAGO_PUBLIC_KEY
  },
  // sitemap: {
  //   hostname: "https://ao20.com.ar",
  //   gzip: true,
  //   routes: createSitemapRoutes,
  // },
  // This is for the fullcalendar.io
  build: {
    transpile: /@fullcalendar.*/, // always needed

    // this `extend` callback is only needed if using Yarn Plug-n-Play
    extend(config) {
      config.resolve.plugins.push(PnpWebpackPlugin);
      config.resolveLoader.plugins.push(PnpWebpackPlugin.moduleLoader(module));
    }
  }
};
