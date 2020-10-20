import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const Id = (props) => {
  return (
    <g>
      <Circle {...props} cx="247.7" cy="250.5" r="230.2" />
      <Path
        {...props}
        pathData="M299.7,357.4c-4.6,4.2-22.4,20.3-50,20.3c-40.4,0-73.4-33.1-73.4-73.4c0-30,0-60,0-89.9"
      />
      <Path
        {...props}
        pathData="M197.8,142.7c14.9-14.8,35.8-21.6,51.9-21.6c40.4,0,73.4,33.1,73.4,73.4c0,26.7,0,53.4,0,80"
      />
      <Path {...props} pathData="M248.8,192.4c0,38.5,0,77,0,115.5" />
    </g>
  );
};
export default Id;
