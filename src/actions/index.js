import actionTypes from '../constants';

import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import { isNull } from 'lodash';

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);

if (typeof window.web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask")
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);

const registerManufacturerSuccess = manufacturer => (dispatch) => {
  dispatch({
    type: actionTypes.REGISTER_MANUFACTURER_SUCCESS,
    payload: { manufacturer },
  });
};

const registerManufacturerFailure = errors => ({
  type: actionTypes.REGISTER_MANUFACTURER_FAILURE,
  payload: { errors },
});

export const registerManufacturer = params => (dispatch) => {
  dispatch(registerManufacturerSuccess(params));
};

const registerAuditorSuccess = auditor => (dispatch) => {
  dispatch({
    type: actionTypes.REGISTER_AUDITOR_SUCCESS,
    payload: { auditor },
  });
};

const registerAuditorFailure = errors => ({
  type: actionTypes.REGISTER_MANUFACTURER_FAILURE,
  payload: { errors },
});

export const registerAuditor = params => (dispatch) => {
  dispatch(registerAuditorSuccess(params));
};

export const getUser = () => (dispatch) => {
    let auditorInstance;
    let manufacturerInstance;

    let auditorPromise = Auditor.deployed().then(function(instance) {
      auditorInstance = instance;
    }).then(function() {
      return auditorInstance.getByAddress(window.web3.eth.defaultAccount);
    });

    let manufacturerPromise = Manufacturer.deployed().then(function(instance) {
      manufacturerInstance = instance;
    }).then(function() {
      return manufacturerInstance.getByAddress(window.web3.eth.defaultAccount);
    });

    Promise.all([auditorPromise, manufacturerPromise])
      .then(accounts => {
        const keys = [
          'companyName', 'scope',
          'products', 'address',
          'bankName', 'uniqNumber',
          'phone', 'email'
        ];
        const currentAccount = accounts
                                .map(account => {
                                  if(!parseInt(account[0])) {
                                    return null;
                                  } else {
                                    return account.map(value => window.web3
                                                                  .toAscii(value)
                                                                  .replace(/\u0000/g, ''));
                                  } 
                                })
                                .filter(account => !isNull(account))[0];

        let manufacturer = {};
        keys.forEach((key, index) => manufacturer[key] = currentAccount[index]);

        console.log(manufacturer);
        dispatch({
          type: actionTypes.GET_USER,
          payload: manufacturer
        });
      });
}