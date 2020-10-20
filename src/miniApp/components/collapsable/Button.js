import React, { useRef, useEffect, useState } from "react";
import { useCollapseContext } from "./Provider";

const Button = ({ children, action }) => {
  const { dispatchCollapse } = useCollapseContext();

  useEffect(() => {}, []);
  const handleTouchStart = (e) => {};
  const handleTouchEnd = (e) => {
    debugger;
    if (action) {
      dispatchCollapse({
        type: "onOpened",
      });
    } else {
      e.preventDefault();
    }
  };

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className="action"
    >
      {children}
    </div>
  );
};

export default Button;
