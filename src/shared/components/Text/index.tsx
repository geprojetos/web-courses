import React, { FC } from "react";
import { TextTypes, TextType } from "../../../assets/utils/types";

import "./styles.scss";

export interface TextProps {
  type: TextType;
  className?: string;
}

const Text: FC<TextProps> = ({ type, className, children }) => {
  return type === TextTypes.h1 ? (
    <h1 className={`text-h1 ${className}`}>{children}</h1>
  ) : type === TextTypes.h2 ? (
    <h2 className={`text-h2 ${className}`}>{children}</h2>
  ) : type === TextTypes.h3 ? (
    <h3 className={`text-h3 ${className}`}>{children}</h3>
  ) : type === TextTypes.h4 ? (
    <h4 className={`text-h4 ${className}`}>{children}</h4>
  ) : type === TextTypes.h5 ? (
    <h5 className={`text-h5 ${className}`}>{children}</h5>
  ) : type === TextTypes.h6 ? (
    <h6 className={`text-h6 ${className}`}>{children}</h6>
  ) : type === TextTypes.p ? (
    <p className={`text-p ${className}`}>{children}</p>
  ) : (
    <label className={`text-label ${className}`}>{children}</label>
  );
};

Text.defaultProps = {
  className: "",
};

export default Text;
