import React from "react";
import PolyLine from "../svg/PolyLine";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Basket = (props) => {
  return (
    <g>
      <Line {...props} x1="20.4" y1="189.6" x2="479.6" y2="189.6" />
      <Path
        {...props}
        pathData="M124.4,189.3V65.1c0-9,7.3-16.3,16.3-16.3h212.8c9,0,16.3,7.3,16.3,16.3v124.4"
      />
      <PolyLine
        {...props}
        class="st1"
        points="46.9,189.5 100.2,450.7 400.2,450.7 "
      />

      <Line {...props} x1="185.4" y1="376.1" x2="185.4" y2="250.4" />
      <Line {...props} x1="313.3" y1="372" x2="313.3" y2="250.4" />
      <Line {...props} x1="249" y1="250.4" x2="249" y2="329.1" />
      <Line {...props} x1="447" y1="189.5" x2="400.2" y2="450.7" />
    </g>
  );
};
export default Basket;
