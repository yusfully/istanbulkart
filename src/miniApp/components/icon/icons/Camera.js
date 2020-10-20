import React from "react";
import Circle from "../svg/Circle";
import Line from "../svg/Line";

const Camera = (props) => {
  return (
    <g>
      <Circle {...props} cx="250" cy="250" r="219.9" />
      <Line {...props} x1="250" y1="469.9" x2="357.7" y2="239.7" />
      <Line {...props} x1="306.3" y1="150.8" x2="432.6" y2="369.6" />
      <Line {...props} x1="428.2" y1="121.1" x2="173.4" y2="180.4" />
      <Line {...props} x1="150.8" y1="278.9" x2="206.7" y2="34.5" />
      <Line {...props} x1="226.4" y1="343" x2="41.3" y2="185.9" />
      <Line {...props} x1="321.7" y1="316.6" x2="80.9" y2="390" />
    </g>
  );
};
export default Camera;
