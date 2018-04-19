import { createReducer, createActions } from 'reduxsauce';

//actions
const { Types, Creators } = createActions({
  handlePressHello: null
});


export const HelloTypes = Types;
export default Creators;

//reducers
export const INITIAL_STATE = {
  str: null
}

export const sayHello = ( state ) => {
  //return state.merge({str: 'Hello ReduxSauce'});
  return {...state, str: 'Hello ReduxSauce'};
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HANDLE_PRESS_HELLO]: sayHello
});