import React from "react";
import PolyLine from "../svg/PolyLine";

import Line from "../svg/Line";

const Edit = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        points="35.7,449.3 87.4,212.5 243.6,103.9 396.3,256.1 283.2,413.7 50.9,468.9 "
      />
      <Line {...props} x1="43.5" y1="459" x2="206.1" y2="290.3" />
      <PolyLine
        {...props}
        points="218.1,77.2 268.7,27.3 464.6,227.9 418.3,277.2 "
      />
    </g>
  );
};
export default Edit;
