import i18next from "i18next";
import { LanguageTypes } from "./assets/utils/types";

import {
  // imports
  homePt,
  homeEn,
  commonPt,
  commonEn,
} from "./translations/translation";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: LanguageTypes.portuguese,
  resources: {
    pt: {
      // exports pt
      home: homePt,
      common: commonPt,
    },
    en: {
      // exports en
      home: homeEn,
      common: commonEn,
    },
  },
});

function t(key: string, options?: any) {
  if (!!options) {
    return i18next.t(key, options);
  }
  return i18next.t(key);
}

export { t };

export default i18next;
