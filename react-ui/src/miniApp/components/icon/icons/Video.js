import React from "react";
import Circle from "../svg/Circle";
import Line from "../svg/Line";

const Video = (props) => {
  return (
    <g>
      <Circle {...props} cx="181.2" cy="172.7" r="46" />
      <Circle {...props} cx="322.7" cy="172.7" r="46" />
      <Circle {...props} cx="181.2" cy="331.5" r="46" />
      <Circle {...props} cx="322.7" cy="331.5" r="46" />
      <Circle {...props} cx="252" cy="252.1" r="209.8" />
      <Line {...props} x1="243.4" y1="461.9" x2="480.3" y2="461.9" />
    </g>
  );
};
export default Video;
