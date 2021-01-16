import { GlobalReducerEnum } from '../enum';
import { GlobalReducerAction, GlobalReducerState } from '../types';

export const reducerGlobal = (
  state: GlobalReducerState,
  action: GlobalReducerAction
) => {
  switch (action.type) {
    case GlobalReducerEnum.CHANGE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GlobalReducerEnum.RESET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
