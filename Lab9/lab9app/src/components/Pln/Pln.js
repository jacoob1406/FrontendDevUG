import React, { Component } from 'react';

class Pln extends Component {
  handleChange = e => {
    this.props.onPlnChange(e.target.value);
  };
  render() {
    const { plns } = this.props;
    return (
      <div>
        <label>Plns</label>
        <input type="number" value={plns} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Pln;
