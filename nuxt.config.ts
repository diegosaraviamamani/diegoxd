// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
  ],
  app: {
    layoutTransition: { name: "layout" },
    pageTransition: { name: "page" },
  },
  plugins: ["~/plugins/prism.js", "~/plugins/directive.ts"],
  css: ["~/assets/css/prism.css"],
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
    },
  },
});
