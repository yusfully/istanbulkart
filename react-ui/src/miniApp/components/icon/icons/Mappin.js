import React from "react";
import Path from "../svg/Path";

const MapPin = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M300.1,156.1c0-25.3-20.6-45.9-45.9-45.9c-25.3,0-45.9,20.6-45.9,45.9c0,25.3,20.6,45.9,45.9,45.9
        C279.5,202.1,300.1,181.5,300.1,156.1z"
      />
      <Path
        {...props}
        pathData="M189.1,275.7h-32.6c-1.9,0-3.6,0.9-4.7,2.4L32.3,439.7c-1.3,1.8-1.5,4.2-0.5,6.1c1,2,3,3.2,5.2,3.2h426
        c2.2,0,4.2-1.2,5.2-3.2c1-1.9,0.8-4.3-0.4-6.1L353.9,278.2c-1.1-1.6-2.9-2.5-4.8-2.5h-29.9 M164.4,103.4
        c18.4-30.4,49-48.8,83.9-50.5c1.9-0.1,3.9-0.2,5.9-0.2c2,0,3.9,0.1,5.9,0.2C295,54.6,325.6,73,344,103.4
        c18.9,31.1,21.2,69.4,6.2,102.3l-96,205.2l-96-205.1C143.2,172.7,145.5,134.5,164.4,103.4z"
      />
    </g>
  );
};
export default MapPin;
