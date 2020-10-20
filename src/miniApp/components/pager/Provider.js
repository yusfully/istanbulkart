import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext();
export const ActionTypes = {
  addPage: "addPage",
  onMount: "onMount",
  onUnMount: "onUnMount",
  onUpdate: "onUpdate",
  onReceiveData: "onReceiveData",
};

const initialState = {
  pages: [],
  mounted: false,
  unMounted: false,
  updated: false,
  receiveData: false,
};

const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case ActionTypes.addPage:
      return {
        ...state,
        pages: [...state.pages, action.newPage],
      };
    case ActionTypes.onMount:
      return {
        ...state,
        mounted: true,
      };
    case ActionTypes.onUnMount:
      return {
        ...state,
        unMounted: true,
      };
    case ActionTypes.onReceiveData:
      return {
        ...state,
        receivedData: {
          prevData: state.receivedData.data,
          data: action.receivedData,
        },
      };
    case ActionTypes.onUpdate:
      return {
        ...state,
        updated: {
          prevData: state.updated.data,
          data: action.data,
        },
      };

    default:
      return state;
  }
};

export const PageProvider = ({ children }) => {
  const [pageState, dispatchNewPage] = useReducer(reducer, initialState);

  return (
    <PageContext.Provider value={{ pageState, dispatchNewPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
