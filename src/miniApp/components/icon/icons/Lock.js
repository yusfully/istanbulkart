import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Lock = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M403.4,451.3H96.6c-3.7,0-6.8-3-6.8-6.8V213.7c0-3.7,3-6.8,6.8-6.8h306.8c3.7,0,6.8,3,6.8,6.8v230.9
	C410.1,448.3,407.1,451.3,403.4,451.3z"
      />
      <Path
        {...props}
        pathData="M147.6,203.9v-52.8c0-56.3,46.1-102.4,102.4-102.4h0c56.3,0,102.4,46.1,102.4,102.4"
      />
      <Line {...props} x1="250" y1="287.7" x2="250" y2="359.8" />
    </g>
  );
};
export default Lock;
