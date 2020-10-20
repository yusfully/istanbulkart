import React from "react";
import Path from "../svg/Path";
import PolyLine from "../svg/PolyLine";

const Target = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M250.1,50c110.7,0,200.5,89.8,200.5,200.5S360.9,451,250.1,451S49.6,361.2,49.6,250.5
	c0-80.9,47.9-150.5,116.8-182.3"
      />
      <PolyLine {...props} points="291.9,98.7 246.3,49.3 300.8,11.4 " />
    </g>
  );
};
export default Target;
