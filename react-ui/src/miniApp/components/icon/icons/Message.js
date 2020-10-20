import React from "react";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Message = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M444.8,355.1H230.3c-2.9,0-5.7,0.9-8.1,2.4l-87.1,72.7c-9.7,6.4-22.6-0.3-22.9-11.9l-1-48.9
	c-0.2-8-6.8-14.3-14.8-14.3H59.9c-8.2,0-14.8-6.6-14.8-14.8v-249c0-8.2,6.6-14.8,14.8-14.8h384.8c8.2,0,14.8,6.6,14.8,14.8v249
	C459.5,348.5,452.9,355.1,444.8,355.1z"
      />
      <Line {...props} x1="125" y1="149.6" x2="379.3" y2="149.6" />
      <Line {...props} x1="125" y1="211.9" x2="379.3" y2="211.9" />
      <Line {...props} x1="125" y1="274.3" x2="252.3" y2="274.3" />
    </g>
  );
};
export default Message;
