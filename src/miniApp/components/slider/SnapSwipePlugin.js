import { ScrollbarPlugin } from "smooth-scrollbar";

export class SnapSwipePlugin extends ScrollbarPlugin {
  static pluginName = "snapswipe";
  _remainMomentum = {
    x: 0,
    y: 0,
  };
  page = 0;
  next = 0;
  type = "";
  delta = 0;
  isChanged = false;
  swipeProgress = 0;
  size = {
    x: this.scrollbar.containerEl.getBoundingClientRect().width,
    y: this.scrollbar.containerEl.getBoundingClientRect().height,
  };

  static defaultOptions = {
    pos: 0,
    active: false,
    page: 0,
    willChange: 0,
    size: {
      x: window.innerWidth,
      y: "auto",
    },
  };

  transformDelta(delta, fromEvent) {
    this.type = fromEvent.type;
    this.delta = delta;
    if (this.options.active) {
      let direction = Math.sign(delta[this.scrollbar._axis]);

      const { limit, offset } = this.scrollbar;
      const size = this.options.size[this.scrollbar._axis];

      if (
        direction > 0 &&
        limit[this.scrollbar._axis] / offset[this.scrollbar._axis] <= 1
      ) {
        return { x: 0, y: 0 };
      }
      if (fromEvent.type === "touchmove") {
        this.scrollbar.isTouchMove = true;
      } else {
        this.scrollbar.isTouchMove = false;
      }
      if (fromEvent.type === "touchend") {
        if (
          delta[this.scrollbar._axis] <
            size * this.options.page + size - offset[this.scrollbar._axis] &&
          direction > 0
        ) {
          delta[this.scrollbar._axis] =
            size * this.options.page + size - offset[this.scrollbar._axis];
        } else if (
          delta[this.scrollbar._axis] >
            size * this.options.page - size - offset[this.scrollbar._axis] &&
          direction < 0
        ) {
          delta[this.scrollbar._axis] =
            size * this.options.page - size - offset[this.scrollbar._axis];
        }

        if (
          (delta[this.scrollbar._axis] >=
            size * this.options.page - offset[this.scrollbar._axis] + size &&
            direction > 0) ||
          (delta[this.scrollbar._axis] <=
            size * this.options.page - offset[this.scrollbar._axis] &&
            direction < 0)
        ) {
          if (this.isChanged) return;

          this.isChanged = true;
          this.options.page += 1 * direction;
          this.options.willChange += 1 * direction;
        } else if (direction === 0) {
          direction = Math.sign(
            offset[this.scrollbar._axis] - size * this.options.page
          );
          if (
            offset[this.scrollbar._axis] <
              size * this.options.page - size / 2 ||
            offset[this.scrollbar._axis] > size * this.options.page + size / 2
          ) {
            this.options.page += 1 * direction;
            this.options.willChange += 1 * direction;
          }
        }

        const deltaCustom = {
          x: this._remainMomentum.x + delta.x,
          y: this._remainMomentum.y + delta.y,
        };

        if (
          (Math.sign(direction) > 0 &&
            Math.sign(delta[this.scrollbar._axis]) > 0) ||
          (Math.sign(delta[this.scrollbar._axis]) === 0 &&
            offset[this.scrollbar._axis] > size * this.options.page)
        ) {
          this.scrollbar.setMomentum(
            Math.max(
              -offset.x,
              Math.min(deltaCustom.x, size * this.options.willChange - offset.x)
            ),
            Math.max(
              -offset.y,
              Math.min(deltaCustom.y, size * this.options.willChange - offset.y)
            )
          );
        } else if (
          (Math.sign(direction) < 0 &&
            Math.sign(delta[this.scrollbar._axis]) < 0) ||
          (Math.sign(delta[this.scrollbar._axis]) === 0 &&
            offset[this.scrollbar._axis] < size * this.options.page)
        ) {
          this.scrollbar.setMomentum(
            Math.min(
              offset.x,
              Math.max(deltaCustom.x, size * this.options.willChange - offset.x)
            ),
            Math.min(
              offset.y,
              Math.max(deltaCustom.y, size * this.options.willChange - offset.y)
            )
          );
        }

        setTimeout(() => {
          this.isChanged = false;
        }, 300);

        return { x: 0, y: 0 };
      }
    }
  }
  onRender(remainMomentum, page, type) {
    this.scrollbar._page = this.options.page;
    this.scrollbar._type = this.type;
    this.scrollbar._delta = this.delta;

    this.scrollbar.willChange = this.options.willChange;
    Object.assign(this.type, type);
    Object.assign(this._remainMomentum, remainMomentum);
    Object.assign(this.page, page);
  }
}
