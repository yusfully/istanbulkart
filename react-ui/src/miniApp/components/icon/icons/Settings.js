import React from "react";
import Line from "../svg/Line";

const Settings = (props) => {
  return (
    <g>
      <Line {...props} x1="93.5" y1="67" x2="93.5" y2="278.4" />
      <Line {...props} x1="250.5" y1="204.1" x2="250.5" y2="425.9" />
      <Line {...props} x1="407.5" y1="67" x2="407.5" y2="278.4" />
      <Line {...props} x1="93.5" y1="425.9" x2="93.5" y2="319.9" />
      <Line {...props} x1="39.8" y1="319.9" x2="147.1" y2="319.9" />
      <Line {...props} x1="407.5" y1="425.9" x2="407.5" y2="319.9" />
      <Line {...props} x1="353.9" y1="319.9" x2="461.2" y2="319.9" />
      <Line {...props} x1="250.5" y1="63.1" x2="250.5" y2="169.1" />
      <Line {...props} x1="304.2" y1="169.1" x2="196.8" y2="169.1" />
    </g>
  );
};
export default Settings;
