import React from "react";
import Path from "../svg/Path";

import Line from "../svg/Line";

const Bell = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M292.8,433.5c0,24.9-20.3,45.2-45.2,45.2s-45.2-20.3-45.2-45.2"
      />
      <Path {...props} pathData="M444,412.6" />
      <Path
        {...props}
        pathData="M418.7,344.2c15.3,0,34.3,16.2,34.3,36.1v0c0,19.8-19.1,36.1-34.3,36.1H82.8c-15.3,0-34.3-16.2-34.3-36.1v0
        c0-19.8,19.1-36.1,34.3-36.1c29.3,0,47.8-28,47.8-57.3v-95.5c0-64.5,52.5-110.4,117-110.4s116.9,45.9,116.9,110.4v95.5
        C364.5,316.2,389.4,344.2,418.7,344.2"
      />
      <Line {...props} x1="247.6" y1="113.9" x2="247.6" y2="19.6" />
    </g>
  );
};
export default Bell;
