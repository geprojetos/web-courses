import React, { FC } from "react";

import { LanguageTypes } from "../../../assets/utils/types";
import { Text } from "../";
import { t } from "../../../i18n";

import "./styles.scss";
import { useLanguagesContext } from "../../../assets/context/languages";

const ChangeLanguage: FC = () => {
  // hooks
  const { lang, setUpdate } = useLanguagesContext();

  /**
   * @alias handleChangeEn
   * @param {}
   * @description method used to change language for english
   */
  const handleChangeEn = () => {
    setUpdate(LanguageTypes.english);
  };

  /**
   * @alias handleChangePt
   * @param {}
   * @description method used to change language for portuguese
   */
  const handleChangePt = () => {
    setUpdate(LanguageTypes.portuguese);
  };

  return (
    <div className="home-language">
      <Text type="p">{t("home:language")}</Text>
      <button
        className={`home-language-button ${
          lang === LanguageTypes.portuguese && "home-language-active"
        }`}
        onClick={handleChangePt}>
        <Text type="p">{t("home:pt")}</Text>
      </button>
      <button
        className={`home-language-button ${
          lang === LanguageTypes.english && "home-language-active"
        }`}
        onClick={handleChangeEn}>
        <Text type="p">{t("home:en")}</Text>
      </button>
    </div>
  );
};

export default ChangeLanguage;
