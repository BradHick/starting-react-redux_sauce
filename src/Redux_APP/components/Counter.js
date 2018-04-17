import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { value, increment, decrement } = this.props
    
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{ value }</p>
      </div>
    );
  }
}

export default Counter