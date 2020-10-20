import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Search = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M396.9,111.9c37.2,37.2,60.3,88.7,60.3,145.5c0,113.6-92.1,205.7-205.7,205.7S45.7,371,45.7,257.4
	c0-55.2,21.7-105.3,57.1-142.3"
      />
      <Line {...props} x1="251.4" y1="38.9" x2="251.4" y2="195.2" />
    </g>
  );
};
export default Search;
