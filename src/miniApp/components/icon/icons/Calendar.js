import React from "react";
import Line from "../svg/Line";
import Rect from "../svg/Rect";

const Calendar = (props) => {
  return (
    <g>
      <Rect
        {...props}
        x="61.8"
        y="66.9"
        class="st1"
        width="377.9"
        height="377.9"
      />
      <Line {...props} class="st1" x1="61.8" y1="173.5" x2="439.7" y2="173.5" />
      <Line {...props} class="st1" x1="154" y1="21.7" x2="154" y2="112" />
      <Line {...props} class="st1" x1="356.4" y1="21.7" x2="356.4" y2="112" />
    </g>
  );
};
export default Calendar;
