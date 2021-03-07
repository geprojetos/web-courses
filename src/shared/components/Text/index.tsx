import React, { FC } from 'react';
import { TextEnum, ColorsEnum } from '../../../assets/enum';
import { TextType } from '../../../assets/types';

import './styles.scss';

export interface TextProps {
  type: TextType;
  className?: string;
  color?: ColorsEnum;
  htmlFor?: string;
  align?: 'left' | 'right' | 'center';
}

const Text: FC<TextProps> = ({
  type,
  className,
  color,
  htmlFor,
  children,
  align,
}) => {
  return type === TextEnum.h1 ? (
    <h1 style={{ color }} className={`text-h1 text-${align} ${className}`}>
      {children}
    </h1>
  ) : type === TextEnum.h2 ? (
    <h2 style={{ color }} className={`text-h2 text-${align} ${className}`}>
      {children}
    </h2>
  ) : type === TextEnum.h3 ? (
    <h3 style={{ color }} className={`text-h3 text-${align} ${className}`}>
      {children}
    </h3>
  ) : type === TextEnum.h4 ? (
    <h4 style={{ color }} className={`text-h4 text-${align} ${className}`}>
      {children}
    </h4>
  ) : type === TextEnum.h5 ? (
    <h5 style={{ color }} className={`text-h5 text-${align} ${className}`}>
      {children}
    </h5>
  ) : type === TextEnum.h6 ? (
    <h6 style={{ color }} className={`text-h6 text-${align} ${className}`}>
      {children}
    </h6>
  ) : type === TextEnum.label ? (
    <label
      style={{ color }}
      className={`text-label text-${align} ${className}`}
      htmlFor={htmlFor}>
      {children}
    </label>
  ) : type === TextEnum.small ? (
    <p style={{ color }} className={`text-small text-${align} ${className}`}>
      {children}
    </p>
  ) : (
    <p style={{ color }} className={`text-p text-${align} ${className}`}>
      {children}
    </p>
  );
};

Text.defaultProps = {
  className: '',
  align: 'left',
};

export default Text;
