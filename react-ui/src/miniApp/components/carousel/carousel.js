import React, { useRef, useState, lazy, useEffect } from "react";
import { Tab } from "../tabs/index";

import "./carousel.scss";
import Image from "../layout/view/image/Image";
const Carousel = ({
  children,
  direction,
  type,
  withArrow,
  swipe,
  onSlideChange,
  onProgressSlide,
  id,
  thumbs,
  shape,
  customSize,
  dotActiveColor,
  dotColor,
}) => {
  const tabitem = useRef();
  const [size, setSize] = useState();
  const [currentSlide, setCurrent] = useState(0);
  const [total, setTotal] = useState(children.length);

  const handleChange = (current) => {
    setCurrent(current);
    onSlideChange && onSlideChange(current);
  };

  useEffect(() => {}, []);
  const changeSlide = (goto) => {
    if (goto > total - 1) {
      goto = total - 1;
    } else if (goto < 0) {
      goto = 0;
    }

    tabitem.current.goTo(goto);
  };
  return (
    <div className={`carousel ${shape || "line"}`}>
      <Tab
        width={
          window.innerWidth *
          (Number(customSize.width) / 100) *
          customSize.dimension.width
        }
        height={
          window.innerWidth *
          (Number(customSize.width) / 100) *
          customSize.dimension.height
        }
        selected={0}
        color="#356da0"
        animatedItem={{
          backGroundColor: `${"#333333"}`,
          height: (!shape || shape === "line") && "2px",
          borderRadius: "25px",
        }}
        onProgressTab={(progress, next, prev, delta) =>
          onProgressSlide(progress, next, prev, delta)
        }
        onTabChange={(current) => handleChange(current)}
        direction={direction || "x"}
        swipe={withArrow ? false : swipe}
        carousel
      >
        <Tab.TabList ref={tabitem} carousel>
          {children.map((element, index) => {
            const Component = element;
            return (
              <Tab.TabListItem
                id={`dot-${id + index}`}
                component={() => Component}
                index={index}
              >
                {type === "thumbs" ? (
                  <div className="thumb-container">
                    {<Image mode="aspectFill" src={thumbs[index]}></Image>}
                  </div>
                ) : (
                  <span
                    style={{
                      backgroundColor: `${
                        currentSlide === index
                          ? dotActiveColor
                            ? dotActiveColor
                            : "#333333"
                          : dotColor || "#33333340"
                      }`,
                      width: `${
                        shape
                          ? shape != "line"
                            ? currentSlide === index
                              ? "15px"
                              : "5px"
                            : ""
                          : ""
                      }`,
                      height: `${shape ? (shape != "line" ? "5px" : "") : ""}`,
                    }}
                    className="dot-container"
                  ></span>
                )}
              </Tab.TabListItem>
            );
          })}
        </Tab.TabList>
      </Tab>
      {withArrow ? (
        <div className="carousel-arrows">
          <div
            onTouchEnd={() => changeSlide(currentSlide + 1)}
            className="arrow-right arrow-content"
          >
            <i className="font-icon icon-arrow-right"></i>
          </div>
          <div
            onTouchEnd={() => changeSlide(currentSlide - 1)}
            className="arrow-left arrow-content"
          >
            <i className="font-icon icon-arrow-left"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
