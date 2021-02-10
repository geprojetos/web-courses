import React, { FC, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '..';
import { AlignEnum } from '../../../assets/enum';

import './styles.scss';

export interface ButtonProps {
  block?: boolean;
  align?: 'left' | 'center' | 'right';
  link?: string;
}

const Button: FC<ButtonProps> = memo(({ children, block, align, link }) => {
  const buttonAlign = useMemo(() => {
    if (align === AlignEnum.LEFT) {
      return 'button-left';
    }
    if (align === AlignEnum.CENTER) {
      return 'button-center';
    }
    if (align === AlignEnum.RIGHT) {
      return 'button-right';
    }
  }, [align]);

  const buttonStyle = useMemo(() => {
    return block ? 'button button-block' : 'button';
  }, [block]);

  const buttonComponent = useMemo(() => {
    if (link) {
      return (
        <Link to={link} className={buttonStyle}>
          <Text type='p'>{children}</Text>
        </Link>
      );
    }

    return (
      <button className={buttonStyle}>
        <Text type='p'>{children}</Text>
      </button>
    );
  }, [link]);

  return <div className={buttonAlign}>{buttonComponent}</div>;
});

export default Button;
