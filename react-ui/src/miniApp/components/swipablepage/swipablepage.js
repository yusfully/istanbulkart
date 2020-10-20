import React, {
  memo,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./swipablepage.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const SwipablePage = forwardRef(({ children, lock, limit }, ref) => {
  useImperativeHandle(ref, () => ({
    scrollPos(pos) {
      setContentScroll(pos);
    },
    domEl: contentMain.current,
  }));

  const contentMain = useRef();
  const [contentScroll, setContentScroll] = useState("start");
  const [isOpened, setisOpened] = useState(true);
  const [height, setHeight] = useState();
  const [isDragging, setisDragging] = useState(false);
  const [touch, setTouch] = useState(0);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    if (limit) {
     
      setHeight(limit + contentMain.current.offsetHeight );
    }
  }, [limit]);

 
  const handleTouchStart = (e) => {
    setPos(0);
    setTouch(e.touches[0].clientY);
    console.log(e.touches[0].clientY);
  };
  const handleTouchEnd = () => {
    if (pos > 40) {
      contentMain.current.style.transition = `transform 300ms`;
      contentMain.current.style.transform = `translate(0px,100%)`;
    } else {
      contentMain.current.style.transition = `transform 300ms`;
      contentMain.current.style.transform = `translate(0px,0%)`;
    }
    setisDragging(false);
  };

  useEffect(() => {
    if (contentMain.current) {
      contentMain.current.style.transform = `translate(0px,${pos}px)`;
    }
    if (pos === -limit) {
      setisOpened(true);
    } else if (pos === 0) {
      setisOpened(false);
    }
  }, [pos]);

  const swipeTouchStart = (e) => {
    setTouch(e.touches[0].clientY);
  };
  const swipeTouchMove = (e) => {
    let diff = e.changedTouches[0].clientY - touch;
    setTouch(e.changedTouches[0].clientY);

    let newPos = pos + diff;

    if (newPos < -limit) {
      newPos = -limit;
    }
    if (newPos > 0) {
      newPos = 0;
      lock(true);
    }
    if (contentScroll === "start") {
      if (diff < 0) {
        if (newPos === -limit) {
          lock(false);
        } else {
          lock(true);
        }
      }
    } else {
      lock(false);

      if (diff > 0) {
        newPos = -limit;
      }
    }

    setisDragging(true);
    setPos(newPos);
  };
  const swipeTouchEnd = (e) => {
    
    if (isOpened) {
      if (pos > -limit + 40) {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,0%)`;
        setPos(0);
      } else {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,-${limit}px)`;
        setPos(-limit);
      }
    } else {
      if (pos < -10) {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,-${limit}px)`;
        setPos(-limit);
      } else {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,0%)`;
        setPos(0);
      }
    }

    setisDragging(false);
  };
  return (
    <CSSTransition in={isOpened} timeout={300} classNames="slide">
      <div
        onTouchStart={(e) => swipeTouchStart(e)}
        onTouchMove={(e) => swipeTouchMove(e)}
        onTouchEnd={(e) => swipeTouchEnd(e)}
        className="swipable-page-main-content"
      >
        <div
          style={{
            transition: isDragging ? "none" : "transform 300ms",
          }}
          ref={contentMain}
          className={`${isDragging ? "dragging" : ""} swipable-page-main-cover`}
        >
          <div className="swipable-relative">
            <div
              style={{
                width: "50px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={() => handleTouchEnd()}
            >
              <div className="touch-icons"></div>
            </div>
          </div>
          <div
            style={{
              pointerEvents: `${isDragging ? "none" : "all"}`,
              minHeight: `${height + "px" || "100%"}`,
            }}
            className="swipable-page-inner"
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
});
export default memo(SwipablePage);
