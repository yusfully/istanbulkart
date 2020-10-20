import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Chart = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M348.9,405V140.5c0-10,7.4-18.3,16.3-18.3h40.1c9,0,16.3,8.2,16.3,18.3V405"
      />
      <Path
        {...props}
        pathData="M209.3,405V232c0-10,7.4-18.3,16.3-18.3h40.1c9,0,16.3,8.2,16.3,18.3v173"
      />
      <Path
        {...props}
        pathData="M69.7,405v-76.6c0-10,7.4-18.3,16.3-18.3h40.1c9,0,16.3,8.2,16.3,18.3V405"
      />
      <Line {...props} x1="43.4" y1="453.9" x2="458.1" y2="453.9" />
    </g>
  );
};
export default Chart;
