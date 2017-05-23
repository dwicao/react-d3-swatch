import React from 'react';

const Swatch = ({ color, width, x, y }) => (
  <rect width={width} height="20" x={x} y={y} style={{fill: color}} />
);

export default Swatch;
