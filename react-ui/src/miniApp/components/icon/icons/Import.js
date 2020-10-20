import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";
import PolyLine from "../svg/PolyLine";

const Import = (props) => {
  return (
    <g>
      <Line {...props} x1="169.7" y1="249.3" x2="461.2" y2="249.3" />
      <Path
        {...props}
        pathData="M372.9,324.5v76.9c0,15.7-10.6,28.5-23.6,28.5H63.4c-13,0-23.6-12.8-23.6-28.5V99.6c0-15.7,10.6-28.5,23.6-28.5
        h285.9c13,0,23.6,12.8,23.6,28.5v77.9"
      />
      <PolyLine {...props} points="265.2,334.7 169.7,250.3 265.2,168.6 " />
    </g>
  );
};
export default Import;
