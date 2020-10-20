import React from "react";
import Line from "../svg/Line";

const List = (props) => {
  return (
    <g>
      <Line {...props} x1="171.1" y1="100" x2="472.1" y2="100" />
      <Line {...props} x1="171.1" y1="250.5" x2="472.1" y2="250.5" />
      <Line {...props} x1="171.1" y1="400" x2="472.1" y2="400" />
      <Line {...props} x1="27.6" y1="100" x2="87.7" y2="100" />
      <Line {...props} x1="27.6" y1="250.5" x2="87.7" y2="250.5" />
      <Line {...props} x1="27.6" y1="400" x2="87.7" y2="400" />
    </g>
  );
};
export default List;
