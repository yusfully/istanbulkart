import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";
import Circle from "../svg/Circle";
import PolyLine from "../svg/PolyLine";

const Motorbike = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M310.7,155.7c12.6,6.4,21.7,18.7,22.7,32.7l10.8,158.2c1.4,20.7-15.2,37.5-37.3,37.5h-9.8 M208.1,384.1h-12.8
        c-22,0-38.7-16.8-37.2-37.5l10.8-158.2c1-15.1,11.4-28.2,25.6-34.1"
      />
      <Path
        {...props}
        pathData="M213.7,328.3c0-20.7,16.8-37.5,37.5-37.5c20.7,0,37.5,16.8,37.5,37.5v112.4c0,20.7-16.8,37.5-37.5,37.5
        c-20.7,0-37.5-16.8-37.5-37.5V328.3z"
      />
      <Circle {...props} cx="251.2" cy="136" r="52.4" />

      <PolyLine {...props} points="305.2,137.4 348.5,106.3 429.3,106.3 " />
      <PolyLine {...props} points="197.1,137.4 153.8,106.3 70.2,106.3 " />
      <PolyLine {...props} points="101.8,93.5 84.3,32.8 48.6,32.8 " />
      <PolyLine {...props} points="400.5,93.5 418,32.8 458.2,32.8 " />
    </g>
  );
};
export default Motorbike;
