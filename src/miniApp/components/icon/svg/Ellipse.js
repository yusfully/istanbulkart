import React from "react";

const Ellipse = ({ cx, cy, rx, ry, fill, strokeWidth, stroke }) => {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      style={{
        fill: `${fill}`,
        strokeWidth: `${strokeWidth}`,
        stroke: `${stroke}`,
      }}
    />
  );
};

export default Ellipse;
