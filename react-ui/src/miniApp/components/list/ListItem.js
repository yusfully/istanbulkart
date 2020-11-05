import React, {
  Fragment,
  Children,
  useRef,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Collapse from "../collapsable/index";
import { TweenMax, Power4, Linear } from "gsap/all";
import Ripple from "../ripple/Ripple";
import Icon from "../collapsable/index";
import SvgIcon from "../../components/icon/svg/SvgIcon";
import {useListContext} from "./Provider"

const ListItem = ({
  noWrap,
  forceOneLine,
  onClick,
  align,
  justify,
  arrow,
  text,
  rightSide,
  icon,
  index,
  thumb,
  id,
  addClass,
  action,
  swipeActions,
  deleteOnSwipe,
  small,
  children,
}) => {
  const render = (children) => {
    if (!action) return renderListItem(text);

    switch (action.type) {
      case "collapse":
        return renderCollapse(children);
        break;

      default:
        return renderListItem(children);
        break;
    }
  };
  const mainDom = useRef();
  const cover = useRef();
  const swipe = useRef();
  const deleteswipe = useRef();
  const handleChangeCollapse = (isopened) => {
    
    if(isopened){listDispatch({type:"changeCurrent",current:index})}
    setCollapseIsOpened(isopened)
    setArrow(isopened ? 270 : 90);
  };
  const [arrowDegree, setArrow] = useState(
    arrow && arrow === "horizontal" ? 0 : 90
  );
  const {listState, listDispatch}=useListContext()
  const [touch, setTouch] = useState(0);
  const [closeCollapse, setcloseCollapse] = useState(false);
  const [pos, setPos] = useState(null);
  const [collapseIsOpened, setCollapseIsOpened] = useState(null);
  const posref = useRef(null);
  const touches = useRef(null);
  const handleBlur = (e) => {
    if (posref.current) {
      let object = {
        x: posref.current,
      };
      setIsOpened(false);
      window.removeEventListener("touchstart", memoizedListener);
      TweenMax.to(object, 0.25, {
        x: 0,
        ease: Linear.easeOut,
        onUpdate: function () {
          setPos(object.x);
        },
      });
    }
  };
  useEffect(() => {
console.log(listState)
  if(listState.prev===index){
    setcloseCollapse(true)
  }else{
    setcloseCollapse(false)
  }
   
  }, [listState])

  
  const memoizedListener = useMemo(() => handleBlur, []);
  const [isDeleted, setDeleted] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const renderCollapse = (children) => {
    return (
      <Collapse  onChange={(e) => handleChangeCollapse(e)}>
        <Collapse.Body close={closeCollapse} >{renderListItem(text)}</Collapse.Body>
        {React.Children.map(children, (child) => {
         
            return <Collapse.Inner>{child.props.children} </Collapse.Inner>;
          
        })}
      </Collapse>
    );
  };
  useEffect(() => {
    if (isDeleted) {
      deleteOnSwipe(id);
    }
  }, [isDeleted]);
  const deleteAnimation = (finish) => {
    let object = {
      x: finish,
    };

    TweenMax.to(object, 0.2, {
      x: window.innerWidth * -1,
      ease: Linear.easeOut,
      onComplete: function () {
        TweenMax.to(cover.current, 0.5, {
          height: 0,
          ease: Linear.easeOut,
          onComplete: function () {
            setDeleted(true);
          },
        });
      },
      onUpdate: function () {
        setPos(object.x);
      },
    });
  };
  const animateBack = () => {
    let object = {
      x: pos,
    };
    setIsOpened(false);
    window.removeEventListener("touchstart", memoizedListener);
    TweenMax.to(object, 0.25, {
      x: 0,
      ease: Linear.easeOut,
      onUpdate: function () {
        setPos(object.x);
      },
    });
  };
  useEffect(() => {
    setPos(0);
    touches.current = 0;
  }, []);
  useEffect(() => {
    if (mainDom.current) {
      mainDom.current.style.transform = `translate(${pos + "px, 0px"})`;
    }
  }, [pos]);
  const ripple = useRef();
  const match = useRouteMatch();
  const history = useHistory();
  const handleTouchStart = (e) => {
    if (e.currentTarget === cover.current && isOpened) {
      e.stopPropagation();
    }

    setTouch(e.touches[0].clientX);
    ripple && ripple.current.startAction(e);
  };

  const handleSwipe = (e) => {
    if (!swipeActions && !deleteOnSwipe) return;

    let diff = e.changedTouches[0].clientX - touch;
    setTouch(e.changedTouches[0].clientX);
    let newPos = pos + diff;

    if (swipeActions) {
      if (newPos > window.innerWidth / 2) {
        newPos = window.innerWidth / 2;
      }
      if (pos >= window.innerWidth / 2 && diff > 0) {
        if (!isOpened) setIsOpened(true);

        return;
      } else if (pos >= window.innerWidth / 2 && diff < 0) {
        if (isOpened) setIsOpened(false);
        setPos(newPos);
        return;
      } else if (diff <= 0 && pos <= 0) {
        if (isOpened) setIsOpened(false);
        return;
      } else if (pos >= 0 && pos < window.innerWidth) {
        if (isOpened) setIsOpened(false);
      }
      setPos(newPos);
    } else if (deleteOnSwipe) {
      touches.current = diff;

      if (newPos > 0) {
        newPos = 0;
      }

      setPos(newPos);
    }
  };

  useEffect(() => {
    isOpened && console.log(isOpened)
  
  }, [isOpened])
  const handleTouchEnd = (e) => {
    if (deleteOnSwipe) {
      if (touches.current < -10 || pos < window.innerWidth * -0.75) {
        deleteAnimation((touches.current += pos + touches.current * 1.75));
      } else {
        animateBack();
      }
    } else if (swipeActions) {
      if (!isOpened) {
        animateBack();
      } else {
        setPos(window.innerWidth / 2);
        posref.current = window.innerWidth / 2;
        window.addEventListener("touchstart", memoizedListener);
      }
    }

    if (action && action.router) {
     
      history.push(`${match.url + "/" + action.router}`);
    }
  };

  const renderListItem = (text) => {
    return (
      !isDeleted && (
        <div
        ref={cover}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onTouchMove={(e) => handleSwipe(e)}
        className={`list-item  ${
          (swipeActions || deleteOnSwipe) ? "swipeable" : ""
        } ${deleteOnSwipe ? "delete-swipe" : ""} ${collapseIsOpened ? "opened" : ""}`}
      >
          <div ref={mainDom} className="list-background">
            <div
              className={`${
                noWrap
                  ? "no-wrap"
                  : "multi-line" && thumb
                  ? "with-icon"
                  : "no-icon"
              } list-block`}
            >
              {thumb ? (
                <div
                  className={`list-thumb-${
                    align ? align : "middle"
                  } list-thumb ${thumb.fontIcon && "thumb-icon"}`}
                >
                  <div
                    style={{
                      backgroundColor: thumb.backgroundColor,
                      borderRadius: thumb.circular
                        ? "50%"
                        : thumb.radius
                        ? thumb.radius
                        : 0,
                      color: thumb.color,
                    }}
                    className={`list-thumb-cover ${
                      (thumb.backgroundColor && "withbg") ||
                      (thumb.src && "thumb-img")
                    }`}
                  >
                    {(thumb.fontIcon && (
                      <i className={`${thumb.fontIcon}`}></i>
                    )) ||
                      (thumb.src && <img src={`${thumb.src}`}></img>) ||
                      (thumb.letter && (
                        <span
                          style={{
                            fontWeight: 900,
                          }}
                          className={`list-icon-letter`}
                        >
                          {thumb.letter}
                        </span>
                      )) ||
                      (thumb.svgIcon && (
                        <SvgIcon
                          name={thumb.svgIcon ? thumb.svgIcon : "bus"}
                          stroke={"#333333"}
                          strokeWidth={"10"}
                          size={thumb.size ? thumb.size : 40}
                          lineCap="rounded"
                          join="rounded"
                        ></SvgIcon>
                      ))}
                  </div>
                </div>
              ) : null}
              <div className="list-item-main">
                <h3>{text}</h3>
                {small && <small className="list-sub-text">{small}</small>}
              </div>
              {arrow ? (
                <div
                  className={`list-item-arrow list-arrow-${
                    align ? align : "middle"
                  }`}
                >
                  <Icon
                    type="fontIcon"
                    name="lni lni-chevron-right"
                    animation
                    rotation={arrowDegree}
                  ></Icon>
                </div>
              ) : rightSide ? (
                <div className="list-right-side">{rightSide}</div>
              ) : null}
              {ripple && (
                <Ripple ref={ripple} pos={{ pos: { x: 0, y: 0 } }}></Ripple>
              )}
            </div>
          </div>
          {swipeActions ? (
            <div ref={swipe} className="list-swipe-actions">
              {Object.keys(swipeActions).map((element) => (
                <div
                  className="list-swipe-actions-item "
                  style={{
                    backgroundColor: swipeActions[element].backGroundColor,
                  }}
                  onClick={(e) => swipeActions[element].action(e, id)}
                >
                  <i
                    style={{ color: swipeActions[element].color }}
                    className={`${swipeActions[element].fontIcon}`}
                  ></i>
                </div>
              ))}
            </div>
          ) : deleteOnSwipe ? (
            <div
              ref={deleteswipe}
              style={{
                backgroundColor: "#f95959",
              }}
              className="list-swipe-delete"
            >
              <i className="font-icon icon-garbage"></i>
              <h3>DELETE</h3>
            </div>
          ) : null}
        </div>
      )
    );
  };

  return render(children);
};

export default ListItem;
