import { default as contract } from 'truffle-contract';

import actionTypes from '../constants';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);
const Organ = contract(organ_artifacts);

const getManufacturerSuccess = manufacturer => (dispatch) => {
  dispatch({
    type: actionTypes.GET_MANUFACTURER_SUCCESS,
    payload: { manufacturer },
  });
};

const getManufacturerFailure = errors => ({
  type: actionTypes.GET_MANUFACTURER_FAILURE,
  payload: { errors },
});

export const getAllManufacturers = manufacturer => (dispatch) => {
  Manufacturer.deployed().then(instance => {
    // const head = instance.getHeadAddr();
    // const current = head;
    // while(current !== '0x0') {
    //   const response = instance.getByAddress(current.nextAddr);
    //   dispatch(getManufacturerSuccess(response));
    //   current = current.nextAddr;
    // }
    // const events = instance.LogManufactureRegistered({fromBlock: 0, toBlock: 'latest'});
    // console.log(events);
    // events.watch((error, response) => {
    //   console.log(response.args);
    //   dispatch(getManufacturerSuccess(response.args))
    // });
  });
}

import { default as Web3 } from 'web3';
import { isNull } from 'lodash';

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
Organ.setProvider(window.web3.currentProvider);

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

const registerOrganSuccess = organ => (dispatch) => {
  dispatch({
    type: actionTypes.REGISTER_ORGAN_SUCCESS,
    payload: { organ },
  });
};

const registerOrganFailure = errors => ({
  type: actionTypes.REGISTER_ORGAN_FAILURE,
  payload: { errors },
});

export const registerOrgan = params => (dispatch) => {
  dispatch(registerOrganSuccess(params));
};
