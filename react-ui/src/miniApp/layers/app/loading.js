import React, { useLayoutEffect } from "react";

const Loading = ({ loaded }) => {
  useLayoutEffect(() => {
    return () => {
      loaded();
    };
  }, []);
  return <div className="loading">loading</div>;
};
export default Loading;
