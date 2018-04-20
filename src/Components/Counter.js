import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterAction from '../Redux/CounterRedux';
import PropTypes from 'prop-types';

class Counter extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
  }
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <button onClick ={ decrement }> Decrement </button>
        <button onClick={ increment }> Increment </button>
        <p> { value } </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    value: state.counter.value
  }

}

const mapDispatchToProps = (dispatch) => {

  return{
    increment: () => dispatch(CounterAction.increment()),
    decrement: () => dispatch(CounterAction.decrement())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);