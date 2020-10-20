import React from "react";
import Path from "../svg/Path";
import PolyLine from "../svg/PolyLine";

const Refresh = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M428.9,301.4c-22.5,79.8-95.8,138.2-182.7,138.2c-87,0-160.2-58.5-182.7-138.2"
      />
      <PolyLine {...props} points="377.9,332.7 429.8,297 457.5,352.5 " />
      <Path
        {...props}
        pathData="M72.1,190.2c22.5-79.8,95.8-138.2,182.7-138.2c87,0,160.2,58.5,182.7,138.2"
      />
      <PolyLine {...props} points="123.6,157.6 71.8,193.3 44,137.8 " />
    </g>
  );
};
export default Refresh;
