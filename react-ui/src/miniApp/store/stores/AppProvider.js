import React, { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";

const AppContext = createContext();

const initialState = {
  isScrolling:false
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStore = () => useContext(AppContext);
