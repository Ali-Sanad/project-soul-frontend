import axios from '../utils/api';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  LOGOUT,
  AUTH_ERROR,
  //   PROFILE_ERROR,
  //   USER_IMAGE,
} from './types';
import {setAlert} from './alert';

//load user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth');
    // console.log(res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register user
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Account created successfully', 'success'));
  } catch (err) {
    if (!err.response) {
      return dispatch(setAlert('Account registeration failed', 'error'));
    }

    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//login user
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/auth', formData);
    console.log(res.data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout
export const logout = () => (dispatch) => {
  dispatch(setAlert('Logged out successfully', 'success'));
  dispatch({
    type: LOGOUT,
  });
};
