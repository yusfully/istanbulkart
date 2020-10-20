import React from "react";
import Path from "../svg/Path";

const Piechart = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M234.4,80.7C132,80.7,49,163.7,49,266.1s83,185.4,185.4,185.4c102.4,0,185.4-83,185.4-185.4H234.4V80.7z"
      />
      <Path
        {...props}
        pathData="M234.4,48.5v217.6H452C452,145.9,354.6,48.5,234.4,48.5z"
      />
    </g>
  );
};
export default Piechart;
