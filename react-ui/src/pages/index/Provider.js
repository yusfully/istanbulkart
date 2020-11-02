import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext();
export const ActionTypes = {
    isFinished: "isFinished",
    isLocked: "isLocked",
};

const initialState = {
  isFinished: false,
  isLocked: true,
};

const reducer = (state, action) => {
 
  switch (action.type) {
    case ActionTypes.isFinished:
      return {
        ...state,
        isFinished: action.isFinished,
      };
    case ActionTypes.isLocked:
       
      return {
        ...state,
        isLocked: action.isLocked,
      };
    
   
    default:
      return state;
  }
};

export const PageProvider = ({ children }) => {
  const [cardsState, cardsDispatch] = useReducer(reducer, initialState);

  return (
    <PageContext.Provider value={{ cardsState, cardsDispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export const useCardsContext = () => useContext(PageContext);
