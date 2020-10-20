import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";
import Rect from "../svg/Rect";

const Fuel = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M76.6,63.6h250c10.7,0,19.5,8.7,19.5,19.5v134.4c0,10.7-8.7,19.5-19.5,19.5h-250c-10.7,0-19.5-8.7-19.5-19.5
	V83.1C57.1,72.4,65.8,63.6,76.6,63.6z"
      />
      <Line {...props} x1="123.2" y1="154.4" x2="285.3" y2="154.4" />
      <Path
        {...props}
        pathData="M109.6,237h184c10.7,0,19.5,8.7,19.5,19.5v167.5c0,10.7-8.7,19.5-19.5,19.5h-184c-10.7,0-19.5-8.7-19.5-19.5
	V256.4C90.1,245.7,98.9,237,109.6,237z"
      />
      <Path
        {...props}
        pathData="M428.6,220.5v198.1c0,13.7-11.1,24.8-24.8,24.8c-13.7,0-24.8-11.1-24.8-24.8V303c0-13.7-11.1-24.8-24.8-24.8
	H313"
      />

      <Rect
        {...props}
        x="403.8"
        y="129.7"
        class="st2"
        width="49.5"
        height="90.8"
      />

      <Line {...props} x1="419.7" y1="123.7" x2="389.5" y2="64.9" />
    </g>
  );
};
export default Fuel;
