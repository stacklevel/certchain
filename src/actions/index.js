import { default as contract } from 'truffle-contract';

import actionTypes from '../constants';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'

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

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);
const Organ = contract(organ_artifacts);

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);
Organ.setProvider(window.web3.currentProvider);

// --------------------------------------------------------------

const getManufacturerSuccess = manufacturer => (dispatch) => {
  dispatch({
    type: actionTypes.GET_MANUFACTURER_SUCCESS,
    payload: { manufacturer },
  });
};

const parseManufacturer = (address, data) => {
  let parsedData = data.slice(0, 8).map(e => window.web3.toAscii(e).replace(/\u0000/g, ''))
  return {
    [address]: {
      name: parsedData[0],
      scope: parsedData[1],
      productsAndServices: parsedData[2],
      legalAddress: parsedData[3],
      bankName: parsedData[4],
      uniqNumber: parsedData[5],
      phoneNumber: parsedData[6],
      email: parsedData[7],
      nextAddr: data[8],
    }
  };
}

export function getAllManufacturers() {
  return async function(dispatch) {
    let instance = await Manufacturer.deployed();
    let head = await instance.getHeadAddr();
    let current = head;

    while (current !== '0x0000000000000000000000000000000000000000') {
      let response = await instance.getByAddress(current);
      dispatch(getManufacturerSuccess(parseManufacturer(current, response)));
      current = response[response.length - 1];
    }
  }
}

// --------------------------------------------------------------

const getAuditorSuccess = auditor => (dispatch) => {
  dispatch({
    type: actionTypes.GET_AUDITOR_SUCCESS,
    payload: { auditor },
  });
};

const parseAuditor = (address, data) => {
  let parsedData = data.slice(0, 5).map(e => window.web3.toAscii(e).replace(/\u0000/g, ''))
  return {
    [address]: {
      name: parsedData[0],
      education: parsedData[1],
      certInfo: parsedData[2],
      phoneNumber: parsedData[3],
      email: parsedData[4],
      nextAddr: data[5],
    }
  };
}

export function getAllAuditors() {
  return async function(dispatch) {
    let instance = await Auditor.deployed();
    let head = await instance.getHeadAddr();
    let current = head;

    while (current !== '0x0000000000000000000000000000000000000000') {
      let response = await instance.getByAddress(current);
      dispatch(getAuditorSuccess(parseAuditor(current, response)));
      current = response[response.length - 1];
    }
  }
}

// --------------------------------------------------------------

const getOrganSuccess = organ => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ORGAN_SUCCESS,
    payload: { organ },
  });
};

const parseOrgan = (address, data) => {
  let parsedData = data.slice(0, 4).map(e => window.web3.toAscii(e).replace(/\u0000/g, ''))
  return {
    [address]: {
      name: parsedData[0],
      addr: parsedData[1],
      phoneNumber: parsedData[2],
      email: parsedData[3],
      nextAddr: data[4],
    }
  };
}

export function getAllOrgans() {
  return async function(dispatch) {
    let instance = await Organ.deployed();
    let head = await instance.getHeadAddr();
    let current = head;

    while (current !== '0x0000000000000000000000000000000000000000') {
      let response = await instance.getByAddress(current);
      dispatch(getOrganSuccess(parseOrgan(current, response)));
      current = response[response.length - 1];
    }
  }
}

// --------------------------------------------------------------

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
