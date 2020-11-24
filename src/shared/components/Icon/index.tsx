import React, { FC, MouseEvent } from "react";

import { IconsCoursesId } from "../../../assets/fonts/IconsCourses";
import { colorTypes } from "../../../assets/utils/types";

import "./styles.scss";

export interface IconProps {
  name: IconsCoursesId;
  size?: number;
  color?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, size, color, onClick, className }) => {
  return (
    <i
      style={{
        fontSize: size ? size : "24px",
        color: color ? color : colorTypes.secondaryGray,
      }}
      className={`icon icon-${name} ${className}`}
      onClick={onClick}
    ></i>
  );
};

export default Icon;
