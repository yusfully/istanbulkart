import React, { useEffect } from "react";
import { FormProvider } from "./Provider";
import FormElement from "./FormElement";

const Form = ({ children,onFormSubmited,onFormChange }) => {
  return (
    <FormProvider>
      <FormElement onFormSubmited={onFormSubmited} onFormChange={onFormChange}>{children}</FormElement>
    </FormProvider>
  );
};
export default Form;
