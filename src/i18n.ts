import i18next from "i18next";
import { LanguageEnum } from "./assets/enum";

import {
  // imports
  categoriesEn,
  categoriesPt,
  homePt,
  homeEn,
  commonPt,
  commonEn,
} from "./translations/translation";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: LanguageEnum.portuguese,
  resources: {
    pt: {
      // exports pt
      categories: categoriesPt,
      home: homePt,
      common: commonPt,
    },
    en: {
      // exports en
      categories: categoriesEn,
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
