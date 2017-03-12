import {
  DEMO_ACTION,
} from './demoActionTypes';

export function updateMyProp(name) {
  console.log('updateMyProp invoked');
  return {
    type: DEMO_ACTION,
    data: name,
  };
}
