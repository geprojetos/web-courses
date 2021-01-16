import { SelectReducerEnum } from "../enum";
import { SelectReducerAction, SelectReducerState } from "../types";

export const reducerSelect = (
  state: SelectReducerState,
  action: SelectReducerAction
) => {
  switch (action.type) {
    case SelectReducerEnum.SELECT_CHANGE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
