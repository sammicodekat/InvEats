import {
  DEMO_ACTION,
} from './demoActionTypes';

export function updateMyProp(name) {
  return {
    type: DEMO_ACTION,
    data: name,
  };
}
