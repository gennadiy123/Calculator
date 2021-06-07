import React from 'react';
import './Screen.css';

export const Screen = ({value}) => {
  return (
    <div className='component-screen'>
      <div>{value}</div>
    </div>
  );
};
