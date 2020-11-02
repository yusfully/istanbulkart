import React from "react";
import { CheckBoxProvider } from "./Provider";

import "./checkbox.scss";

const CheckBoxGroup = ({ children, choosable, id }, ...props) => {
  const renderChildren = (children) => {
    const childrenresult = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        isGroup: true,
      });
    });

    return childrenresult;
  };

  return (
    <CheckBoxProvider choosable={choosable} id={id}>
      {renderChildren(children)}
    </CheckBoxProvider>
  );
};
export default CheckBoxGroup;
