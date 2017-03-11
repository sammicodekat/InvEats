import { combineReducers } from 'redux';
import auth from './authReducer';
import openTable from './openTableReducer';

const rootReducer = combineReducers({
  auth,
  openTable,
});

export default rootReducer;
