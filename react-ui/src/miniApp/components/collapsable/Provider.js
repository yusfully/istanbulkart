import React, { createContext, useReducer, useContext } from "react";

const CollapseContext = createContext();
export const ActionTypes = {
  onChange: "onOpened",
  withButton: "withButton",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.onChange:
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    case ActionTypes.withButton:
      return {
        ...state,
        withButton: action.withButton,
      };

    default:
      return state;
  }
};
let createInitial = (isOpened) => {
  let reducers = {
    isOpened: isOpened,
    withButton: false,
  };

  return reducers;
};

export const CollapsableProvider = ({ children, isOpened }) => {
  const [collapseState, dispatchCollapse] = useReducer(
    reducer,
    createInitial(isOpened)
  );

  return (
    <CollapseContext.Provider value={{ collapseState, dispatchCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapseContext = () => useContext(CollapseContext);
