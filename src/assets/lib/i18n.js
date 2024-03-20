import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTraslation from "../locale/en.json";
import ptTraslation from "../locale/pt.json";
import esTraslation from "../locale/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTraslation,
    },
    pt: {
      ...ptTraslation,
    },
    es: {
      ...esTraslation,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
});
