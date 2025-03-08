import I18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fi from "./fi.json";
const resources = {
  en: en,
  fi: fi,
};

I18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default I18n;
