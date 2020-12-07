import React, { FC, MouseEvent } from "react";

import { IconsCoursesId } from "../../../assets/fonts/IconsCourses";
import { ColorTypes } from "../../../assets/utils/types";

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
        fontSize: size ? `${size}rem` : "2.4rem",
        color: color ? color : ColorTypes.PURPLE1,
      }}
      className={`icon icon-${name} ${className}`}
      onClick={onClick}></i>
  );
};

export default Icon;
