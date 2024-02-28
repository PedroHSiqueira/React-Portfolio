import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTraslation from "../locale/en.json";
import ptTraslation from "../locale/pt.json";
import jpTraslation from "../locale/jp.json";
import esTraslation from "../locale/es.json";
import idTraslation from "../locale/id.json";
import krTraslation from "../locale/kr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTraslation
    },
    pt: {
      ...ptTraslation
    },
    jp: {
      ...jpTraslation
    },
    es: {
      ...esTraslation
    },
    id: {
      ...idTraslation
    },
    kr:{
      ...krTraslation
    }
  },
  lng: "pt",
  fallbackLng: "pt",
});
