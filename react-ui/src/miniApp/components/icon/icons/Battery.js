import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Battery = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M416.1,334.4h48.4c3.1,0,5.6-3.5,5.6-7.8V188c0-4.3-2.5-7.8-5.6-7.8h-48.4 M416.1,101.9c0-4.3-3.5-7.8-7.8-7.8
		H45c-4.3,0-7.8,3.5-7.8,7.8v305.8c0,4.3,3.5,7.8,7.8,7.8h363.3c4.3,0,7.8-3.5,7.8-7.8V101.9z M416.1,318.7V195.8"
      />

      <Line {...props} x1="125.2" y1="160.1" x2="125.2" y2="350.1" />
      <Line {...props} x1="231.4" y1="172.9" x2="231.4" y2="333.1" />
      <Line {...props} x1="337.7" y1="156.5" x2="337.7" y2="350.1" />
    </g>
  );
};
export default Battery;
