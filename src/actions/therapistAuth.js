import axios from '../utils/api';
// import Alert from '@material-ui/lab/Alert';

import {setAlert} from './alert';

import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOADED,
  THERAPIST_LOGOUT,
  THERAPIST_AUTH_ERROR,
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
      // console.log('res.data', res);
      dispatch({
        type: THERAPIST_REGISTER_SUCCESS,
        payload: res.data,
      });
      // console.log('res', res);
      dispatch(setAlert('Account created successfully', 'success'));
      dispatch(loadTherapist());
    } catch (err) {
      if (err.response) {
        // console.log('err.response', err.response.data.errors);
        // console.log('err');
        // console.log('e', err);
        const error = err.response.data.errors.err;

        console.log(error);

        if (error) {
          dispatch(setAlert(error.message, 'error'));
        }
        dispatch({
          type: THERAPIST_REGISTER_FAIL,
        });
      }
    }
  };

// Login therapist
export const login =
  ({email, password}) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      email,
      password,
    });
    // console.log('body', body);

    try {
      const res = await axios.post('/therapist/login', body, config);

      dispatch({
        type: THERAPIST_LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadTherapist());
      dispatch(setAlert('Therapist logged in successfully ', 'success'));
    } catch (err) {
      console.log('errrr', err);
      if (err.response) {
        // console.log('err.response', err.response.data.err);
        // console.log('err');
        // console.log('e', err);
        const error = err.response.data.errors.err;

        // console.log(error);

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
  dispatch({type: THERAPIST_LOGOUT});
  dispatch(setAlert('Logged out successfully', 'success'));
};
