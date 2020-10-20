import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Warning = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M245.8,57.6L28.6,433.7c-2.1,3.6,0.5,8.1,4.7,8.1h434.3c4.2,0,6.8-4.5,4.7-8.1L255.2,57.6
	C253.1,53.9,247.9,53.9,245.8,57.6z"
      />
      <Line {...props} x1="250.5" y1="192.7" x2="250.5" y2="306" />
      <Line {...props} x1="250.5" y1="357.9" x2="250.5" y2="376" />
    </g>
  );
};
export default Warning;
