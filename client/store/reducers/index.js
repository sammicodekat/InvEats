import { combineReducers } from 'redux';
import auth from './authReducer';
import matches from './matchReducer';
import openTable from './openTableReducer';

const rootReducer = combineReducers({
  auth,
  matches,
  openTable,
});

export default rootReducer;
