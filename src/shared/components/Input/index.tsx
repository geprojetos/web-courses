import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { Text } from '..';
import { ColorsEnum } from '../../../assets/enum';

import './styles.scss';

export interface InputProps {
  label?: string;
  errors?: FieldErrors;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, errorMessage }, ref) => {
    return (
      <>
        <div className='global-flex global-direction-column input-group'>
          {label && (
            <Text type='label' color={ColorsEnum.GRAY3}>
              {label}
            </Text>
          )}
          <input className='input' ref={ref} name='example' />
          {errors && errors.example && (
            <Text
              className='input-error-message'
              type='small'
              color={ColorsEnum.RED1}>
              {errorMessage}
            </Text>
          )}
        </div>
      </>
    );
  }
);

export default Input;
