import React, { FC } from "react";
import { TextEnum, ColorsEnum } from "../../../assets/enum";
import { TextType } from "../../../assets/types";

import "./styles.scss";

export interface TextProps {
  type: TextType;
  className?: string;
  color?: ColorsEnum;
}

const Text: FC<TextProps> = ({ type, className, color, children }) => {
  return type === TextEnum.h1 ? (
    <h1 style={{ color }} className={`text-h1 ${className}`}>
      {children}
    </h1>
  ) : type === TextEnum.h2 ? (
    <h2 style={{ color }} className={`text-h2 ${className}`}>
      {children}
    </h2>
  ) : type === TextEnum.h3 ? (
    <h3 style={{ color }} className={`text-h3 ${className}`}>
      {children}
    </h3>
  ) : type === TextEnum.h4 ? (
    <h4 style={{ color }} className={`text-h4 ${className}`}>
      {children}
    </h4>
  ) : type === TextEnum.h5 ? (
    <h5 style={{ color }} className={`text-h5 ${className}`}>
      {children}
    </h5>
  ) : type === TextEnum.h6 ? (
    <h6 style={{ color }} className={`text-h6 ${className}`}>
      {children}
    </h6>
  ) : type === TextEnum.p ? (
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
