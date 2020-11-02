import React, { useState, useRef, useEffect } from "react";
import { useFormContext } from "../form/Provider";
import { useCheckBoxContext } from "./Provider";
import "./checkbox.scss";

const CheckBox = ({
  checked,
  id,
  required,
  uiType,
  listType,
  label,
  isGroup,
}) => {
  const [checkedState, setchecked] = useState(checked || false);
  const [checkedGroup, setcheckedGroup] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const checkBox = useRef();
  const inputDom = useRef();

  const { stateForm, dispatchForm } = useFormContext();

  const handleClick = (e) => {
    setchecked(!checkedState);
  };

  const { checkBoxGroupState, dispatchCheckBoxGroup } = useCheckBoxContext();

  useEffect(() => {
    if (checkBoxGroupState.value[id]) {
      if (!checkedGroup) {
        dispatchForm({
          type: "onSubmit",
          id: checkBoxGroupState.id,
          value: checkBoxGroupState.value,
        });
      }
      if (
        checkBoxGroupState.required &&
        !checkBoxGroupState.checked > 0 &&
        checkBoxGroupState.error.length > 0
      ) {
        dispatchForm({
          type: "onDeleteError",
          id: checkBoxGroupState.id,
        });
      }
      setcheckedGroup(true);
    } else {
      if (
        checkBoxGroupState.required &&
        checkBoxGroupState.checked > 0 &&
        checkBoxGroupState.error.length > 0
      ) {
        dispatchForm({
          type: "onError",
          id: checkBoxGroupState.id,
          error: "secmelisin",
        });
      }

      setcheckedGroup(false);
      if (checkedState) {
        setchecked(false);
      }
    }
  }, [checkBoxGroupState.value]);

  useEffect(() => {
    if (checkedState) {
      dispatchCheckBoxGroup({
        type: "onChecked",
        id: id,
        value: label ? label : id,
      });
    } else {
      dispatchCheckBoxGroup({
        type: "onUnChecked",
        id: id,
      });
    }
  }, [checkedState]);

  useEffect(() => {
    if (
      stateForm.isSubmit !== stateForm.isSubmit &&
      stateForm.isSubmit === true
    ) {
      setShowError(true);
    }
  }, [stateForm.isSubmit]);

  useEffect(() => {
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
  }, [error]);

  return (
    <div
      className={`check-box-block form-block ${listType ? "list-type" : ""}`}
      onClick={(e) => handleClick(e)}
    >
      <div className="label">{label && label}</div>
      <div
        ref={checkBox}
        className={`chechbox-left ${uiType ? uiType : ""} ${
          checkedGroup ? "checked" : ""
        }`}
      >
        <div className="check-box">
          <svg class="check-box-icon" viewBox="0 0 32 32">
            <polyline points="8,20 16,24 25,10"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
