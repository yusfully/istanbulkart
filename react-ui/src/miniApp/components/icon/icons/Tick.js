import React from "react";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Plane = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        class="st1"
        points="384.1,162.9 218.8,350.1 144.2,262.9 "
      />
      <Circle {...props} class="st1" cx="251.2" cy="250" r="226.8" />
    </g>
  );
};
export default Plane;
