import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Trash = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M371,457H119.5c-3.9,0-7.1-2.2-7.4-5L74.9,123.4c-0.2-1.5,0.5-3,1.9-4.1c1.4-1.1,3.4-1.8,5.5-1.8h325.8
    c2.1,0,4.1,0.6,5.5,1.8c1.4,1.1,2.1,2.6,1.9,4.1L378.4,452C378.1,454.9,374.9,457,371,457z"
      />

      <Line {...props} x1="39.9" y1="117.5" x2="448.9" y2="117.5" />
      <Line {...props} x1="149" y1="178.2" x2="173.6" y2="396.3" />
      <Line {...props} x1="318.3" y1="396.3" x2="342.6" y2="178.2" />
      <Line {...props} x1="250.4" y1="177.4" x2="250.4" y2="395.2" />
      <Path
        {...props}
        pathData="M186.2,106.4V76.4c0-7.1,7.5-12.9,16.6-12.9h91.5c9.2,0,16.6,5.8,16.6,12.9v29.9"
      />
    </g>
  );
};
export default Trash;
