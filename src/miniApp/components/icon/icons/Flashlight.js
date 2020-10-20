import React from "react";
import Rect from "../svg/Rect";
import Line from "../svg/Line";

const Flashlight = (props) => {
  return (
    <g>
      <Rect
        {...props}
        x="118.5"
        y="164.2"
        class="st1"
        width="264"
        height="133.1"
      />
      <Rect
        {...props}
        x="174.4"
        y="297.4"
        class="st1"
        width="154.8"
        height="167.7"
      />
      <Line {...props} class="st1" x1="141.7" y1="56.7" x2="182.5" y2="97.5" />
      <Line {...props} class="st1" x1="359.5" y1="56.7" x2="318.6" y2="97.5" />
      <Line {...props} class="st1" x1="250.6" y1="46.4" x2="250.6" y2="97.5" />
    </g>
  );
};
export default Flashlight;
