import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const Eye = (props) => {
  return (
    <g>
      <Circle {...props} cx="252.5" cy="245.5" r="56.5" />
      <Circle {...props} cx="252.5" cy="245.5" r="116.4" />
      <Path
        {...props}
        pathData="M21,260.9C73.4,151.5,142.1,71.1,251.1,71.1c107.6,0,184.1,90.4,228.9,186.7"
      />
      <Path
        {...props}
        pathData="M480,257.8c-52.4,74.4-121.1,170-230.1,170C142.4,427.8,65.9,326.4,21,260.9"
      />
    </g>
  );
};
export default Eye;
