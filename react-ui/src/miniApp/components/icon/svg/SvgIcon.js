import React, { useRef, useEffect, useState } from "react";
import NotIcon from "./Not";
import "./svgIcon.scss";

const toProperCase = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
};

const SvgIcon = ({
  name,
  size,
  animation,
  stroke,
  strokeWidth,
  fill,
  lineCap,
  join,
  addClass,
  not,
  extraIcon,
}) => {
  const ImportedIconRef = useRef(null);
  const notIcon = useRef();
  const [icon, setIcon] = useState(null);
  const [notIconVisible, setnotIconVisible] = useState(not);
  useEffect(() => {
    if (name && !icon) {
      const importIcon = async () => {
        try {
          const { default: namedImport } = await import(
            `../icons/${toProperCase(name)}.js`
          );

          ImportedIconRef.current = namedImport;
          setIcon(ImportedIconRef);
        } catch (err) {
          throw err;
        }
      };
      importIcon();
    }
  }, [name]);

  useEffect(() => {
    if (not) {
      setnotIconVisible(true);
    }
  }, [not]);
  const renderIcon = () => {
    const { current: Icon } = icon;

    return (
      <Icon
        stroke={stroke ? stroke : "none"}
        strokeWidth={strokeWidth ? strokeWidth + "pt" : "0"}
        fill={fill ? fill : "none"}
        animation={animation}
      ></Icon>
    );
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
      preserveAspectRatio="xMinYMin meet"
      style={{ overflow: "visible" }}
    >
      {icon ? renderIcon() : null}
      {notIconVisible ? (
        <NotIcon
          ref={notIcon}
          strokeWidth={strokeWidth && strokeWidth}
          stroke={stroke ? stroke : fill}
          visible={not}
          onInvisible={() => setnotIconVisible(false)}
        ></NotIcon>
      ) : null}
    </svg>
  );
};
export default SvgIcon;
