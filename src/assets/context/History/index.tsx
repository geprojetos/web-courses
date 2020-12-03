import React, { createContext, FC, useContext, useState } from "react";

interface HistoryProps {
  previous?: string;
  setPrevious?: any;
  current?: string;
  setCurrent?: any;
  setPath?: any;
}

const initialValues: HistoryProps = {
  previous: "/",
  setPrevious: Function as any,
  current: "/",
  setCurrent: Function as any,
  setPath: Function as any,
};

const HistoryContext = createContext(initialValues);

export const HistoryProvider: FC = ({ children }) => {
  const [previous, setPrevious] = useState(initialValues.previous);
  const [current, setCurrent] = useState(initialValues.current);

  const setPath = (path: string) => {
    setTimeout(() => {
      if (path !== current) {
        setPrevious(current);
      }
      setCurrent(path);
    }, 100);
  };

  return (
    <HistoryContext.Provider
      value={{
        previous,
        setPrevious,
        current,
        setCurrent,
        setPath,
      }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  const context = useContext(HistoryContext);
  const { previous, setPrevious, current, setCurrent, setPath } = context;
  return {
    previous,
    setPrevious,
    current,
    setCurrent,
    setPath,
  };
};
