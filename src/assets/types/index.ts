type SelectReducerType = "select_change";

export interface SelectReducerAction {
  type: SelectReducerType;
  payload: string;
}

export interface SelectReducerState {
  value: string;
}
