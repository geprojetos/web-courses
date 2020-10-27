import React, { FC } from "react";

import "./styles.scss";

enum ButtonEnum {
  default = "default",
  icon = "icon",
}
type ButtonType = "default" | "icon";
type ButtonSize = "small" | "large";

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
}

const Button: FC<ButtonProps> = ({ type, size }) => {
  return type === ButtonEnum.default ? (
    <button>default</button>
  ) : (
    <button>icon</button>
  );
};

export default Button;
