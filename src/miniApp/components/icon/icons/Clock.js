import React from "react";
import PolyLine from "../svg/PolyLine";
import Circle from "../svg/Circle";

const Clock = (props) => {
  return (
    <g>
      <Circle {...props} cx="250.3" cy="249.6" r="230" />
      <PolyLine {...props} points="250.3,92.2 250.3,247.4 173.2,319.8 " />
    </g>
  );
};
export default Clock;
