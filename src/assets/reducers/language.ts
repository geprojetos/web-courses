import { LanguageReducerAction, LanguageReducerState } from '../types';
import { LanguageReducerEnum } from '../enum';

export const reducerLanguage = (
  state: LanguageReducerState,
  action: LanguageReducerAction
) => {
  switch (action.type) {
    case LanguageReducerEnum.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
