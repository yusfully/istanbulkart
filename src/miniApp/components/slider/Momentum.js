import { ScrollbarPlugin } from "smooth-scrollbar";

export class EdgeEasingPlugin extends ScrollbarPlugin {
  static pluginName = "edgeEasing";

  transformDelta(delta, fromEvent) {
    if (fromEvent.type !== "touchmove") {
      return delta;
    }

    // clamps momentum within [-offset, limit - offset]
    this.scrollbar.options.damping = 1;
    return delta;
  }
  onRender() {
    this.scrollbar._type = this._type;
  }
}
