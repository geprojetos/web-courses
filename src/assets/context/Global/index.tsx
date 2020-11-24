import React, { createContext, FC, useContext, useState } from 'react';

interface GlobalProps {
  token: string;
  setToken: any;
  email?: string;
  setEmail?: any;
  userId?: string;
  setUserId?: any;
  setReset?: any;
}

const initialValues: GlobalProps = {
  token: '',
  setToken: Function as any,
  email: '',
  setEmail: Function as any,
  userId: '',
  setUserId: Function as any,
  setReset: Function as any
};

export const GlobalContext = createContext({
  ...initialValues
});

export const GlobalProvider: FC = ({ children }) => {
  const [token, setToken] = useState(initialValues.token);
  const [email, setEmail] = useState(initialValues.email);
  const [userId, setUserId] = useState(initialValues.userId);

  const setReset = () => {
    setToken(initialValues.token);
    setEmail(initialValues.email);
    setUserId(initialValues.userId);
  };

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        userId,
        setUserId,
        setReset
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  const {
    token,
    setToken,
    email,
    setEmail,
    userId,
    setUserId,
    setReset
  } = context;
  return {
    token,
    setToken,
    email,
    setEmail,
    userId,
    setUserId,
    setReset
  };
};
