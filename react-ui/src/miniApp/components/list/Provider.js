import React, { createContext, useReducer, useContext } from "react";

const ListContext = createContext();
export const ActionTypes = {
    changeCurrent: "changeCurrent",
    closeAll: "closeAll",
};

const initialState = {
  current: -1,
  prev:-1,
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case ActionTypes.closeAll:
      return {
        current: -1,
        prev: -1,
      };
    case ActionTypes.changeCurrent:
      return {
        prev:state.current,
        current: action.current,
      };
   
   

    default:
      return state;
  }
};

export const ListProvider = ({ children }) => {
  const [listState, listDispatch] = useReducer(reducer, initialState);

  return (
    <ListContext.Provider value={{ listState, listDispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
