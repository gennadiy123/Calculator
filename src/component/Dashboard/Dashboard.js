import { Button } from '../Button/Button';
import React from 'react';
import { Buttons } from '../ButtonsLayout';
import './Dashboard.css';

export const Dashboard = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div className='component-dashboard'>
      <Buttons name1='AC' name2='+/-' name3='%' name4='÷' handleClick={handleClick} />
      <Buttons name1='7' name2='7' name3='9' name4='x' handleClick={handleClick} />
      <Buttons name1='4' name2='5' name3='6' name4='-' handleClick={handleClick} />
      <Buttons name1='1' name2='2' name3='3' name4='+' handleClick={handleClick} />
      <div>
        <Button name='0' clickHandler={handleClick} wide />
        <Button name='.' clickHandler={handleClick} />
        <Button name='=' clickHandler={handleClick} black />
      </div>
    </div>
  );
};
