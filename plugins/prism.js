import Prism from "prismjs";
import "prismjs/components/prism-typescript";

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook("vue-renderer:ssr:context", (ssrContext) => {
    ssrContext.Prism = Prism;
  });
});
