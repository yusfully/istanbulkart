import React, { Fragment } from "react";
import "./icon.scss";

const Icon = ({
  children,
  animation,
  rotation,
  scale,
  name,
  shape,
  type,
  letter,
  src,
}) => {
  return (
    <div className={`icon-cover ${shape ? shape : ""}`}>
      {(type === "fontIcon" && (
        <i
          className={` ${name} animated`}
          style={{
            transform: `${rotation && "rotate(" + rotation + "deg)"}`,
            transition: `${animation && "all 0.3s ease-out"}`,
            willChange: "transform",
          }}
        ></i>
      )) ||
        (type === "letterIcon" && <span>{letter}</span>) ||
        (type === "svgicon" && (
          <div className="svgicon">
            <img src={src}></img>
          </div>
        ))}
    </div>
  );
};

export default Icon;
