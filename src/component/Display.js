import React from 'react';
import './Display.css';

export const Display = ({value}) => {
  return (
    <div className='component-display'>
      <div>{value}</div>
    </div>
  );
};
