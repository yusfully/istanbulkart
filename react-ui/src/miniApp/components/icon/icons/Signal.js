import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const Signal = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M176.5,312.7c13.3-27.2,41.2-46,73.5-46c30.3,0,56.7,16.4,70.8,40.9"
      />
      <Path
        {...props}
        pathData="M411.6,276.1c-30.6-58-91.5-97.6-161.6-97.6s-131,39.6-161.6,97.6"
      />
      <Path
        {...props}
        pathData="M475.4,214.7c-49-72-131.7-119.3-225.4-119.3S73.7,142.7,24.6,214.7"
      />
      <Path {...props} pathData="M250,185.1" />
      <Circle {...props} cx="250" cy="377.2" r="28.4" />
    </g>
  );
};
export default Signal;
