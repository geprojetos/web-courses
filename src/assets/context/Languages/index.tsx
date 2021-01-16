import React, {
  createContext,
  FC,
  Reducer,
  useCallback,
  useContext,
  useReducer,
} from "react";

import i18next from "../../../i18n";
import { LanguageEnum } from "../../enum";
import { reducerLanguage } from "../../reducers";
import { LanguageReducerAction, LanguageReducerState } from "../../types";

const initialState: LanguageReducerState = {
  lang: LanguageEnum.portuguese,
  setUpdate: Function as any,
};

const LanguagesContext = createContext({
  ...initialState,
});

export const LanguagesProvider: FC = ({ children }) => {
  const [state, dispact] = useReducer<
    Reducer<LanguageReducerState, LanguageReducerAction>
  >(reducerLanguage, initialState);

  const { lang } = state;

  const setUpdate = useCallback(
    (language: string) => {
      i18next.changeLanguage(language);
      dispact({ type: "language_change", payload: language });
    },
    [dispact]
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
