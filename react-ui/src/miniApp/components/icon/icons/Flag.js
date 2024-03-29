import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Flag = (props) => {
  return (
    <g>
      <Line {...props} x1="62.3" y1="69.7" x2="62.3" y2="453.4" />
      <Path
        {...props}
        pathData="M416.8,301.9l-73.1-17.6c-18.3-4.4-37.4-3.2-55,3.5l-55.2,20.9c-16.1,6.1-33.6,7.6-50.5,4.5l-60.2-11.3
        c-9,0-16.3-7.3-16.3-16.3V84.1c0-9,7.3-16.3,16.3-16.3l60.2,11.3c16.9,3.2,34.4,1.6,50.5-4.5l55.2-20.9c17.6-6.7,36.7-7.9,55-3.5
        l73.1,17.6c9,0,16.3,7.3,16.3,16.3v201.6C433.1,294.6,425.8,301.9,416.8,301.9z"
      />
    </g>
  );
};
export default Flag;
