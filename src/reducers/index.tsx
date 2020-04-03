import { combineReducers } from 'redux';
import data from './test';

const rootReducer = combineReducers({
    data: data
  });

  export default rootReducer