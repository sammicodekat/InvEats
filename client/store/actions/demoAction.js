import {
  DEMO_ACTION,
} from './actionTypes';

export function updateMyProp(name) {
  return {
    type: DEMO_ACTION,
    data: name,
  };
}
