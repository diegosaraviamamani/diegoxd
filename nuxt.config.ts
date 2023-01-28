// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: ["~/plugins/prism.js"],
  css: ["~/assets/css/prism.css"],
});
