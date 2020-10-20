import React from "react";

const Rect = ({ x, y, width, height, fill, strokeWidth, stroke }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill: `${fill}`,
        strokeWidth: `${strokeWidth}`,
        stroke: `${stroke}`,
      }}
    />
  );
};
export default Rect;
