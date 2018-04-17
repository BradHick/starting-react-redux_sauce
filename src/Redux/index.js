import { combineReducers } from 'redux';
import configureStore from './CreateStore';

export default () => {
  const rootReducer =  combineReducers({
    //REDUCERS WILL BE HERE
  });

  return configureStore(rootReducer);
}