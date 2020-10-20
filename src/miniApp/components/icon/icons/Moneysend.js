import React from "react";
import PolyLine from "../svg/PolyLine";
import Ellipse from "../svg/Ellipse";
import Path from "../svg/Path";

import Line from "../svg/Line";

const Moneysend = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        points="141.2,133.5 461.6,133.5 423.8,371.6 103.4,371.6 "
      />
      <Line {...props} x1="64.8" y1="177.2" x2="151.4" y2="177.2" />
      <Line {...props} x1="31.6" y1="222.6" x2="103.4" y2="222.6" />
      <Line {...props} x1="75.4" y1="276.3" x2="127.7" y2="276.3" />
      <Line {...props} x1="61.7" y1="323.3" x2="89.2" y2="323.3" />
      <Line {...props} x1="338.8" y1="91.8" x2="154.4" y2="91.8" />
      <Line {...props} x1="251" y1="412.6" x2="138.2" y2="412.6" />
      <Line {...props} x1="100.3" y1="412.6" x2="59.2" y2="412.6" />
      <Line {...props} x1="117.6" y1="91.8" x2="81.7" y2="91.8" />
      <Path
        {...props}
        pathData="M381.5,177.2H206.7c0,22.3-15.6,40.3-34.8,40.3c-1.9,0-3.8-0.2-5.6-0.6L155.1,288c16.7,3,29.5,19.6,29.5,39.8
	h174.8c0-22.3,15.6-40.3,34.8-40.3c1.6,0,3.1,0.2,4.6,0.4l11.3-71.1C393.8,213.4,381.5,197,381.5,177.2z"
      />
      <Ellipse {...props} cx="279.5" cy="252.5" rx="48.8" ry="39.2" />
    </g>
  );
};
export default Moneysend;
