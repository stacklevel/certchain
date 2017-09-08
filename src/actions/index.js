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
  dispatch()
    .then(response => dispatch(registerManufacturerSuccess(response.news)))
    .catch(error => dispatch(registerManufacturerFailure(error.response)));
};
