import actionTypes from '../constants';

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
