import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Basket = (props) => {
  return (
    <g>
      <Line {...props} x1="29" y1="454.4" x2="464.8" y2="454.4" />
      <Line {...props} x1="29" y1="379.8" x2="464.8" y2="379.8" />
      <Path
        {...props}
        pathData="M69.6,318.3l84.9-272.4c3.3-9.8,17.2-9.8,20.3,0.1l81.6,272.3"
      />
      <Line {...props} x1="229.9" y1="229.9" x2="97.1" y2="229.9" />

      <Path
        {...props}
        pathData="M391.4,316.1h-62.4c-18,0-32.8-14.7-32.8-32.8v-42.4c0-18,14.7-32.8,32.8-32.8h62.4c18,0,32.8,14.7,32.8,32.8
	v42.4C424.2,301.4,409.4,316.1,391.4,316.1z"
      />
      <Path
        {...props}
        pathData="M311.2,164.3c3.5-30.9,27.1-45.4,58.2-45.4l0,0c31.1,0,54.9,25.4,54.9,56.5v68.7"
      />
      <Path {...props} pathData="M424.2,318.3V181" />
    </g>
  );
};
export default Basket;
