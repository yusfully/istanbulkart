import React from "react";
import PolyLine from "../svg/PolyLine";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Wallet = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M216.4,100.8h-170c-3.9,0-7.1,3.2-7.1,7.1v320.6c0,3.9,3.2,7.1,7.1,7.1H423c3.9,0,7.1-3.2,7.1-7.1V304.2h33
		c3.9,0,7.1-3.2,7.1-7.1v-62.2c0-3.9-3.2-7.1-7.1-7.1h-33V107.9c0-3.9-3.2-7.1-7.1-7.1h-74.5 M295.8,47.2c7.9-5.3,18.7-2.9,23.5,5.3
		l27.4,46.8c0.4,1.4,1.1,2.7,2.2,3.7l32.5,55.5H130.9L295.8,47.2z"
      />

      <Line {...props} x1="430.1" y1="158.5" x2="100.9" y2="158.5" />
      <PolyLine
        {...props}
        points="430.1,227.8 360.9,227.8 360.9,303.8 430.1,303.8 "
      />
    </g>
  );
};
export default Wallet;
