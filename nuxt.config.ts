import i18n from "./i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
  ],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: ["~/plugins/prism.js"],
  css: ["~/assets/css/prism.css"],
  i18n,
});
