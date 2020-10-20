export function getBounds(width, height, left, top) {
  let offset = {
    x: left - window.innerWidth / 2 + width / 2,
    y: -top + window.innerHeight / 2 - height / 2,
  };

  return offset;
}
