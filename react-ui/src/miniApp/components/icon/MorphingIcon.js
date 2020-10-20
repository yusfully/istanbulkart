import React, { Fragment } from "react";
import "./icon.scss";

const MorphingIcon = ({ from, to, shape }) => {
  return (
    <div className={`morphing-icon ${style} ${platform} list`}>{children}</div>
  );
};

export default MorphingIcon;
