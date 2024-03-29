import React from "react";
import Path from "../svg/Path";

const Fingerprint = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M256.6,20.8L256.6,20.8c-78.5,0-142.7,64.2-142.7,142.7v207c0,58.6,47.9,106.5,106.5,106.5h0
        c58.6,0,106.5-47.9,106.5-106.5V194.7h0.1c0-19.6-16-35.6-35.6-35.6h0c-19.6,0-35.6,16-35.6,35.6v150.8h0c0,19.6-16,35.6-35.6,35.6
        h0c-19.6,0-35.6-16-35.6-35.6l-0.1-153.8c0-58.6,48.7-106.5,107.3-106.5h0c58.6,0,106.5,47.9,106.5,106.5v129.8"
      />
    </g>
  );
};
export default Fingerprint;
