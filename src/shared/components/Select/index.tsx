import React, { FC, FormEvent, useState } from "react";

import "./styles.scss";

interface SelectOptionsProps {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOptionsProps[];
}

const Select: FC<SelectProps> = ({ options }) => {
  // hooks
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e: FormEvent) => {
    const select: string = (e.target as any).value.trim().toLocaleLowerCase();
    console.log(select);
    setSelectValue(select);
  };

  return (
    <div className="select-wrapper">
      <select className="select" value={selectValue} onChange={handleChange}>
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

export default Select;
