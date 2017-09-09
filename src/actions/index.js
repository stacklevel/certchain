import { default as contract } from 'truffle-contract';

import actionTypes from '../constants';
import manufacturer_artifacts from '../../build/contracts/Manufacturer.json';
import auditor_artifacts from '../../build/contracts/Auditor.json';
import organ_artifacts from '../../build/contracts/Organ.json'

const Manufacturer = contract(manufacturer_artifacts);
const Auditor = contract(auditor_artifacts);
const Organ = contract(organ_artifacts);

Manufacturer.setProvider(window.web3.currentProvider);
Auditor.setProvider(window.web3.currentProvider);
Organ.setProvider(window.web3.currentProvider);

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
