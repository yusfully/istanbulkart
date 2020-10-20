import React from "react";
import Circle from "../svg/Circle";
import Path from "../svg/Path";

const User = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M422.7,398.1c0-174.5-241.4-174.5-241.4-295.8c0-44.4,33.2-80.4,74.1-80.4s74.1,36,74.1,80.4
        c0,121.3-252.8,121.3-252.8,299.7"
      />
    </g>
  );
};
export default User;
