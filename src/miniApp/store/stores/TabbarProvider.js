import React, { createContext, useContext, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";

const TabbarContext = createContext();

let createReducer = (name) => (state, action) => {
  for (let index = 0; index < name.length; index++) {
    if (name[index]) {
      if (action.type === name[index].type) {
        return {
          ...state,
          [name[index].type]: action.payload,
        };
      }
    }
  }

  for (let index = 0; index < name.length; index++) {
    if (name[index]) {
      if (action.type === "/" + name[index].pagePath) {
        if (state.currentTab !== index) {
          return {
            ...state,
            prevTab: state.currentTab,
            currentTab: index,
          };
        } else {
          return state;
        }
      }
    }
  }
  switch (action.type) {
    case "changeTab":
      if (state.currentTab !== action.payload) {
        return {
          ...state,
          prevTab: state.currentTab,
          currentTab: action.payload,
        };
      } else {
        return state;
      }

      break;

    case "toggleShow":
      return {
        ...state,
        isShown: !state.isShown,
      };

      break;

    default:
      return state;
      break;
  }
};

let createInitial = (elements, location) => {
  let reducers = {
    prevTab: 0,
    currentTab: 0,
    isShown: true,
  };
  elements.map((element, index) => {
    reducers[`${element.type}`] = 0;
    if ("/" + element.pagePath === location) {
      reducers.currentTab = index;
    }
  });
  return reducers;
};

export const TabbarProvider = ({ children, connectData }) => {
  let history = useHistory();
  const connect = connectData.map((element, index) => {
    return {
      type: element.connect ? element.connect.type : `tap-${index}`,
      index: index,
      pagePath: element.pagePath,
    };
  });

  const [stateTabbar, dispatchTabbar] = useReducer(
    createReducer(connect),
    createInitial(connect, history.location.pathname)
  );

  history.listen((location) => {
    if (location.pathname !== connect[stateTabbar.currentTab].pagePath) {
      dispatchTabbar({ type: location.pathname });
    }
  });
  return (
    <TabbarContext.Provider value={{ stateTabbar, dispatchTabbar }}>
      {children}
    </TabbarContext.Provider>
  );
};

export const useTabbar = () => useContext(TabbarContext);
