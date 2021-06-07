import { Button } from './Button';
import React from 'react';
import './ButtonPanel.css';

export const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    console.log(`buttonName`, buttonName);
    clickHandler(buttonName);
  };

  const Buttons = ({ name1, name2, name3, name4 }) => {
    return (
      <div>
        <Button name={name1} clickHandler={handleClick} />
        <Button name={name2} clickHandler={handleClick} />
        <Button name={name3} clickHandler={handleClick} />
        <Button name={name4} clickHandler={handleClick} orange />
      </div>
    );
  };

  return (
    <div className='component-button-panel'>
      <Buttons name1='AC' name2='+/-' name3='%' name4='÷' />
      <Buttons name1='7' name2='7' name3='9' name4='x' />
      <Buttons name1='4' name2='5' name3='6' name4='-' />
      <Buttons name1='1' name2='2' name3='3' name4='+' />
      <div>
        <Button name='0' clickHandler={handleClick} wide />
        <Button name='.' clickHandler={handleClick} />
        <Button name='=' clickHandler={handleClick} orange />
      </div>
    </div>
  );
};
