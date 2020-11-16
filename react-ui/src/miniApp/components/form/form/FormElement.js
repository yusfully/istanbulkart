import React, { useState, useEffect, useRef, createRef } from "react";
import { useFormContext } from "./Provider";
import "./form.scss";
const FormElement = ({ children,onFormSubmited,onFormChange }) => {
  const { stateForm, dispatchForm } = useFormContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Object.keys(stateForm.errors).length > 0) {
      setError(stateForm.errors);
    } else {
      setError(null);
    }
  }, [stateForm.errors]);

  useEffect(() => {

    
    onFormChange && onFormChange(stateForm.values,error)
  }, [stateForm.values])

  const onFormSubmit = (e) => {
    dispatchForm({
      type: "isSubmit",
    });
    e.preventDefault();

    if(!error){
      onFormSubmited(stateForm.values,error)
    }
    
  };

  return <form onSubmit={(e) => onFormSubmit(e)}>{children}</form>;
};

export default FormElement;
