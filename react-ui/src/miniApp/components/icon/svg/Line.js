import React from "react";

const Line = ({ x1, y1, x2, y2, fill, strokeWidth, stroke }) => {
  return (
    <line
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      style={{
        fill: `${fill}`,
        strokeWidth: `${strokeWidth}`,
        stroke: `${stroke}`,
      }}
    />
  );
};
export default Line;
