import React, { useRef, useEffect, useState } from "react";
import { useCollapseContext } from "./Provider";

const Body = ({ children, action }) => {
  const { dispatchCollapse } = useCollapseContext();

  const handleTouchStart = (e) => {};
  const handleTouchEnd = (e) => {
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
      className="collapse-body"
    >
      {children}
    </div>
  );
};

export default Body;
