import React, {
  createContext,
  FC,
  Reducer,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { reducerGlobal } from '../reducers';
import { GlobalReducerState, GlobalReducerAction } from '../types';

const initialState: GlobalReducerState = {
  token: '',
  setToken: Function as any,
  setReset: Function as any,
};

const GlobalContext = createContext({
  ...initialState,
});

export const GlobalProvider: FC = ({ children }) => {
  const [state, dispact] = useReducer<
    Reducer<GlobalReducerState, GlobalReducerAction>
  >(reducerGlobal, initialState);

  const { token } = state;

  const setToken = useCallback(
    (newToken: string) => {
      dispact({ type: 'change_token', payload: newToken });
    },
    [dispact]
  );

  const setReset = useCallback(() => {
    dispact({ type: 'reset_token', payload: '' });
  }, [dispact]);

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
        setReset,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * @alias useGlobalContext
 * @param {}
 * @description method used to set global context
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  const { token, setToken, setReset } = context;
  return {
    token,
    setToken,
    setReset,
  };
};
