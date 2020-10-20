import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { TweenMax } from "gsap/all";
import { useTabContext } from "./provider";

import Scrollable from "../slider/Scrollable";

const TabList = forwardRef(({ children, carousel, justified }, ref) => {
  useImperativeHandle(ref, () => ({
    goTo(index) {
      changeSlide(index);
    },
  }));
  const { tabState, dispatchTabSwipe } = useTabContext();
  const animatedItem = useRef();
  const scrollTarget = useRef();
  const scrollable = useRef();

  useEffect(() => {
    onProgress(tabState.swipeProgress, tabState.pageProgress, tabState.nextTab);
  }, [tabState.swipeProgress]);

  const changeSlide = (index) => {
    dispatchTabSwipe({
      type: "goTo",
      target: index,
    });
  };

  const onProgress = (percent, page) => {
    if (!scrollable.current) return;
    if (!tabState.animatedItem) return;
    let size = scrollable.current.container.current.getBoundingClientRect()
      .width;

    let width =
      document.getElementById(children[page].props.id).offsetWidth +
      ((document.getElementById(children[tabState.nextTab].props.id)
        .offsetWidth -
        document.getElementById(children[page].props.id).offsetWidth) /
        100) *
        Math.abs(percent);

    let left =
      document.getElementById(children[page].props.id).offsetLeft +
      (percent > 0
        ? document.getElementById(children[page].props.id).offsetWidth / 100
        : document.getElementById(children[tabState.nextTab].props.id)
            .offsetWidth / 100) *
        percent;

    dispatchTabSwipe({
      type: "animatedItemstate",
      scroll: left + width / 2 - size / 2,
      left: left,
      width: width,
    });

    if (tabState.goTo && !tabState.isSwiping) {
      scrollable.current.scrollToHorizontal(
        document.getElementById(children[tabState.goTo].props.id).offsetLeft +
          document.getElementById(children[tabState.goTo].props.id)
            .offsetWidth /
            2 -
          size / 2,
        0,
        500
      );
    } else {
      scrollable.current.scrollToHorizontal(left + width / 2 - size / 2, 0);
    }

    TweenMax.to(animatedItem.current, 0.01, {
      left: left,
      width: width,
    });
  };

  return (
    <div
      className={`tab-list-cover  ${
        tabState.uiStyle ? tabState.uiStyle : "standart-tab-list"
      }`}
      ref={scrollTarget}
      style={{
        position: "relative",
      }}
    >
      <Scrollable
        ref={scrollable}
        damping={0.3}
        target={scrollTarget.current}
        continuousScrolling={false}
      >
        <div
          className="tab-list-wrap-gap-cover"
          style={{
            border: `${
              tabState.border ? "2px solid " + tabState.border : "#33333342"
            }`,
            borderRadius: `${tabState.borderRadius}`,
            padding: `${tabState.itemGap}`,
          }}
        >
          <div
            style={{
              display: `${carousel ? "flex" : "inline-flex"}`,
              flexWrap: "nowrap",
              backgroundColor: `${tabState.backGroundColor}`,
              color: `${tabState.color}`,
              minWidth: "100%",
              position: "relative",
            }}
            className={`tab-item-cover ${
              tabState.totalElement <= 4 && justified ? "justified" : ""
            }`}
          >
            {tabState.animatedItem && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  zIndex: 2,
                  width: "50px",
                  borderRadius: `${tabState.borderRadius}`,
                  height: `${
                    tabState.animatedItem
                      ? tabState.animatedItem.height &&
                        tabState.animatedItem.height
                      : "2px"
                  }`,
                  backgroundColor: `${
                    (tabState.animatedItem &&
                      tabState.animatedItem.backGroundColor) ||
                    "#333333"
                  }`,
                  mixBlendMode: `${
                    tabState.animatedItem
                      ? tabState.animatedItem.mixBlendMode &&
                        tabState.animatedItem.mixBlendMode
                      : "none"
                  }`,
                }}
                ref={animatedItem}
                className="animatedItem"
              ></div>
            )}

            {children}
          </div>
        </div>
      </Scrollable>
    </div>
  );
});

export default TabList;
