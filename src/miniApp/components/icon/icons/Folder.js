import React from "react";
import Path from "../svg/Path";

const Folder = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M38.4,220.4c0-18.8,15.4-34.2,34.2-34.2H429c18.8,0,34.2,15.4,34.2,34.2"
      />
      <Path
        {...props}
        pathData="M429,442H72.6c-18.8,0-34.2-15.4-34.2-34.2V126.3V92.2c0-19.3,15.7-35,35-35h106.6c6,0,11.8,2.3,16.2,6.5
        l22.7,41.8c4.3,4.2,10.1,6.5,16.2,6.5H429c18.8,0,34.2,15.4,34.2,34.2v261.5C463.2,426.6,447.8,442,429,442z"
      />
    </g>
  );
};
export default Folder;
