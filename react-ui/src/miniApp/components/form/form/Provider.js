import React, { createContext, useReducer, useContext } from "react";

const FormContext = createContext();
export const ActionTypes = {
  onError: "onError",
  onSubmit: "onSubmit",
  isSubmit: "isSubmit",
  onDeleteError: "onDeleteError",
};

const initial = {
  values: {},
  errors: {},
  isSubmit: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.onError:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.error,
        },
      };
    case ActionTypes.isSubmit:
     
      return {
        ...state,
        isSubmit: true,
      };
    case ActionTypes.onDeleteError:
      let { [[action.id]]: omit, ...res } = state.errors;
      return {
        ...state,
        errors: {
          ...res,
        },
      };

    case ActionTypes.onSubmit:
      
      return {
        ...state,
        values: {
          ...state.values,
          [action.id]: action.value,
        },
      };
    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [stateForm, dispatchForm] = useReducer(reducer, initial);

  return (
    <FormContext.Provider value={{ stateForm, dispatchForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
