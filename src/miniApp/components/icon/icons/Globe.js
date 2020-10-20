import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const Globe = (props) => {
  return (
    <g>
      <Circle {...props} cx="251.6" cy="250.7" r="208.1" />
      <Path
        {...props}
        pathData="M249.6,42.6c47.9,0,86.7,93.2,86.7,208.1s-38.8,208.1-86.7,208.1"
      />
      <Path
        {...props}
        pathData="M249.2,42.6c-47.9,0-86.7,93.2-86.7,208.1s38.8,208.1,86.7,208.1"
      />
      <Path
        {...props}
        pathData="M457.5,250.9c0,45.9-93.2,83.1-208.1,83.1S41.3,296.8,41.3,250.9"
      />
      <Path
        {...props}
        pathData="M457.5,250.5c0-45.9-93.2-83.1-208.1-83.1S41.3,204.6,41.3,250.5"
      />
    </g>
  );
};
export default Globe;
