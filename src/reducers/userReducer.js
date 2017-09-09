import { createReducer } from '../util/wrappers';
import constants from '../constants';

import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);
const Organ = contract(organ_artifacts);

if (typeof window.web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);
Organ.setProvider(window.web3.currentProvider);

const {
  REGISTER_MANUFACTURER_SUCCESS,
  REGISTER_AUDITOR_SUCCESS,
  REGISTER_ORGAN_SUCCESS,
} = constants;

export const initialState = {
  manufacturer: null,
};

export default createReducer(initialState, {
  [REGISTER_MANUFACTURER_SUCCESS]: (state, payload) => {
    console.log(payload);

    let manufacturerInstance;
    debugger;

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
    // debugger;

    return Organ.deployed().then(function(instance) {
      organInstance = instance;

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
  }
});
