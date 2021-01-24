import React, {
  FC,
  FormEvent,
  memo,
  Reducer,
  useCallback,
  useReducer,
} from 'react';
import { Text } from '..';
import { reducerSelect } from '../../../assets/reducers';
import { SelectReducerAction, SelectReducerState } from '../../../assets/types';
import './styles.scss';

interface SelectOptionsProps {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOptionsProps[];
  label?: string;
  htmlFor?: string;
  className?: string;
  name?: string;
  id?: string;
}

const initialState: SelectReducerState = { value: '' };

const Select: FC<SelectProps> = ({
  options,
  label,
  htmlFor,
  className,
  name,
  id,
}) => {
  // hooks
  const [state, dispatch] = useReducer<
    Reducer<SelectReducerState, SelectReducerAction>
  >(reducerSelect, initialState);

  const handleChange = useCallback((e: FormEvent) => {
    const select: string = (e.target as any).value.trim().toLocaleLowerCase();
    dispatch({ type: 'select_change', payload: select });
  }, []);

  return (
    <section className={className}>
      {label && (
        <Text type='label' htmlFor={htmlFor}>
          {label}
        </Text>
      )}
      <div className='select-wrapper'>
        <select
          className='select'
          name={name}
          id={id}
          value={state.value}
          onChange={handleChange}>
          <option>Selecione um valor</option>
          {options.length &&
            options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
        </select>
      </div>
    </section>
  );
};

Select.defaultProps = {
  className: '',
  name: '',
  id: '',
  htmlFor: '',
};

export default memo(Select);
