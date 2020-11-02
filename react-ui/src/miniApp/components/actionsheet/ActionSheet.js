import React, {
  memo,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import Portal from "../pager/Portal";
import "./actionsheet.scss";
import Navigator from "../buttons/Navigator";
import {  CSSTransition } from "react-transition-group";
import Grid from "../layout/grid/Grid";

const ActionSheet = forwardRef(
  (
    { style, controls, title, children, itemClick, isPlusDisable, onClosed },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      open() {
        setisOpened(true);
      },
    }));

    const contentMain = useRef();
    const [isOpened, setisOpened] = useState(false);
    const [ready, setReady] = useState(false);
    const [isDragging, setisDragging] = useState(false);
    const [touch, setTouch] = useState(0);
    const [activeItem, setActiveItem] = useState();
    const [pos, setPos] = useState(0);
    const handleMounted = () => {
      setReady(true);
    };
    const handleSwipe = (e) => {
      setisDragging(true);
      let diff = e.changedTouches[0].clientY - touch;
      setTouch(e.changedTouches[0].clientY);

      let newPos = pos + diff;
      if (newPos < 0) newPos = 0;
      setPos(newPos);
    };
    const handleTouchStart = (e) => {
      setPos(0);
      setTouch(e.touches[0].clientY);
    };
    const handleTouchEnd = () => {
      if (pos > 40) {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,100%)`;
        setReady(false);
      } else {
        contentMain.current.style.transition = `transform 300ms`;
        contentMain.current.style.transform = `translate(0px,0%)`;
      }
      setisDragging(false);
    };

    useEffect(() => {}, []);
    useEffect(() => {
      if (contentMain.current) {
        contentMain.current.style.transform = `translate(0px,${pos}px)`;
      }
    }, [pos]);
    useEffect(() => {
      if (!ready) {
        if (contentMain.current) {
          contentMain.current.style.transform = ``;
        }
        setTimeout(() => {
          setisOpened(false);
        }, 300);
        onClosed && onClosed();
      }
    }, [ready]);

    const handleTouchItem = (e, element) => {
      itemClick && itemClick(element);

      if (element === "plus") {
        return;
      }
      setActiveItem(-1);
    };
    const handleTouchItemStart = (index) => {
      setActiveItem(index);
    };
    return isOpened ? (
      <Portal
        id="actionsheet"
        className="actionsheet"
        onMount={() => handleMounted()}
      >
        <CSSTransition in={ready} timeout={300} classNames="slide">
          <div className="action-sheet-main-content">
            <div className="overlay"></div>
            <div
              style={{
                transition: isDragging ? "none" : "transform 300ms",
              }}
              ref={contentMain}
              className={`${
                isDragging ? "dragging" : ""
              } actionsheet-main-cover`}
            >
              <div className="actionsheet-relative">
                <div
                  className="touch-icons"
                  onTouchMove={(e) => handleSwipe(e)}
                  onTouchStart={(e) => handleTouchStart(e)}
                  onTouchEnd={() => handleTouchEnd()}
                ></div>
                <div className="title">{title}</div>
                <div className={`actionsheet-${style}`}>
                  <div className="actionsheet-actions-cover">
                    <Grid
                      alignItems="strech"
                      justifyItems="strech"
                      strech
                      col={style === "verticalButtons" ? 1 : 3}
                      autoFill
                      width="100%"
                      justifyColums="space"
                      justifyRows="top"
                      fitContent
                      space={"10px 20px"}
                    >
                      {Object.keys(controls).map((element, index) => {
                        return (
                          <div
                            style={{
                              backgroundColor: `${
                                controls[element].backGroundColor || ""
                              }`,
                              color: `${controls[element].color || ""}`,
                            }}
                            onTouchEnd={(e) => handleTouchItem(e, element)}
                            onTouchStart={() => handleTouchItemStart(index)}
                            className={` ${
                              controls[element].text === "+" && isPlusDisable
                                ? "disabled"
                                : ""
                            }   ${
                              activeItem === index ? "active-item-money" : ""
                            } action-sheet-cover`}
                          >
                            {controls[element].action === "navigate" ? (
                              <Navigator
                                openType="redirect"
                                target={controls[element].url}
                              >
                                <div className="button-actionsheet">
                                  <i
                                    style={{
                                      color: `${controls[element].color || ""}`,
                                    }}
                                    className={`${
                                      controls[element].fontIcon
                                        ? controls[element].fontIcon
                                        : "lni lni-arrow-left"
                                    }`}
                                  ></i>
                                  <p>{controls[element].text}</p>
                                </div>
                              </Navigator>
                            ) : controls[element].action ? (
                              typeof controls[element].action ===
                                "function" && (
                                <div className="button-actionsheet">
                                  <i
                                    className={`${controls[element].fontIcon}`}
                                  ></i>
                                  <p
                                    style={{
                                      color: controls[element] || "",
                                    }}
                                  >
                                    {controls[element].text}
                                  </p>
                                </div>
                              )
                            ) : (
                              <div className="button-actionsheet">
                                <p
                                  style={{
                                    color: controls[element] || "",
                                  }}
                                >
                                  {controls[element].text}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </Grid>
                  </div>
                </div>
                {children && (
                  <div className="actionsheet-inner">{children}</div>
                )}
                <div
                  className="button-actionsheet-block"
                  onTouchEnd={() => setReady(false)}
                >
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </Portal>
    ) : null;
  }
);
export default memo(ActionSheet);
