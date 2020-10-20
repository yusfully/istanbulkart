import React from "react";
import Path from "../svg/Path";
import PolyLine from "../svg/PolyLine";

const Plane = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M120.6,301.1l-65.6-64.4l-43.5,19.1l44.4,89.6c-7.8,9.5-10.2,20.8-3,33.7l0,0c11.5,20.7,32.4,18.4,53.1,6.9
        l63.9-13.9l83.2-45.9l-41,134.9l82-45.7L363.7,264l90.3-50.3c30.5-17,28.8-42,19.3-53.6c-12.8-15.7-58-23.3-90.5-5.2L120.6,301.1z"
      />
      <PolyLine
        {...props}
        points="203.2,255.1 103.5,221.3 172.6,182.8 294.6,204.1  "
      />
    </g>
  );
};
export default Plane;
