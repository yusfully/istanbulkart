import React, { useEffect, forwardRef } from "react";
import { TweenMax } from "gsap/all";

const NotIcon = forwardRef(
  ({ strokeWidth, visible, stroke, onInvisible }, ref) => {
    useEffect(() => {
      toggleAnimate();
    }, [visible]);

    const toggleAnimate = () => {
      if (ref.current) {
        TweenMax.to(ref.current, 0.25, {
          attr: {
            x2: `${visible ? "400" : "100"}  `,
            y2: `${visible ? "0" : "500"}  `,
          },
          onComplete: function () {
            !visible && onInvisible();
          },
        });
      }
    };

    return (
      <line
        ref={ref}
        strokeWidth={strokeWidth ? strokeWidth : "10pt"}
        stroke={stroke ? stroke : "transparent"}
        x1="100"
        y1="500"
        x2="100"
        y2="500"
      />
    );
  }
);
export default NotIcon;
