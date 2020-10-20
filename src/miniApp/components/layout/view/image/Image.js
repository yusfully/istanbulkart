import React, { Fragment } from "react";
import "./image.scss";

const Image = ({ mode, src }) => {
  return (
    <div className={`img-style-${mode}  image`}>
      <img src={src}></img>
    </div>
  );
};

export default Image;
