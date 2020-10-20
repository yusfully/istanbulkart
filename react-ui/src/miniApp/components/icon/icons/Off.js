import React from "react";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Off = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        class="st1"
        points="420.3,98.9 250,250 79.6,398.4 "
      />
      <Circle {...props} class="st1" cx="251.2" cy="250" r="226.8" />
    </g>
  );
};
export default Off;
