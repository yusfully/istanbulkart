import React from "react";
import Rect from "../svg/Rect";

const Grid = (props) => {
  return (
    <g>
      <Rect {...props} x="43.4" y="43.7" width="174.8" height="174.8" />
      <Rect {...props} x="283.4" y="43.7" width="174.8" height="174.8" />
      <Rect {...props} x="43.4" y="281.8" width="174.8" height="174.8" />
      <Rect {...props} x="283.4" y="281.8" width="174.8" height="174.8" />
    </g>
  );
};
export default Grid;
