import React from "react";
import Circle from "../svg/Circle";
import Line from "../svg/Line";
const Plus = (props) => {
  return (
    <g>
      <Circle {...props} cx="250.5" cy="251.8" r="221.8" />
      <Line {...props} x1="250.5" y1="164.4" x2="250.5" y2="339.2" />
      <Line {...props} x1="337.9" y1="251.8" x2="163.1" y2="251.8" />
    </g>
  );
};
export default Plus;
