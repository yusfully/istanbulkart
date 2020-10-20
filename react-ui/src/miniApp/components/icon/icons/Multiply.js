import React from "react";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Multiply = (props) => {
  return (
    <g>
      <PolyLine {...props} points="364.6,150 250,250 135.4,150" />
      <PolyLine {...props} points="135.4,349.8 250,249.8 364.6,349.8" />
      <Circle {...props} cx="251.2" cy="250" r="226.8" />
    </g>
  );
};
export default Multiply;
