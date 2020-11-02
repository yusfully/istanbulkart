import React from "react";
import { CollapsableProvider } from "./Provider";
import Collapsable from "./Collapsable";
import Inner from "./Inner";
import Body from "./Body";
import Button from "./Button";
import "./collapsable.scss";

const Collapse = (
  { children, isOpened, triggerElement, onChange },
  ...props
) => {
  return (
    <CollapsableProvider isOpened={isOpened}>
      <Collapsable
        triggerElement={triggerElement}
        {...props}
        onChange={onChange}
      >
        {children}
      </Collapsable>
    </CollapsableProvider>
  );
};
export default Collapse;
Collapse.Inner = Inner;
Collapse.Body = Body;
Collapse.Button = Button;
