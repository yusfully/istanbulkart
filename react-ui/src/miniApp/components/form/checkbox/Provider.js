import React, { createContext, useReducer, useContext } from "react";

const CheckBoxContext = createContext();
export const ActionTypes = {
  onChecked: "onChecked",
  onError: "onError",
  onUnChecked: "onUnChecked",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.onChecked:
      if (state.choosable === state.checked) {
        let { [Object.keys(state.value)[0]]: omit, ...res } = state.value;

        return {
          ...state,
          value: {
            ...res,
            [action.id]: action.value,
          },
          checked: Object.keys(state.value).length + 1,
        };
      } else {
        return {
          ...state,
          value: {
            ...state.value,
            [action.id]: action.value,
          },
          checked: Object.keys(state.value).length + 1,
        };
      }

    case ActionTypes.onUnChecked:
      let { [action.id]: omit, ...rest } = state.value;

      return {
        ...state,
        value: {
          ...rest,
        },
        checked: Object.keys(rest).length,
      };
    case ActionTypes.onError:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

let createInitial = (choosable, id) => {
  let reducers = {
    value: {},
    error: "",
    checked: 0,
    id: id,
    choosable: choosable,
  };

  return reducers;
};

export const CheckBoxProvider = ({ children, choosable, id }) => {
  const [checkBoxGroupState, dispatchCheckBoxGroup] = useReducer(
    reducer,
    createInitial(choosable, id)
  );

  return (
    <CheckBoxContext.Provider
      value={{ checkBoxGroupState, dispatchCheckBoxGroup }}
    >
      {children}
    </CheckBoxContext.Provider>
  );
};

export const useCheckBoxContext = () => useContext(CheckBoxContext);
