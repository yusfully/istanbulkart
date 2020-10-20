import { ScrollbarPlugin } from "smooth-scrollbar";

export class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll";

  static defaultOptions = {
    direction: null,
  };
  _axis = (this.scrollbar._axis = null);

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction === "y" ? "x" : "y"] = 0;
    }
    this.scrollbar._axis = this.options.direction;
    return { ...delta };
  }
}
