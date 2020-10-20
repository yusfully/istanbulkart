import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Filter = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M67.8,53.8v93.1c0,8.4,3.3,16.4,9.1,22.3l94,147.9c5.8,5.9,9.1,13.9,9.1,22.3v108.1c0,22.7,23,38,43.6,28.9
        l68.1-30c11.4-5,18.7-16.4,18.7-28.9v-85.4c0-9.2,3.9-17.9,10.8-23.9l113.4-144.7c6.9-6,10.8-14.7,10.8-23.9v-86
        c0-17.4-13.9-31.5-31.1-31.5H98.9C81.7,22.2,67.8,36.3,67.8,53.8z"
      />
      <Line {...props} x1="67.8" y1="149.2" x2="442.8" y2="149.2" />
    </g>
  );
};
export default Filter;
