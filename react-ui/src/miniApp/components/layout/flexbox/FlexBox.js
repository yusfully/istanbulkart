import React from "react";

const FlexBox = ({
  reverse,
  vertical,
  width,
  height,
  space,
  col,
  colTablet,
  justify,
  nospace,
  align,
  forceLine,
  addClass,
  children,
}) => {
  const renderChildren = (children) => {
    const mobile = window.innerWidth < 768;
    const column = mobile ? col : colTablet ? colTablet : col;

    return React.Children.map(children, (child, index) => (
      <div
        className
        key={index}
        style={{
          width: `${column ? 100 / column + "%" : width ? width : "auto"}`,
          flex: `0 0 ${
            (column && 100 / column + "%") || width ? width : "100%"
          }`,
          padding: `${space ? space : nospace ? "0px" : "10px"}`,
        }}
      >
        {child}
      </div>
    ));
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: `${forceLine ? "nowrap" : "wrap"}`,
        flexDirection: `${
          vertical
            ? reverse
              ? "column-reverse"
              : "column"
            : reverse
            ? "row-reverse"
            : "row"
        }`,
        margin: `0 ${space ? space * -1 : nospace ? "0px" : "0px"}`,
        justifyContent: `${
          justify ? "space-between" : align ? align : "flex-start"
        }`,
      }}
      className={`${addClass ? addClass : ""} kb-flex-box`}
    >
      {renderChildren(children)}
    </div>
  );
};

export default FlexBox;
