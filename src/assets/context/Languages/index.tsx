import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";

import i18next from "../../../i18n";
import { LanguageTypes } from "../../utils/types";

interface LanguagesProps {
  lang: string;
  setLang?: any;
  setUpdate: any;
}

const initialvalues: LanguagesProps = {
  lang: LanguageTypes.portuguese,
  setLang: Function as any,
  setUpdate: Function as any,
};

const LanguagesContext = createContext({
  ...initialvalues,
});

export const LanguagesProvider: FC = ({ children }) => {
  const [lang, setLang] = useState(initialvalues.lang);

  const setUpdate = useCallback(
    (language: string) => {
      i18next.changeLanguage(language);
      setLang(language);
    },
    [setLang]
  );

  return (
    <LanguagesContext.Provider
      value={{
        lang,
        setUpdate,
      }}>
      {children}
    </LanguagesContext.Provider>
  );
};

/**
 * @alias useLanguagesContext
 * @param {}
 * @description method used to set language context
 */
export const useLanguagesContext = () => {
  const context = useContext(LanguagesContext);
  const { lang, setUpdate } = context;
  return {
    lang,
    setUpdate,
  };
};
