import React from "react";
import Path from "../svg/Path";

const Home = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M20,247.3L232.1,29.5c10.3-10.3,27-10.3,37.4,0L480,247.3"
      />
      <Path
        {...props}
        pathData="M64,201.9v259.7c0,9.1,7.4,16.5,16.5,16.5h83c9.1,0,16.5-7.4,16.5-16.5V320.7c0-9.1,7.4-16.5,16.5-16.5H305
        c9.1,0,16.5,7.4,16.5,16.5v140.9c0,9.1,7.4,16.5,16.5,16.5h79.1c9.1,0,16.5-7.4,16.5-16.5V199.5"
      />
    </g>
  );
};
export default Home;
