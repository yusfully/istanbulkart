import React from "react";
import Circle from "../svg/Circle";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Timer = (props) => {
  return (
    <g>
      <Circle {...props} cx="228.9" cy="288" r="193" />
      <Path
        {...props}
        d="M329.3,355.7c-21.8,32.2-58.6,53.4-100.4,53.4c-66.9,0-121.1-54.2-121.1-121.1c0-11.1,1.5-21.9,4.3-32.1"
      />
      <Line {...props} x1="228.9" y1="288" x2="141.9" y2="201" />
      <Line {...props} x1="167.1" y1="23.2" x2="288.2" y2="23.2" />
      <Line {...props} x1="366.6" y1="152.9" x2="418.7" y2="100.7" />
      <Line {...props} x1="392.6" y1="54.7" x2="464.6" y2="126.7" />
    </g>
  );
};
export default Timer;
