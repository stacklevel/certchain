import { createReducer } from '../util/wrappers';
import constants from '../constants';

const {
  REGISTER_MANUFACTURER_SUCCESS,
  REGISTER_AUDITOR_SUCCESS,
  GET_USER,
  REGISTER_ORGAN_SUCCESS,
  GET_MANUFACTURER_SUCCESS,
  GET_AUDITOR_SUCCESS,
  GET_ORGAN_SUCCESS,
  GET_CERT_ORDER_SUCCESS,
  GET_BALANCE_SUCCESS,
} = constants;

export const initialState = {
  currentUser: null,
  userType: null,
  manufacturers: {},
  auditors: {},
  organs: {},
  certOrders: {},
  accountBalance: null,
};

export default createReducer(initialState, {
  [REGISTER_MANUFACTURER_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      manufacturer: payload,
    })
  },
  [REGISTER_AUDITOR_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      auditor: payload,
    })
  },
  [REGISTER_ORGAN_SUCCESS]: (state, payload) => {
    console.log(payload);
    return Object.assign({}, state, {
      organ: payload,
    })
  },
  [GET_USER]: (state, payload) =>
    Object.assign({}, state, {
      currentUser: payload,
      userType: payload[window.web3.eth.accounts[0]] && payload[window.web3.eth.accounts[0]].role
    }),
  [GET_MANUFACTURER_SUCCESS]: (state, payload) => {
    let data = payload.manufacturer;
    return Object.assign({}, state, {
      manufacturers: Object.assign({}, state.manufacturers, data)
    });
  },
  [GET_AUDITOR_SUCCESS]: (state, payload) => {
    let data = payload.auditor;
    return Object.assign({}, state, {
      auditors: Object.assign({}, state.auditors, data)
    });
  },
  [GET_ORGAN_SUCCESS]: (state, payload) => {
    let data = payload.organ;
    return Object.assign({}, state, {
      organs: Object.assign({}, state.organs, data)
    });
  },
  [GET_CERT_ORDER_SUCCESS]: (state, payload) => {
    let data = payload.certOrder;
    return Object.assign({}, state, {
      certOrders: Object.assign({}, state.certOrders, data)
    });
  }, 
  [GET_BALANCE_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      accountBalance: payload,
    })
  }
});
