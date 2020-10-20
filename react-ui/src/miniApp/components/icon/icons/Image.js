import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

import PolyLine from "../svg/PolyLine";

const Image = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M441,450.8h-380c-3.6,0-6.5-2.9-6.5-6.5v-380c0-3.6,2.9-6.5,6.5-6.5h380c3.6,0,6.5,2.9,6.5,6.5v380
	C447.5,447.9,444.6,450.8,441,450.8z"
      />
      <PolyLine
        {...props}
        points="54.6,325.6 192.8,216.5 265.1,306.4 447.5,162.2 "
      />
      <Circle {...props} cx="284.9" cy="157" r="42.6" />
    </g>
  );
};
export default Image;
