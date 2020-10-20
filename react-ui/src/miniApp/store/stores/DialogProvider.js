import React, { createContext, useContext, useReducer } from "react";
import { dialogReducer } from "../reducers/dialogReducer";

const DialogContext = createContext();

const initialState = {
  count: 0,
  message: "",
};

export const DialogProvider = ({ children }) => {
  const [overViewState, overViewDispatch] = useReducer(
    dialogReducer,
    initialState
  );

  return (
    <DialogContext.Provider value={{ overViewState, overViewDispatch }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useStore = () => useContext(DialogContext);
