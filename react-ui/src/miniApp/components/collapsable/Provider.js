import React, { createContext, useReducer, useContext } from "react";

const CollapseContext = createContext();
export const ActionTypes = {
  onChange: "onOpened",
  withButton: "withButton",
  close: "close",
  scrolling:"scrolling"
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
      case ActionTypes.close:
        return {
          ...state,
          isOpened: false,
        };
        case ActionTypes.scrolling:
        return {
          ...state,
          scrolling: action.scrolling,
        };
    default:
      return state;
  }
};
let createInitial = (isOpened) => {
  let reducers = {
    isOpened: isOpened || false,
    withButton: false,
    scrolling:true
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
