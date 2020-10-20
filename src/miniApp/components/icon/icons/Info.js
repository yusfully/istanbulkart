import React from "react";
import Line from "../svg/Line";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Info = (props) => {
  return (
    <g>
      <Circle {...props} cx="251.5" cy="250" r="222.3" />
      <PolyLine {...props} points="210.7,217.4 260.8,217.4 260.8,365.3 " />
      <Line {...props} x1="199.1" y1="365.3" x2="316.9" y2="365.3" />
      <Line {...props} x1="260.8" y1="129.5" x2="260.8" y2="151.7" />
    </g>
  );
};
export default Info;
