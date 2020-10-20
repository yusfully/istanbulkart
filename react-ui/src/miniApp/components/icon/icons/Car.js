import React, { useEffect, useRef } from "react";
import { TweenMax, Linear } from "gsap/all";
import Path from "../svg/Path";
import Line from "../svg/Line";

const Car = ({ animation, ...props }) => {
  const car = useRef();

  useEffect(() => {
    if (animation) {
      animate();
    }
  }, [animation]);

  const animate = () => {
    TweenMax.fromTo(
      car.current,
      0.2,
      { scaleY: 0.95, scaleX: 1.05 },
      {
        scaleY: 1,
        scaleX: 1,
        repeat: 6,
        repeatDelay: 0,
        ease: Linear.easeOut,
        yoyo: true,
        transformOrigin: "bottom center",
      }
    );
  };
  return (
    <g ref={car}>
      <Path
        {...props}
        pathData="M85.4,189l-18.2-15.9H21.3 M478.3,173.1h-45.9L414.1,189 M111.6,368.8H69.4l-16.6-4.9v30.2
		c0,13,9.4,23.5,20.9,23.5h33.6c11.5,0,20.9-10.6,20.9-23.5v-25.3H111.6z M448.4,363v31.2c0,13-9.5,23.5-21.2,23.5H393
		c-11.7,0-21.2-10.6-21.2-23.5v-25.3 M128.2,368.8h235.2h18.7h47.1l19.2-5.8c9.3-6.2,15.4-16.8,15.4-28.8v-71
		c0-16.7-7.3-32.5-20.1-43.3l-18.5-15.6l-11-15.3l-27.3-82c-7.9-20.1-24-30.8-46.6-30.8h-29.7H190.5h-31.2
		c-22.6,0-38.7,10.6-46.4,30.4L85.4,189l-11,15.3l-18.5,15.6c-12.8,10.8-20.1,26.6-20.1,43.3v71c0,12.6,6.8,23.7,17,29.7"
      />
      <Line {...props} x1="194" y1="329.7" x2="303.4" y2="329.7" />

      <Line {...props} x1="85.4" y1="189" x2="414.1" y2="189" />
      <Line {...props} x1="79.3" y1="266.2" x2="144.5" y2="287.5" />
      <Line {...props} x1="420.8" y1="266.2" x2="355.5" y2="287.5" />
    </g>
  );
};
export default Car;
