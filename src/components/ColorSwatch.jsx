import React from 'react';

export const ColorSwatch = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      display: 'inline-block',
      height: '20px',
      marginRight: '8px',
      verticalAlign: 'middle',
      width: '20px',
    }}
  />
);
