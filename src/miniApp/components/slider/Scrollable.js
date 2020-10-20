import React from "react";
import SmoothScrollbar from "smooth-scrollbar";
import Scrollbar from "react-smooth-scrollbar";
import { DisableScrollPlugin } from "./DisableDirection";
import { EdgeEasingPlugin } from "../slider/Momentum";
import { MobilePlugin } from "./Mobile";
import "./slider.scss";

SmoothScrollbar.use(DisableScrollPlugin);
SmoothScrollbar.use(MobilePlugin);
SmoothScrollbar.use(EdgeEasingPlugin);

class Scrollable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isEnd: false,
      pos: {
        x: 0,
        y: 0,
      },
    };
    this.container = React.createRef();
    this.scrollableDom = React.createRef();
  }

  scrollTo = (value, dur) => {
    this.scrollableDom.current.scrollbar.scrollTo(0, value, dur ? dur : 500);
  };
  scrollToHorizontal = (value, dur) => {
    this.scrollableDom.current.scrollbar.scrollTo(value, 0, dur ? dur : 500);
  };

  scroll = (status, data) => {
    const { scrollbar } = this.scrollableDom;
    const { offset, limit } = status;

    this.setState({
      isEnd: limit.y - offset.y <= 0,
      pos: {
        x: offset.x,
        y: offset.y,
      },
    });

    this.props.onScroll && this.props.onScroll(offset, limit, data);
  };
  componentDidMount() {
    this.scrollableDom.current.scrollbar.options.delegateTo = this.container.current;
    this.scrollableDom.current.scrollbar.update();
  }
  handleClick = () => {};

  render() {
    return (
      <Scrollbar
        plugins={{
          mobile: {
            speed: 1,
          },
          filterEvent: {
            blacklist: this.props.lock ? [/touch/] : [],
          },
        }}
        ref={this.scrollableDom}
        goToSlider={this.goToSlider}
        onScroll={(status, scrollbar) => this.scroll(status, scrollbar)}
        damping={0.1}
        delegateTo={this.container.current}
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
export default Scrollable;
