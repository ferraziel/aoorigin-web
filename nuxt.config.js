const description =
  "MMORPG 2D gratuito de fantasía medieval, hecho en Argentina. ¡Celebramos 20 años! Creá un personaje, subí de nivel, combatí, trabajá, ¡y viví aventuras únicas con tus amigos!";

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
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
        href: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css",
      },
    ],
    script: [
      {
        vmid: "widgetbot",
        src: "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3",
        async: true,
        defer: true,
        body: false,
        innerHTML: `new Crate({ server: "761213868352471040", channel: "761286044229959701" })`,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  /*
   ** Global CSS
   */
  // css: ["@/assets/css/fontawesome.min.css", "@/assets/css/light.min.css", "@/assets/css/brands.min.css"],
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
    "@nuxtjs/prismic",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    jit: true,
  },
  prismic: {
    endpoint: "https://ao20.cdn.prismic.io/api/v2",
    /* see configuration for more */
  },
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
    "@nuxtjs/recaptcha",
    "@nuxtjs/gtm",
    "@nuxtjs/sitemap",
  ],
  gtm: {
    id: "GTM-NDQTJ6H",
  },
  recaptcha: {
    siteKey: "6LdCSd4ZAAAAACG2A4w2_Zv5GIzIaKA1gBAW_usJ",
    version: 3,
    hideBadge: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // Actúa como fallback si no está puesto ningún runtimeConfig
    baseURL: process.env.AXIOS_BASE_URL,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
