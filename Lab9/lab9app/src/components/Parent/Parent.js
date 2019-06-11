import React, { Component } from 'react';
import Dollar from '../Dollar/Dollar';
import Pln from '../Pln/Pln';

const EXCHANGE_RATE = 3;

class Parent extends Component {
  state = {
    dollars: 1,
    plns: 3,
  };


  handleDollarChange = value => {
    this.setState({ dollars: value, plns: value * EXCHANGE_RATE });
  };

  handlePlnChange = value => {
    this.setState({ dollars: value / EXCHANGE_RATE, plns: value });
  };

  render() {
    return (
      <div>
        <Dollar
          dollars={this.state.dollars}
          onDollarChange={this.handleDollarChange}
        />
        <Pln plns={this.state.plns} onPlnChange={this.handlePlnChange} />
      </div>
    );
  }
}

export default Parent;
