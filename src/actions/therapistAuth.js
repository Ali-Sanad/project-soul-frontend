import axios from '../utils/api';

import {setAlert} from './alert';
// import setAuthToken from "../utils/setAuthToken";

import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOADED,
  THERAPIST_LOGOUT,
  THERAPIST_AUTH_ERROR,
  THERAPIST_FORGOT_PASSWORD,
  THERAPIST_RESET_PASSWORD,
} from './types';

//load therapist
export const loadTherapist = () => async (dispatch) => {
  try {
    const res = await axios.get('/therapist/me');
    console.log(res.data);

    dispatch({
      type: THERAPIST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    // console.log(123);
    dispatch({
      type: THERAPIST_AUTH_ERROR,
    });
  }
};

// Register therapist
export const register =
  ({fname, lname, email, password, confirmPassword}) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      fname,
      lname,
      email,
      password,
      confirmPassword,
    });
    // console.log('body', body);
    try {
      // console.log('try');
      const res = await axios.post('/therapist/signup', body, config);
      console.log('res.data', res.data);
      dispatch({
        type: THERAPIST_REGISTER_SUCCESS,
        payload: res.data,
      });
      // console.log('res', res);
      // dispatch(loadTherapist());
    } catch (err) {
      if (err.response) {
        // console.log('err.response', err.response.data.errors);
        // console.log('err');
        // console.log('e', err);
        const error = err.response.data.errors.err;

        console.log(error);

        if (error) {
          dispatch(setAlert(error, 'error'));
        }
        dispatch({
          type: THERAPIST_REGISTER_FAIL,
        });
      }
    }
  };

// Login therapist
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/therapist/login', formData);
    //console.log(res.data);
    dispatch(setAlert('Therapist logged in successfully', 'success'));

    dispatch({
      type: THERAPIST_LOGIN_SUCCESS,
      payload: res.data.token,
    });

    dispatch(loadTherapist());
  } catch (err) {
    console.log('errrr', err);
    if (err.response) {
      const error = err.response.data.errors.err;

      if (error) {
        dispatch(setAlert(error, 'error'));
      }

      dispatch({
        type: THERAPIST_LOGIN_FAIL,
      });
    }
  }
};

// // Logout
export const therapist_logout = () => (dispatch) => {
  dispatch(setAlert('Logged out successfully', 'success'));
  dispatch({type: THERAPIST_LOGOUT});
};

//reset password
export const resetPassword = (token, formData) => async (dispatch) => {
  try {
    // const token = "Fdf";
    if (formData.password !== formData.confirmPassword) {
      dispatch(setAlert('the two psswords must be the same', 'error'));
    } else {
      const res = await axios.patch(
        `/therapist/resetpassword/${token}`,
        formData
      );
      console.log('Resss', res);
      dispatch(setAlert(res.data.msg, 'success'));
      //after reseting the password the user must login again with the new password
      dispatch({
        type: THERAPIST_RESET_PASSWORD,
      });
      // setAuthToken(res.data.token);
    }
  } catch (err) {
    console.log('errrrorr', err);
    const error = err.response.data.errors;

    console.log('errrrr', err);
    dispatch(setAlert(error.msg, 'error'));
  }
};

//forgot password action
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/therapist/forgotpassword', formData);
    console.log(res.data);

    dispatch(setAlert(res.data.msg, 'success'));
    dispatch({
      type: THERAPIST_FORGOT_PASSWORD,
    });
  } catch (err) {
    const error = err.response.data.errors.err;
    console.log('err', error);
    dispatch(setAlert(error, 'error'));
  }
};
