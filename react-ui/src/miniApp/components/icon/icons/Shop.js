import React from "react";
import Path from "../svg/Path";
import PolyLine from "../svg/PolyLine";
import Line from "../svg/Line";

const Shop = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M460.4,210.4c0,28.9-23.7,52.6-52.6,52.6h0c-28.9,0-52.6-23.7-52.6-52.6c0,28.9-23.7,52.6-52.6,52.6h0
	c-28.9,0-52.6-23.7-52.6-52.6H250c0,28.9-22,52.6-50.9,52.6h-1.7c-27.4,0-52.5-25.7-54.7-52.6c0,28.9-21.5,52.6-50.5,52.6h0
	c-28.9,0-52.6-23.7-52.6-52.6v-35.5l0-17.1L87.2,49.1h324l44.1,108.7H87.2"
      />
      <Path {...props} pathData="M405.2,122.3" />
      <PolyLine
        {...props}
        points="57.4,279.6 57.4,456.9 442.5,456.9 442.5,279.6 "
      />
      <Path
        {...props}
        pathData="M184.5,456.9V338.3c0-5.6,4.6-10.2,10.2-10.2h124.9c5.6,0,10.2,4.6,10.2,10.2v118.6"
      />
      <Line {...props} x1="257.1" y1="456.9" x2="257.1" y2="328.1" />
    </g>
  );
};
export default Shop;
