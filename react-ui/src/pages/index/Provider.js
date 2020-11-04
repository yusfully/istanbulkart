import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext();
export const ActionTypes = {
    isFinished: "isFinished",
    isLocked: "isLocked",
    lockCards:"lockCards",
    changeHeight:"changeHeight"
};

const initialState = {
  isFinished: false,
  isLocked: true,
  lockCards:false,
  height:0
};

const reducer = (state, action) => {
 
  switch (action.type) {
    case ActionTypes.isFinished:
      return {
        ...state,
        isFinished: action.isFinished,
      };
      case ActionTypes.changeHeight:
        return {
          ...state,
          height: action.height,
        };
    case ActionTypes.isLocked:
       
      return {
        ...state,
        isLocked: action.isLocked,
      };
      case ActionTypes.lockCards:
       
        return {
          ...state,
          lockCards: action.lockCards,
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
