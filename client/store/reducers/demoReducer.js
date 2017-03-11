import {
  DEMO_ACTION,
} from '../actions/demo/demoActionTypes';

const initialState = {
  myProp: 'zack',
};

function demoReducer(state = initialState, action) {
  switch (action.type) {
    case DEMO_ACTION:
      return Object.assign({}, state, {
        myProp: action.data,
      });
    default:
      return state;
  }
}

export default demoReducer;
