import React from "react";
import Line from "../svg/Line";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const Compass = (props) => {
  return (
    <g>
      <Circle {...props} cx="248.1" cy="246.8" r="220.7" />
      <Circle {...props} cx="247.6" cy="240.3" r="39.9" />
      <Path
        {...props}
        pathData="M191.4,211.5c-9.8,25.8-9.9,50.3-0.2,76.1l49.9,132.7c2.1,6.3,10.9,6.3,13,0L301,287.7
	c9.2-24.5,9.7-51.4,1.4-76.1L254.1,76.7c-2.1-6.3-10.9-6.3-13,0L191.4,211.5z"
      />
      <Line {...props} x1="468.9" y1="242.5" x2="436.4" y2="242.5" />
      <Line {...props} x1="59.8" y1="242.5" x2="27.4" y2="242.5" />
      <Line {...props} x1="248.1" y1="467.5" x2="248.1" y2="435.1" />
      <Line {...props} x1="248.1" y1="59.8" x2="248.1" y2="27.3" />
    </g>
  );
};
export default Compass;
