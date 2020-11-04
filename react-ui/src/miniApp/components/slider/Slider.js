import React from "react";
import SmoothScrollbar from "smooth-scrollbar";
import Scrollbar from "./Scrollbar";
import { DisableScrollPlugin } from "./DisableDirection";
import { EdgeEasingPlugin } from "./Momentum";
import { MobilePlugin } from "./Mobile";
import { FilterEventPlugin } from "./FilterEvent";
import { SnapSwipePlugin } from "./SnapSwipePlugin";
import "./slider.scss";
SmoothScrollbar.use(FilterEventPlugin);
SmoothScrollbar.use(DisableScrollPlugin);
SmoothScrollbar.use(MobilePlugin);
SmoothScrollbar.use(EdgeEasingPlugin);
SmoothScrollbar.use(SnapSwipePlugin);
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnd: false,
      axis: "x",

      totalProgres: 0,
      progresPage: 0,
      inProgress: false,

      finished: true,
      currentPage: this.props.defaultPage || 0,
      prevPage: null,
    };
    this.pos = {
      x: 0,
      y: 0,
    };
    this.willChange = 0;
    this.isTouchMove = false;
    this.swipeProgres = 0;
    this.pageTowards = 0;
    this.container = React.createRef();
    this.scrollableDom = React.createRef();
    this.page = 0;
    this.momentum = 0;
    this.size = {
      width: this.props.width
        ? this.props.width
        : this.scrollableDom.current.scrollbar.size.container.width,
      height: this.props.height
        ? this.props.height
        : this.scrollableDom.current.scrollbar.size.container.height,
    };
  }

  scrollTo = (value, axis) => {
    this.scrollableDom.current.scrollbar.scrollTo(
      0 || (axis === "x" && value),
      0 || (axis === "y" && value),
      500
    );
  };

  scroll = (status, data) => {
    const { offset, limit } = status;

    let direction =
      offset[this.state.axis] === 0
        ? 0
        : offset[this.state.axis] > this.pos[this.state.axis]
        ? 1
        : -1;

    let progressCalc =
      direction < 0
        ? Math.ceil(
            offset[this.state.axis] /
              this.size[this.state.axis === "x" ? "width" : "height"]
          )
        : Math.floor(
            offset[this.state.axis] /
              this.size[this.state.axis === "x" ? "width" : "height"]
          );

    this.pos = {
      x: offset.x,
      y: offset.y,
    };

    if (data._type === "touchend") {
      this.momentum = data._momentum[this.state.axis];
    } else {
      this.momentum = data._delta[this.state.axis];
    }

    this.willChange = data.willChange;
    this.isTouchMove = data.isTouchMove;
    this.swipeProgres =
      ((Math.abs(offset[this.state.axis]) -
        progressCalc *
          this.size[this.state.axis === "x" ? "width" : "height"]) /
        this.size[this.state.axis === "x" ? "width" : "height"]) *
      100;
    this.progresPage = progressCalc;

    if (
      offset[this.state.axis] /
        this.size[this.state.axis === "x" ? "width" : "height"] >
      this.progresPage
    ) {
      this.pageTowards = this.progresPage + 1;
    } else if (
      offset[this.state.axis] /
        this.size[this.state.axis === "x" ? "width" : "height"] <
      this.progresPage
    ) {
      this.pageTowards = this.progresPage - 1;
    } else if (
      offset[this.state.axis] /
        this.size[this.state.axis === "x" ? "width" : "height"] ===
      this.progresPage
    ) {
      this.pageTowards = this.progresPage;
    }

    this.inProgress = true;
    if (this.pageTowards < 0) {
      this.pageTowards = 0;
    }

    this.props.onScroll && this.props.onScroll(offset, limit, data);

    this.props.onSwiping &&
      this.props.onSwiping(
        this.swipeProgres,
        this.progresPage,
        this.pageTowards,
        this.momentum
      );
    if (
      data._type === "touchend" &&
      data.willChange != this.state.currentPage
    ) {
      this.onPageChange(data._page);
    }
  };
  onPageChange = (page) => {
    this.setState((prevstate) => ({
      ...prevstate,
      inProgress: false,
      finished: true,
      currentPage: page,
      prevPage: prevstate.currentPage,
    }));
  };
  componentDidMount() {
    this.setState((prevstate) => ({
      ...prevstate,
      axis: this.props.direction,
    }));
  }
  handleClick = () => {};
  goToSlider = (index) => {
    if (index === undefined) return;

    let target =
      index *
      this.scrollableDom.current.scrollbar.size.container[
        this.state.axis === "x" ? "width" : "height"
      ];

    this.scrollableDom.current.scrollbar.updatePluginOptions("snapswipe", {
      page: index,
      willChange: index,
    });
    this.scrollTo(target, this.state.axis);
    this.setState((prevstate) => ({
      ...prevstate,
      currentPage: index,
      prevPage: prevstate.currentPage,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.currentPage !== this.state.currentPage) {
      this.props.onCurrentTabChanged &&
        this.props.onCurrentTabChanged(
          this.state.currentPage,
          this.state.prevPage
        );
    }

    if (prevState.isTouchMove !== this.state.isTouchMove) {
      this.props.onTouch &&
        this.props.onTouch(this.isTouchMove, this.willChange);
    }
  }

  render() {
    return (
      <Scrollbar
        plugins={{
          disableScroll: { direction: `${this.props.direction || null}` },
          mobile: {
            speed: 0.5,
          },
          filterEvent: {
            blacklist: this.props.lock ? [/touch/] : this.props.snapSwipe  ? [] : [/touch/] ,
          },
          snapswipe: {
            size: {
              x: this.props.width && this.props.width,
              y: this.props.height && this.props.height,
            },

            active: this.props.snapSwipe ? true : false,
          },
        }}
        ref={this.scrollableDom}
        goToSlider={this.goToSlider}
        onScroll={(status, scrollbar) => this.scroll(status, scrollbar)}
        damping={0.3}
        delegateTo={this.props.target}
       
      >
        <div
          className={`scrol-container ${this.props.className}`}
          ref={this.container}
        >
          {this.props.children}
        </div>
      </Scrollbar>
    );
  }
}
export default Slider;
