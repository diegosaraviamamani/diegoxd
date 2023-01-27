// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@morev/vue-transitions/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: ["~/plugins/prism.js"],
  // add prismjs styles from prismjs package
  css: ["~/assets/css/prism.css"],
});
