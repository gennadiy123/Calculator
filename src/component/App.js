import React from 'react';
import { Screen } from './Screen/Screen';
import { Dashboard } from './Dashboard/Dashboard';
import { calculate } from '../logic/calculate';
import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className='component-app'>
        <Screen value={this.state.next || this.state.total || '0'} />
        <Dashboard clickHandler={this.handleClick} />
      </div>
    );
  }
}
