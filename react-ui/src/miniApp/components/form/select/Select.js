import React, { useRef, useState, useEffect } from "react";
import BoxSelect from "./SelectBox";
import { useFormContext } from "../form/Provider";
import "./select.scss";

const Select = ({
  placeholder,
  options,
  multiple,
  children,
  label,
  id,
  uiType,
  validation,
  pos,
  selectedDefault

}) => {
  const { stateForm, dispatchForm } = useFormContext();
  const [value, setValue] = useState();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const domelement = useRef();
  const handleFieldChange = (fieldId, inputValue) => {
    
    setShowError(true);
    setValue(inputValue);
  };

  useEffect(() => {
    stateForm.isSubmit && setShowError(true);
  }, [stateForm.isSubmit]);
  useEffect(() => {
    if (
      (validation && validation.required && value === undefined) ||
      value === null ||
      (value && value.length <= 0)
    ) {
      setError(`Zorunlu  seçim alanı`);
    } else if (
      validation &&
      validation.maxChoise &&
      validation.maxChoise < value.length
    ) {
      setError(`En fazla ${validation.maxChoise} seçim yapmalısınız`);
    } else if (
      validation &&
      validation.minChoise &&
      validation.minChoise > value.length
    ) {
      setError(`En en ${validation.minChoise} seçim yapmalısınız`);
    } else {
      setError("");
    }

    if (error.length > 0) {
      dispatchForm({
        type: "onError",
        id: id,
        error: error,
      });
    } else {
      dispatchForm({
        type: "onDeleteError",
        id: id,
      });
    }

    dispatchForm({
      type: "onSubmit",
      id: id,
      value: value,
    });
  }, [value]);

  const onOpen = () => {
    if (domelement.current.getBoundingClientRect().y > window.innerHeight / 2) {
      domelement.current.classList.add("list-top");
    } else {
      domelement.current.classList.remove("list-top");
    }
  };

  return (
    <div ref={domelement} className={`form-block ${uiType ? uiType : ""} `}>
      {label && <div className="label">
        <p>{label}</p>
      </div>}
      <BoxSelect
        optionsPos="bottom"
        id={id}
        pos={`${pos ? pos : ""}`}
        onClick={onOpen}
        selectedDefault={selectedDefault}
        onSelect={handleFieldChange}
        max={validation && validation.maxChoise && validation.maxChoise}
        placeholder={`${placeholder}`}
        options={options}
        multiple={multiple ? true : false}
      ></BoxSelect>
      {showError ? <div className="error">{error}</div> : null}
      {children}
    </div>
  );
};

export default Select;
