import React from 'react';
import './Button.css';

export const Button = ({ name, black, wide, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    'component-button',
    black ? 'black' : '',
    wide ? 'wide' : '',
    name === '=' ? 'equally' : '',
    name === 'AC' ? 'reset' : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};
