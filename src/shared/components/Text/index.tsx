import React, { FC } from "react";
import { TextTypes, TextType, ColorTypes } from "../../../assets/utils/types";

import "./styles.scss";

export interface TextProps {
  type: TextType;
  className?: string;
  color?: ColorTypes;
}

const Text: FC<TextProps> = ({ type, className, color, children }) => {
  return type === TextTypes.h1 ? (
    <h1 style={{ color }} className={`text-h1 ${className}`}>
      {children}
    </h1>
  ) : type === TextTypes.h2 ? (
    <h2 style={{ color }} className={`text-h2 ${className}`}>
      {children}
    </h2>
  ) : type === TextTypes.h3 ? (
    <h3 style={{ color }} className={`text-h3 ${className}`}>
      {children}
    </h3>
  ) : type === TextTypes.h4 ? (
    <h4 style={{ color }} className={`text-h4 ${className}`}>
      {children}
    </h4>
  ) : type === TextTypes.h5 ? (
    <h5 style={{ color }} className={`text-h5 ${className}`}>
      {children}
    </h5>
  ) : type === TextTypes.h6 ? (
    <h6 style={{ color }} className={`text-h6 ${className}`}>
      {children}
    </h6>
  ) : type === TextTypes.p ? (
    <p style={{ color }} className={`text-p ${className}`}>
      {children}
    </p>
  ) : (
    <label style={{ color }} className={`text-label ${className}`}>
      {children}
    </label>
  );
};

Text.defaultProps = {
  className: "",
};

export default Text;
