import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelloAction from '../Redux/HelloRedux';

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { handlePressHello, str } = this.props;
    return (
      <div>
        <button onClick={ handlePressHello }> Press to Hello</button>
        <p>{ str }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    str: state.hello.str
  }

}

const mapDispatchToProps = (dispatch) => {

  return{
    handlePressHello: () => dispatch(HelloAction.handlePressHello())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);