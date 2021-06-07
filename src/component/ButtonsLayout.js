import React from 'react';
import { Button } from './Button/Button';

export const Buttons = ({ name1, name2, name3, name4, handleClick }) => {
  return (
    <div>
      <Button name={name1} clickHandler={handleClick} />
      <Button name={name2} clickHandler={handleClick} />
      <Button name={name3} clickHandler={handleClick} />
      <Button name={name4} clickHandler={handleClick} black />
    </div>
  );
};
