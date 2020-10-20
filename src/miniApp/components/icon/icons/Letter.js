import React from "react";
import Line from "../svg/Line";
import Rect from "../svg/Rect";
import PolyLine from "../svg/PolyLine";

const Letter = (props) => {
  return (
    <g>
      <Line {...props} x1="256.7" y1="145.4" x2="256.7" y2="380.9" />
      <PolyLine {...props} points="112.9,171 112.9,141 402.6,141 402.6,171 " />
      <Line {...props} x1="208.7" y1="380.9" x2="304.8" y2="380.9" />
      <Rect {...props} x="15.5" y="31.2" width="469" height="437.6" />
    </g>
  );
};
export default Letter;
