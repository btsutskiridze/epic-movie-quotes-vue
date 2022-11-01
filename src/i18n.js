import ka from "@/config/localization/ka.js";
import en from "@/config/localization/en.js";

import { createI18n } from "vue-i18n";
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: {
    ...en,
    ...ka,
  },
});

export default i18n;
