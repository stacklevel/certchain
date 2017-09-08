import { createReducer } from '../util/wrappers';
import constants from '../constants';

const {
  REGISTER_MANUFACTURER_SUCCESS,
} = constants;

export const initialState = {
  manufacturer: null,
};

export default createReducer(initialState, {
  [REGISTER_MANUFACTURER_SUCCESS]: (state, payload) =>
    Object.assign({}, state, {
      manufacturer: payload.manufacturer,
    }),
});