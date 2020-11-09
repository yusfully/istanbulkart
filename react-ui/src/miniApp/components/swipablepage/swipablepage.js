import React, {
  memo,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./swipablepage.scss";
import { CSSTransition } from "react-transition-group";
import { TweenMax, Linear } from "gsap/all";

const SwipablePage = forwardRef(({ children, lock, limit,onDrag }, ref) => {
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
   
    setTouch(e.touches[0].clientY);
   
  };
  const handleTouchEnd = (e) => {
  
   e.stopPropagation()
   
    if (pos <= -limit) {
      animatePos(0)
      
    } else {
     
      animatePos(-limit)
    }
    setisDragging(false);
  };

  useEffect(() => {

    onDrag(pos)
   
    if (pos === -limit) {
      setisOpened(true);
    } else if (pos === 0) {
      setisOpened(false);
    }
  }, [pos]);

  const animatePos = (target) => {

   
      let object = {
        x: pos,
      };
     
   
      TweenMax.to(object, 0.25, {
        x: target,
        ease: Linear.easeOut,
        onUpdate: function () {
         
          setPos(object.x);
        },
      });
    
  };

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
      lock &&   lock(true);
    }
    if (contentScroll === "start") {
      if (diff < 0) {
        if (newPos === -limit) {
          lock &&   lock(false);
        } else {
          lock &&   lock(true);
        }
      }
    } else {
      if(isOpened){
        lock &&   lock(false);
      }else{
        lock &&   lock(true);
      }
      

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
     
       animatePos(0,false)
      } else {
        animatePos(-limit,true)
        
      }
    } else {
      if (pos < -10) {
       
        animatePos(-limit,true)
      } else {
        animatePos(0,false)
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
         
          ref={contentMain}
          className={`${isOpened ? "dragging" : ""} swipable-page-main-cover`}
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
              onTouchEnd={(e) => handleTouchEnd(e)}
            >
              <div className="touch-icons"></div>
            </div>
          </div>
          <div
            style={{
              pointerEvents: `${isDragging ? "none" : "all"}`,
             
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
