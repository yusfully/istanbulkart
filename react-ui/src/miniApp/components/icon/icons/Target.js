import React from "react";
import Line from "../svg/Line";
import Circle from "../svg/Circle";

const Target = (props) => {
  return (
    <g>
      <Circle {...props} cx="247.8" cy="247.1" r="180" />
      <Circle {...props} cx="247.8" cy="247.1" r="102.3" />
      <Line {...props} x1="247.8" y1="427.1" x2="247.8" y2="472.4" />
      <Line {...props} x1="247.8" y1="25.9" x2="247.8" y2="67" />
      <Line {...props} x1="67.7" y1="249.1" x2="24.5" y2="249.1" />
      <Line {...props} x1="471" y1="249.1" x2="427.8" y2="249.1" />
    </g>
  );
};
export default Target;
