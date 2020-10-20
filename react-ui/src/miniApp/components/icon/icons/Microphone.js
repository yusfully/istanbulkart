import React from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Microphone = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M399.7,238.3c0,82.7-67,149.7-149.7,149.7s-149.7-67-149.7-149.7"
      />
      <Path
        {...props}
        pathData="M251.9,328.7h-1.7c-56.7,0-103.1-46.4-103.1-103.1V124.5c0-56.7,46.4-103.1,103.1-103.1h1.7
        c56.7,0,103.1,46.4,103.1,103.1v101.2C355,282.4,308.6,328.7,251.9,328.7z"
      />
      <Line {...props} x1="250" y1="388.1" x2="250" y2="478.6" />
      <line {...props} x1="143.1" y1="478.6" x2="356.9" y2="478.6" />
      <line {...props} x1="151.8" y1="148" x2="350.4" y2="148" />
    </g>
  );
};
export default Microphone;
