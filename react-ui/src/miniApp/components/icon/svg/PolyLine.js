import React from "react";

export const PolyLine = ({ points, fill, strokeWidth, stroke }) => {
  return (
    <polyline
      points={points}
      style={{
        stroke: `${stroke ? stroke : "none"}`,
        strokeWidth: `${strokeWidth ? strokeWidth : "none"}`,
        fill: `${fill ? fill : "none"}`,
      }}
    />
  );
};

export default PolyLine;
