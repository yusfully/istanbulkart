import React from "react";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Arrow = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        class="st1"
        points="219.9,160.6 322.8,251.4 219.9,339.4 "
      />
      <Circle {...props} class="st1" cx="251.2" cy="250" r="226.8" />
    </g>
  );
};
export default Arrow;
