import React, { Component } from 'react';

class Dollar extends Component {
  handleChange = e => {
    this.props.onDollarChange(e.target.value);
  };

  render() {
    const { dollars } = this.props;
    return (
      <div>
        <label>Dollars</label>
        <input type="number" value={dollars} onChange={this.handleChange} />
      </div>
    );
  } 
}

export default Dollar;
