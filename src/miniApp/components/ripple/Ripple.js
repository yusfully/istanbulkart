import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from "react";
import "./ripple.scss";

import { TweenMax } from "gsap/all";

const Ripple = forwardRef((pos, ref) => {
  useImperativeHandle(ref, () => ({
    startAction(e) {
      let posX =
        e.touches[0].clientX - e.currentTarget.getBoundingClientRect().x;
      let posY =
        e.touches[0].clientY - e.currentTarget.getBoundingClientRect().y;

      start(window.innerHeight, posX, posY);
    },
  }));
  const [count, setCount] = useState(0);
  const [sizes, setSize] = useState(0);
  const [elements, setElements] = useState([]);
  const ripple = useRef();
  useEffect(() => {
    if (elements.length > 0) {
      animate();
    }
  }, [elements]);

  const newElement = () => {
    return elements.map((element) => {
      if (element.complete) {
        return null;
      } else {
        return (
          <span
            ref={element.ref}
            style={{ left: element.x, top: element.y }}
            className="ripple"
          ></span>
        );
      }
    });
  };

  const animate = () => {
    var obj = elements[elements.length - 1];
    TweenMax.to(obj.ref.current, 1, {
      width: obj.size,
      height: obj.size,
      opacity: 0,
      onComplete: function () {
        obj["complete"] = true;
      },
    });
  };

  const start = (size, x, y) => {
    let ref = createRef();
    let obj = {
      ref: ref,
      size: size,
      x: x,
      y: y,
    };

    setElements([...elements, obj]);
    setCount(count + 1);
  };

  return (
    <div className="ripple-cover">
      <div className="relative">{newElement()}</div>
    </div>
  );
});
export default Ripple;
