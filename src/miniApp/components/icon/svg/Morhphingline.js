import React, { useRef, useEffect, useState, Fragment } from "react";
import PolyLine from "./PolyLine";
import { TweenMax, Linear } from "gsap/all";

const Morhphingline = ({ lines, dur, delay, ...props }) => {
  const [shape, setShape] = useState(lines);
  const line = useRef();
  const point = useRef(lines);

  useEffect(() => {
    if (shape != lines) {
      toggle(lines);
    }
  }, [lines]);

  useEffect(() => {}, [shape]);

  const toggle = (morph) => {
    let object = {
      x: shape,
    };

    TweenMax.to(object, dur ? dur : 0.25, {
      x: morph,
      ease: Linear.easeOut,
      onComplete: function () {},
      onUpdate: function () {
        setShape(object.x);
      },
    });
  };

  return (
    <Fragment>
      {shape ? <PolyLine {...props} ref={line} points={shape} /> : null}
    </Fragment>
  );
};
export default Morhphingline;
