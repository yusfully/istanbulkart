import React, { createContext, useContext, useReducer } from "react";
import { navigationReducer } from "../reducers/navigationReducer";

const NavigationContext = createContext();

const initialState = {
  location: "/",
  prevLocation: null,
  pages: {},
  portalOpened: false,
};

export const NavigationProvider = ({ children }) => {
  const [stateNav, dispatchNav] = useReducer(navigationReducer, initialState);

  return (
    <NavigationContext.Provider value={{ stateNav, dispatchNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
