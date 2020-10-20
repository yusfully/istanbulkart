import React from "react";
import PolyLine from "../svg/PolyLine";
import Line from "../svg/Line";
import Path from "../svg/Path";

const Basket = (props) => {
  return (
    <g>
      <Path
        {...props}
        pathData="M134.2,338.5l119.4-183.7c20-30.8,58.2-41.8,84.8-24.5l0,0c26.6,17.3,32,56.7,12,87.5L214.3,427.2h0
        c-28.9,44.4-83.9,60.3-122.2,35.3l0,0c-4.9-3.2-11.9-8.9-15.1-12.7c-35-41-30-111.6,5.5-166.2l117.3-180.4
        c45.4-69.9,132.1-94.9,192.5-55.6l0,0c60.4,39.3,72.7,128.6,27.2,198.5l-143.7,221"
      />
    </g>
  );
};
export default Basket;
