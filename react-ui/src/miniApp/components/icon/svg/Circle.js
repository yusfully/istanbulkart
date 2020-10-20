import React from "react";

const Circle = ({ cx, cy, r, fill, strokeWidth, stroke }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      style={{
        fill: `${fill}`,
        strokeWidth: `${strokeWidth}`,
        stroke: `${stroke}`,
      }}
    />
  );
};
export default Circle;
