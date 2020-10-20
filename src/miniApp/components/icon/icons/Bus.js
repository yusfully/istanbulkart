import React, { useRef, useEffect } from "react";
import Path from "../svg/Path";
import Line from "../svg/Line";
import { TimelineLite, Linear } from "gsap/all";
import PolyLine from "../svg/PolyLine";

const Bus = ({ animation, ...props }) => {
  const bus = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = new TimelineLite();
    tl.current.to(
      bus.current,
      0.2,

      {
        y: "-=10%",
        rotateX: "5deg",
        repeatDelay: 0,
        ease: Linear.easeOut,
        yoyo: true,
        transformOrigin: "bottom center",
      }
    );
  }, []);

  useEffect(() => {
    if (animation) {
      animate();
    }
  }, [animation]);

  const animate = () => {
    tl.current.start();
  };
  return (
    <g>
      <g ref={bus}>
        <Path
          {...props}
          pathData="M414.8,409.6H89.5c-2.7,0-4.9-2.2-4.9-4.9V53.3c0-2.7,2.2-4.9,4.9-4.9h325.3c2.7,0,4.9,2.2,4.9,4.9v351.5
	C419.7,407.5,417.5,409.6,414.8,409.6z"
        />
        <PolyLine {...props} points="83.1,158.5 41,158.5 41,212.4 " />
        <PolyLine {...props} points="421.8,158.5 460.6,158.5 460.6,212.4 " />
        <Path {...props} pathData="M89.5,110.8H412" />
        <Path {...props} pathData="M412,301.4H89.5" />
        <Line {...props} x1="252.2" y1="110.8" x2="252.2" y2="301.4" />
        <Path
          {...props}
          pathData="M112.5,414.7v19.5c0,9.7,7.2,17.6,15.9,17.6h25.6c8.8,0,15.9-7.9,15.9-17.6v-19.5"
        />
        <Path
          {...props}
          pathData="M396.9,414.7v19.5c0,9.7-7.2,17.6-15.9,17.6h-25.6c-8.8,0-15.9-7.9-15.9-17.6v-19.5"
        />
      </g>

      <Line {...props} x1="130.1" y1="357" x2="196.4" y2="357" />
      <Line {...props} x1="309.9" y1="357" x2="376.2" y2="357" />
    </g>
  );
};
export default Bus;
