import { createReducer } from '../util/wrappers';
import constants from '../constants';

import { default as contract } from 'truffle-contract';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);
const Organ = contract(organ_artifacts);

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);
Organ.setProvider(window.web3.currentProvider);

const {
  REGISTER_MANUFACTURER_SUCCESS,
  REGISTER_AUDITOR_SUCCESS,
  GET_USER,
  REGISTER_ORGAN_SUCCESS,
  GET_MANUFACTURER_SUCCESS
} = constants;

export const initialState = {
  manufacturer: null,
  manufacturers: {},
};

export default createReducer(initialState, {
  [REGISTER_MANUFACTURER_SUCCESS]: (state, payload) => {
    console.log(payload);

    let manufacturerInstance;

    return Manufacturer.deployed().then(function(instance) {
      manufacturerInstance = instance;

      return manufacturerInstance.register(...payload.manufacturer, { from: window.web3.eth.accounts[0] });
    }).then(function() {
      return manufacturerInstance.getByAddress(window.web3.eth.accounts[0]);
    }).then(function(storedData) {
      console.log(storedData);
    });

    // return Object.assign({}, state, {
    //   manufacturer: payload,
    // })
  },
  [REGISTER_AUDITOR_SUCCESS]: (state, payload) => {
    console.log(payload);

    let auditorInstance;
    // debugger;

    return Auditor.deployed().then(function(instance) {
      auditorInstance = instance;

      return auditorInstance.register(...payload.auditor, { from: window.web3.eth.accounts[0] });
    }).then(function() {
      return auditorInstance.getByAddress(window.web3.eth.accounts[0]);
    }).then(function(storedData) {
      console.log(storedData);
    });

    // return Object.assign({}, state, {
    //   auditor: payload,
    // })
  },
  [REGISTER_ORGAN_SUCCESS]: (state, payload) => {
    console.log(payload);

    let organInstance;
    let organEvents;
    // debugger;

    return Organ.deployed().then(function(instance) {
      organInstance = instance;
      organEvents = organInstance.LogOrganRegistered({fromBlock:0,toBlock:'latest'});
      organEvents.watch(function(error, response) {
        console.log(error, response);
      });

      return organInstance.register(...payload.organ, { from: window.web3.eth.accounts[0] });
    }).then(function() {
      return organInstance.getByAddress(window.web3.eth.accounts[0]);
    }).then(function(storedData) {
      console.log(storedData);
      let parsedData = storedData.map(e => window.web3.toAscii(e))
      console.log(parsedData);
    });

    // return Object.assign({}, state, {
    //   organ: payload,
    // })
  },
  [GET_USER]: (state, payload) => 
    Object.assign({}, state, {
      manufacturer: payload,
    }),
  [GET_MANUFACTURER_SUCCESS]: (state, payload) => {
    Object.assign({}, state, {
      manufacturers: Object.assign({}, state.manufacturers, {
        [payload.address]: payload,
      })
    });
  }
});
