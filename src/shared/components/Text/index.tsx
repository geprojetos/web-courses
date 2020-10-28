import React, { FC } from "react";

import "./styles.scss";

enum TextEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  label = "label",
}
type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

export interface TextProps {
  type: TextType;
  value: string;
}

const Text: FC<TextProps> = ({ type, value }) => {
  return type === TextEnum.h1 ? (
    <h1 className="text-h1">{value}</h1>
  ) : type === TextEnum.h2 ? (
    <h2 className="text-h2">{value}</h2>
  ) : type === TextEnum.h3 ? (
    <h3 className="text-h3">{value}</h3>
  ) : type === TextEnum.h4 ? (
    <h4 className="text-h4">{value}</h4>
  ) : type === TextEnum.h5 ? (
    <h5 className="text-h5">{value}</h5>
  ) : type === TextEnum.h6 ? (
    <h6 className="text-h6">{value}</h6>
  ) : type === TextEnum.p ? (
    <p className="text-p">{value}</p>
  ) : (
    <label className="text-label">{value}</label>
  );
};

export default Text;
