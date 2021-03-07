type SelectReducerType = 'select_change';

type LanguageReducerType = 'language_change';

type GlobalReducerType = 'change_token' | 'reset_token';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label'
  | 'small';

export const screenObj = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export interface SelectReducerState {
  value: string;
}

export interface SelectReducerAction {
  type: SelectReducerType;
  payload: string;
}

export interface LanguageReducerState {
  lang: string;
  setUpdate: Function;
}

export interface LanguageReducerAction {
  type: LanguageReducerType;
  payload: string;
}

export interface GlobalReducerState {
  token: string;
  setToken: Function;
  setReset: Function;
}

export interface GlobalReducerAction {
  type: GlobalReducerType;
  payload: string;
}
