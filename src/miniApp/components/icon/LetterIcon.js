import React, { Fragment } from "react";
import "./icon.scss";

const LetterIcon = ({ letter, shape, fit }) => {
  return (
    <div className={`letter-icon ${shape} ${fit} list`}>
      <span>{letter}</span>
    </div>
  );
};

export default LetterIcon;
