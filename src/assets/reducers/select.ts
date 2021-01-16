import { SelectReducerEnum } from '../enum';
import { SelectReducerAction, SelectReducerState } from '../types';

export const reducerSelect = (
  state: SelectReducerState,
  action: SelectReducerAction
) => {
  switch (action.type) {
    case SelectReducerEnum.CHANGE_SELECT:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
