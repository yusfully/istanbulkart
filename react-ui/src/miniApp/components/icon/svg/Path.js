import React from "react";

const Path = ({ pathData, fill, strokeWidth, stroke }) => {
  return (
    <path
      d={pathData}
      style={{
        fill: `${fill}`,
        strokeWidth: `${strokeWidth}`,
        stroke: `${stroke}`,
      }}
    />
  );
};
export default Path;
