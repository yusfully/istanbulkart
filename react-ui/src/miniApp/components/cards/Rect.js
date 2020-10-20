export function roundedRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x, y);
  ctx.lineTo(
    x + (height - radius) * Math.sin((0 * Math.PI) / 180),
    y + height - radius
  );
  ctx.bezierCurveTo(
    x + (height - radius / 2) * Math.sin((0 * Math.PI) / 180),
    y + height - radius / 2,
    x + (height - radius) * Math.sin((0 * Math.PI) / 180) + radius - radius / 2,
    y + height,
    x + (height - radius) * Math.sin((0 * Math.PI) / 180) + radius,
    y + height
  );

  ctx.lineTo(
    x + width - (height - radius) * Math.sin((0 * Math.PI) / 180) - radius,
    y + height
  );
  ctx.bezierCurveTo(
    x +
      width -
      (height - radius) * Math.sin((0 * Math.PI) / 180) -
      radius +
      radius / 2,
    y + height,
    x + width - (height - radius / 2) * Math.sin((0 * Math.PI) / 180),
    y + height - radius / 2,
    x + width - (height - radius) * Math.sin((0 * Math.PI) / 180),
    y + height - radius
  );

  ctx.lineTo(x + width, y + radius);

  ctx.bezierCurveTo(
    x + width,
    y + radius,
    x + width - (height - radius / 2) * Math.sin((0 * Math.PI) / 180),
    y,
    x + width - radius * Math.sin((0 * Math.PI) / 180) - radius,
    y
  );
  ctx.lineTo(x + radius, y);

  ctx.bezierCurveTo(
    x + radius,
    y,
    x + (radius / 2) * Math.sin((0 * Math.PI) / 180),
    y + (radius / 2) * Math.sin((0 * Math.PI) / 180),
    x,
    y + radius
  );

  ctx.lineTo(x, y + radius);
}
