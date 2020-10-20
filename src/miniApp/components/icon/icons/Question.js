import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Question = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M186.9,138.2c13.3-15.7,33.2-25.7,55.4-25.7c40.1,0,72.5,32.5,72.5,72.5s-32.5,72.5-72.5,72.5"
      />
      <Line {...props} x1="242.3" y1="257.6" x2="242.3" y2="309.1" />
      <Line {...props} x1="242.3" y1="373.2" x2="242.3" y2="385.6" />
      <Path
        {...props}
        pathData="M450.2,461.7H47.1c-4.2,0-7.7-3.5-7.7-7.7V46c0-4.2,3.5-7.7,7.7-7.7h403.1c4.2,0,7.7,3.5,7.7,7.7v408
	C457.9,458.2,454.4,461.7,450.2,461.7z"
      />
    </g>
  );
};
export default Question;
