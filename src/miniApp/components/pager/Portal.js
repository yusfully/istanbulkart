import { memo, useEffect, useRef, useState } from "react";
import { useHistory, useParams, Route, useRouteMatch } from "react-router-dom";
import { createPortal } from "react-dom";
const Portal = ({ id, children, onMount, className, getParams }) => {
  const el = useRef(
    document.getElementById(id) || document.createElement("div")
  );
  const [dynamic] = useState(!el.current.parentElement);
  const match = useRouteMatch();
  useEffect(() => {
    if (dynamic) {
      el.current.id = id;
      el.current.classList.add(className ? className : "new-page");
      document.body.appendChild(el.current);

      onMount && onMount();
    }
    return () => {
      if (dynamic && el.current.parentElement) {
        el.current.parentElement.removeChild(el.current);
      }
    };
  }, []);
  return createPortal(children, el.current);
};
export default memo(Portal);
