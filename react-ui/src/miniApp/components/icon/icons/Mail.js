import React from "react";
import PolyLine from "../svg/PolyLine";

const Mail = (props) => {
  return (
    <g>
      <PolyLine
        {...props}
        points="78.6,143.6 46.6,160.5 46.6,457.5 455,457.5 455,160.3 410.8,137.8 "
      />
      <PolyLine {...props} points="363.9,106.9 247.9,42.8 134.9,106.9 " />
      <PolyLine
        {...props}
        points="455,160.3 389.6,160.3 242.2,284.3 106.1,160.3 46.6,160.3 "
      />
      <PolyLine
        {...props}
        points="78.6,160.3 78.6,106.9 410.3,106.9 410.3,160.3 "
      />
    </g>
  );
};
export default Mail;
