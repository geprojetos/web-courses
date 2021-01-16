type SelectReducerType = "select_change";

type LanguageReducerType = "language_change";

export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

export const screenObj = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
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
  setUpdate: any;
}

export interface LanguageReducerAction {
  type: LanguageReducerType;
  payload: string;
}
