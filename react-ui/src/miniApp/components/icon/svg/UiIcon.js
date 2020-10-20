import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import Morhphingline from "./Morhphingline";

const icon = {
  minus: [
    "250,250 250,250 250,250",
    "250,250 250,250 250,250",
    "480,250 250,250 20,250",
  ],
  plus: [
    "250,480 250,250 250,20",
    "250,250 250,250 250,250",
    "480,250 250,250 20,250",
  ],

  multiplyPlus: [
    "40,460 250,250 40,40",
    "460,460 250,250 460,40",
    "250,250 250,250 250,250",
  ],
  multiply: [
    "480,20 250,250 20,20",
    "250,250 250,250 250,250",
    "480,480 250,250 20,480",
  ],
  hamburger: [
    "250,365 250,365 250,365",
    "480,135 250,365 20,135",
    "480,135 250,365 20,135",
  ],
  arrowDown: [
    "250,365 250,365 250,365",
    "250,250 250,250 250,250",
    "480,135 250,365 20,135",
  ],

  arrowDownLong: [
    "250,480 250,250 250,20",
    "250,365 250,365 250,365",
    "400,300 250,480 100,300",
  ],
  arrowDownMid: [
    "250,400 250,250 250,20",
    "250,250 250,250 250,250",
    "480,170 250,400 20,170",
  ],
  arrowUp: [
    "250,365 250,365 250,365",
    "250,250 250,250 250,250",
    "480,365 250,135 20,365",
  ],
  arrowUpLong: [
    "250,480 250,250 250,20",
    "250,250 250,250 250,250",
    "400,480 250,300 100,480",
  ],
  arrowUpMid: [
    "250,100 250,250 250,480",
    "250,250 250,250 250,250",
    "480,400 250,170 20,400",
  ],
  arrowLeft: [
    "250,250 250,250 250,250",
    "250,250 250,250 250,250",
    "365,480 135,250 365,20",
  ],
  arrowLeftLong: [
    "480,250 250,250 20,250",
    "250,250 250,250 250,250",
    "250,400 20,250 250,100",
  ],
  arrowLeftMid: [
    "400,250 250,250 20,250",
    "250,250 250,250 250,250",
    "250,480 20,250 250,20",
  ],
  arrowRightLong: [
    "20,250 250,250 480,250",
    "250,250 250,250 250,250",
    "250,400 480,250 250,100",
  ],
  arrowRightMid: [
    "100,250 250,250 480,250",
    "250,250 250,250 250,250",
    "250,480 480,250 250,20",
  ],
  arrowRight: [
    "250,365 250,365 250,365",
    "250,250 250,250 250,250",
    "135,480 365,250 135,20",
  ],
  direction: [
    "250,365 250,365 250,365",
    "450,135 250,300 50,135",
    "450,135 250,480 50,135",
  ],
  arrowDouble: [
    "250,250 250,250 250,250 ",
    "480,70 250,300 20,70",
    "480,250 250,480 20,250",
  ],

  hamburger: [
    "480,100 250,100 20,100",
    "480,250 250,250 20,250",
    "480,400 250,400 20,400",
  ],
  tick: [
    "155,345 155,345 155,345",
    "155,345 155,345 155,345",
    "400,100 155,345 32,225",
  ],
  forward: [
    "480,250 250,250 20,250",
    "480,150 250,150 20,150",
    "480,250 250,480 20,250",
  ],
  next: [
    "250,480 250,250 250,20",
    "150,480 150,250 150,20",
    "250,480 480,250 250,20",
  ],
  prev: [
    "250,480 250,250 250,20",
    "330,480 330,250 330,20",
    "250,480 20,250 250,20",
  ],
  backward: [
    "480,250 250,250 20,250",
    "480,330 250,150 20,330",
    "480,250 250,20 20,250",
  ],
};

const UiIcon = forwardRef(
  (
    {
      currentIcon,
      morphIcon,
      morph,
      size,
      lineCap,
      addClass,
      join,
      onClick,
      ...props
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      toggleMorph() {
        change();
      },
    }));
    const [isMorphed, setIsMorphed] = useState(false);
    const [lines, setLines] = useState({
      current: icon[currentIcon],
      morph: icon[morphIcon],
    });
    const [iconLines, setIcon] = useState(icon[currentIcon]);

    useEffect(() => {
      if (morph !== undefined && morph != isMorphed) {
        setIsMorphed(morph);
      }
    }, [morph]);
    useEffect(() => {
      if (isMorphed !== undefined) {
        change();
      }
    }, [isMorphed]);

    const change = () => {
      if (morphIcon && icon[morphIcon] != undefined) {
        if (isMorphed) {
          setIcon(lines.morph);
        } else {
          setIcon(lines.current);
        }
      }
    };
    return (
      <svg
        className={`${lineCap ? lineCap : ""} ${addClass ? addClass : ""}
    ${join ? "join-" + join : ""} svg-icon `}
        x="0px"
        y="0px"
        width={size ? size : "100%"}
        height={size ? size : "100%"}
        viewBox={`0 0 500 500`}
        style={{ overflow: "visible" }}
        preserveAspectRatio="xMidyMid meet"
      >
        <g>
          {iconLines.map((element) => {
            return <Morhphingline {...props} lines={element}></Morhphingline>;
          })}
        </g>
      </svg>
    );
  }
);
export default UiIcon;
