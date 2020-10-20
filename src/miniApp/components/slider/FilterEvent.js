import { ScrollbarPlugin } from "smooth-scrollbar";

export class FilterEventPlugin extends ScrollbarPlugin {
  static pluginName = "filterEvent";

  static defaultOptions = {
    blacklist: [],
  };

  transformDelta(delta, fromEvent) {
    if (this.shouldBlockEvent(fromEvent)) {
      return { x: 0, y: 0 };
    }

    return delta;
  }

  shouldBlockEvent(fromEvent) {
    return this.options.blacklist.some((rule) => fromEvent.type.match(rule));
  }
}
