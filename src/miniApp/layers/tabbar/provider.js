import React, { createContext, useReducer, useContext } from "react";

const TabbarContext = createContext();
export const ActionTypes = {
  otherMenuOpened: "otherMenuOpened",
  onMenuChange: "onMenuChange",
};

const initialState = {
  otherMenuOpened: false,
  currentTab: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.otherMenuOpened:
      return {
        otherMenuOpened: !state.otherMenuOpened,
      };
    case ActionTypes.onMenuChange:
      return {
        currentTab: action.currentTab,
      };

    default:
      return state;
  }
};

export const TabBarProvider = ({ children }) => {
  const [tabState, dispatchTab] = useReducer(reducer, initialState);

  return (
    <TabbarContext.Provider value={{ tabState, dispatchTab }}>
      {children}
    </TabbarContext.Provider>
  );
};

export const useTabBarContext = () => useContext(TabbarContext);
