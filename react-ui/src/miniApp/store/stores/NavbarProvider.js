import React, { createContext, useContext, useReducer } from "react";
import { navBarReducer } from "../reducers/navBarReducer";

const NavbarContext = createContext();

const initialState = {
  backButton: false,
  text: "İstanbul Kart",
  backgroundColor: "transparent",
  color: "#333",
  textSize: "10pt",
};
export const NavbarProvider = ({ children }) => {
  const [navState, navDispatch] = useReducer(navBarReducer, initialState);

  return (
    <NavbarContext.Provider value={{ navState, navDispatch }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavBarContext = () => useContext(NavbarContext);
