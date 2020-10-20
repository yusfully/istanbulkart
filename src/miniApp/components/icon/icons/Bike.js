import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";
import PolyLine from "../svg/PolyLine";

const Bike = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        points="172.3,161.4 322.4,161.4 247.5,310.5 108,310.5 "
      />

      <Line {...props} x1="148" y1="112.9" x2="247.5" y2="310.5" />
      <Line {...props} x1="102.7" y1="104.8" x2="172.1" y2="104.8" />
      <PolyLine {...props} points="392,310.5 309.3,100.4 392,100.4 " />
      <Path
        {...props}
        pathData="M392,100.4c15,0,27.1,12.1,27.1,27.1s-12.1,27.1-27.1,27.1"
      />
      <Path
        {...props}
        pathData="M415.9,223.9c46.9,13.2,74.3,62,61.1,108.9s-62,74.3-108.9,61.1s-74.3-62-61.1-108.9"
      />
      <Path
        {...props}
        pathData="M196.1,328.2c-9.7,47.8-56.4,78.6-104.2,68.8s-78.6-56.4-68.8-104.2s56.4-78.6,104.2-68.8"
      />
    </g>
  );
};
export default Bike;
