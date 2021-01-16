import React, { FC, FormEvent, useReducer, memo, Reducer } from "react";
import { reducerSelect } from "../../../assets/reducers";
import { SelectReducerAction, SelectReducerState } from "../../../assets/types";

import "./styles.scss";

interface SelectOptionsProps {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOptionsProps[];
}

const initialState: SelectReducerState = { value: "" };

const Select: FC<SelectProps> = ({ options }) => {
  // hooks
  const [state, dispatch] = useReducer<
    Reducer<SelectReducerState, SelectReducerAction>
  >(reducerSelect, initialState);

  const handleChange = (e: FormEvent) => {
    const select: string = (e.target as any).value.trim().toLocaleLowerCase();
    dispatch({ type: "select_change", payload: select });
  };

  return (
    <div className="select-wrapper">
      <select className="select" value={state.value} onChange={handleChange}>
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
  );
};

export default memo(Select);
