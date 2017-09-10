import { default as contract } from 'truffle-contract';

import actionTypes from '../constants';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'
import certorder_artifacts from '../../build/contracts/CertOrder.json'
import certcoin_artifacts from '../../build/contracts/CertCoin.json';

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
const CertOrder = contract(certorder_artifacts);
const CertCoin = contract(certcoin_artifacts);

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);
Organ.setProvider(window.web3.currentProvider);
CertOrder.setProvider(window.web3.currentProvider);
CertCoin.setProvider(window.web3.currentProvider);

window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

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

    while (parseInt(current) !== 0) {
      let response = await instance.getByAddress(current);
      dispatch(getManufacturerSuccess(parseManufacturer(current, response)));
      current = response[response.length - 1];
    }
  }
}

export function approveTransaction() {
  return async function(dispatch) {
    let instance = await CertCoin.deployed();
    let auditor = await Auditor.deployed();
    let address = await auditor.address;
    let response = await instance.approve(address, 10e8, { from: window.web3.eth.accounts[0] });
    console.log(address, response);
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

    while (parseInt(current) !== 0) {
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

    while (parseInt(current) !== 0) {
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

const validateUser = (user) => user[Object.keys(user)[0]] !== ''

export function getUser() {
  return async function(dispatch) {
    const auditorInstance = await Auditor.deployed();
    const manufacturerInstance = await Manufacturer.deployed();
    const organInstance = await Organ.deployed();

    const currentAddress = window.web3.eth.defaultAccount;

    const auditor = await auditorInstance.getByAddress(currentAddress);
    const manufacturer = await manufacturerInstance.getByAddress(currentAddress);
    const organ = await organInstance.getByAddress(currentAddress);

    const parsedAuditor = parseAuditor(currentAddress, auditor);
    const parsedManufacturer = parseManufacturer(currentAddress, manufacturer);
    const parsedOrgan = parseOrgan(currentAddress, organ);

    let user = {};
    if (validateUser(parsedAuditor[currentAddress])) {
      user = Object.assign({}, parsedAuditor, {[currentAddress]: Object.assign({}, parsedAuditor[currentAddress], {role: 'auditor'})});
    } else if(validateUser(parsedManufacturer[currentAddress])) {
      user = Object.assign({}, parsedManufacturer, {[currentAddress]: Object.assign({}, parsedManufacturer[currentAddress], {role: 'manufacturer'})});
    } else if(validateUser(parsedOrgan[currentAddress])) {
      user = Object.assign({}, parsedOrgan, {[currentAddress]: Object.assign({}, parsedOrgan[currentAddress], {role: 'organ'})});
    }

    dispatch({
      type: actionTypes.GET_USER,
      payload: user,
    });
  }
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

export function registerForCertification(params) {
  return async function(dispatch) {
    const currentAddress = window.web3.eth.defaultAccount;

    const orderInstance = await CertOrder.deployed();
    const orderRegister = await orderInstance.register(...params, { from: currentAddress }); 
  }
}

// -----------------------------------------------------


const getCertOrderSuccess = certOrder => (dispatch) => {
  dispatch({
    type: actionTypes.GET_CERT_ORDER_SUCCESS,
    payload: { certOrder },
  });
};

const parseCertOrder = (address, data) => {
  let parsedData = data.map(e => window.web3.toAscii(e).replace(/\u0000/g, ''))
  return {
    [address]: {
      certInfo: parsedData[0],
      appliedAuditor1: data[2],
      appliedAuditor2: data[3],
      appliedAuditor3: data[4],
      appliedAuditor4: data[5],
      appliedAuditor5: data[6],
      selectedAuditor: data[7],
      nextAddr: data[1],
    }
  };
}

export function getAllCertOrders() {
  return async function(dispatch) {
    let instance = await CertOrder.deployed();
    let head = await instance.headAddr();
    let current = head;

    console.log(head);

    while (parseInt(current) !== 0) {
      let response = await instance.getByAddress(current);
      dispatch(getCertOrderSuccess(parseCertOrder(current, response)));
      current = response[1];
    }
  }
}

export const getAll = () => (dispatch) => {
  dispatch(getAllManufacturers());
  dispatch(getAllAuditors());
  dispatch(getAllOrgans());
  dispatch(getAllCertOrders());
}

export function getAccountBalance(addr = window.web3.eth.defaultAccount) {
  return async function(dispatch) {
    let instance  = await CertCoin.deployed();

    const accountBalance = await instance.balanceOf(addr, { from: addr }); 
    
    console.log(accountBalance);

    dispatch({
      type: actionTypes.GET_BALANCE_SUCCESS,
      payload: accountBalance,
    });
  }
}