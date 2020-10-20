import React, { useEffect } from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Addmoney = ({ animation, ...props }) => {
  useEffect(() => {
    if (animation) {
      animate();
    }
  }, [animation]);

  const animate = () => {};
  return (
    <g>
      <Path
        {...props}
        pathData="M180.5,159.2c-6.2-10.3-9.7-22.4-9.7-35.3c0-38,30.8-68.9,68.9-68.9s68.9,30.8,68.9,68.9
	c0,13-3.6,25.2-9.9,35.5"
      />
      <Path
        {...props}
        pathData="M213.6,153.7c-8.6-7.4-14.1-18.3-14.1-30.5c0-22.2,18-40.1,40.1-40.1s40.1,18,40.1,40.1
	c0,12.3-5.5,23.3-14.2,30.6"
      />

      <Path
        {...props}
        pathData="M279.7,464.3h115.8c22.5,0,40.8-20.1,40.8-44.6V311.5V242v-17.4c0-24.8-18.3-44.9-40.8-44.9H279.7h-64.8H104.5
		c-22.5,0-40.7,20.1-40.7,44.9V242v69.5v108.2c0,24.5,18.3,44.6,40.7,44.6h110.4H279.7z"
      />
      <Path {...props} pathData="M436.3,251" />
      <Path {...props} pathData="M63.7,251" />
      <Path {...props} pathData="M63.7,302.5" />
      <Path {...props} pathData="M436.3,302.5" />
      <Line {...props} x1="90.5" y1="391.8" x2="400.5" y2="391.8" />
      <Line {...props} x1="90.5" y1="311.8" x2="228.3" y2="311.8" />
      <Path
        {...props}
        pathData="M389.3,345.2h-66.2c-6.6,0-12-5.4-12-12v-43.4c0-6.6,5.4-12,12-12h66.2c6.6,0,12,5.4,12,12v43.4
		C401.3,339.8,395.9,345.2,389.3,345.2z"
      />
      <Path
        {...props}
        pathData="M331.3,146.3h55.9c22.5,0,49,21.7,49,48.6v26.6"
      />
      <Path
        {...props}
        pathData="M63.8,220.2v-24.9c0-26.8,26.5-48.9,49-48.9h36.8"
      />
      <Line {...props} x1="163.8" y1="161.8" x2="316.5" y2="161.8" />
    </g>
  );
};
export default Addmoney;
