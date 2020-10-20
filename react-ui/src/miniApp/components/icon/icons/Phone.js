import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Phone = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M380.1,437.5H127.5c-1.6,0-2.9-1.3-2.9-2.9V63.2c0-1.6,1.3-2.9,2.9-2.9h252.5c1.6,0,2.9,1.3,2.9,2.9v371.4
        C383,436.2,381.7,437.5,380.1,437.5z"
      />
      <Line {...props} x1="240.5" y1="103.7" x2="263.5" y2="103.7" />
      <Line {...props} x1="281.2" y1="103.7" x2="290.9" y2="103.7" />
      <Line {...props} x1="215.1" y1="103.7" x2="224.8" y2="103.7" />
      <Line {...props} x1="124.6" y1="378.9" x2="383" y2="378.9" />
      <Line {...props} x1="124.6" y1="149.5" x2="383" y2="149.5" />
      <Line {...props} x1="223.4" y1="410" x2="276.5" y2="410" />
    </g>
  );
};
export default Phone;
