import { NuxtI18nOptions } from "@nuxtjs/i18n";
import en from "./en";

const i18n: NuxtI18nOptions = {
  locales: ["en"],
  defaultLocale: "en",
  vueI18n: {
    legacy: false,
    locale: "en",
    messages: { en },
  },
};

export default i18n;
