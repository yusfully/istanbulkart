import React from "react";
import Path from "../svg/Path";

import Line from "../svg/Line";
import Circle from "../svg/Circle";

const Pin = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M293.4,383.2c24.7,7.3,41.3,20.6,41.3,35.9c0,23.1-37.9,41.8-84.7,41.8s-84.7-18.7-84.7-41.8
	c0-15.6,17.2-29.1,42.8-36.3"
      />
      <Line {...props} x1="250" y1="413.8" x2="250" y2="243.5" />
      <Circle {...props} cx="250" cy="137.2" r="97.1" />
      <Path {...props} pathData="M250,91.2c25.4,0,46.1,20.6,46.1,46.1" />
      <Path {...props} pathData="M432.2,399.9" />
    </g>
  );
};
export default Pin;
