import axios from '../utils/api';
import {setAlert} from './alert';
import {getTherapist} from './therapists';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  LOGOUT,
  AUTH_ERROR,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_ERROR,
  ADD_USER_APPOINTMENT,
  CANCEL_USER_APPOINTMENT,
  USER_APPOINTMENT_FAILED,
  //   PROFILE_ERROR,
  //   USER_IMAGE,
} from './types';

//load user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/loadUser');
    console.log(res.data);

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

//update user
export const updateProfile = (userId, body) => async (dispatch) => {
  try {
    console.log('update');
    const res = await axios.patch('/auth', body, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    //console.log(res.data)
    console.log('update user res,data', res.data);
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_USER_PROFILE_ERROR,
    });
  }
};

//load admin
export const loadAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/loadAdmin');
    console.log(res.data);

    dispatch({
      type: ADMIN_LOADED,
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

    if (res.data.isAdmin) {
      dispatch(setAlert('Admin logged in successfully', 'success'));
      localStorage.setItem('isAdmin', true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadAdmin());
    } else {
      dispatch(setAlert('User logged in successfully', 'success'));
      localStorage.setItem('isAdmin', false);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    }
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
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert('Logged out successfully', 'success'));
};

//reset password
export const resetPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.put('/users/reset-password', formData);
    dispatch(setAlert(res.data.msg, 'success'));
    //after reseting the password the user must login again with the new password
    localStorage.removeItem('token');
    dispatch({
      type: RESET_PASSWORD,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch(setAlert('Unauthorized user', 'error'));
  }
};

//forgot password action
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/users/forgot-password', formData);
    console.log(res.data);

    dispatch(setAlert(res.data.msg, 'success'));
    dispatch({
      type: FORGOT_PASSWORD,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};

//users appointments######ACTIONS######

// //book an appointment
// export const bookAppointment = (id, therapist_id) => async (dispatch) => {
//   try {
//     await axios.put(`/appointments/user/${id}`);

//     dispatch(setAlert('Appointment booked successfully ', 'success'));
//     dispatch({
//       type: ADD_USER_APPOINTMENT,
//     });
//     //optimistic update
//     dispatch(loadUser());
//     dispatch(getTherapist(therapist_id));
//   } catch (err) {
//     console.log(err);
//     dispatch(setAlert('Appointment booking failed ', 'error'));
//     dispatch({
//       type: USER_APPOINTMENT_FAILED,
//     });
//     dispatch(loadUser());
//   }
// };

//book an appointment  payment + booking
export const paymentBookingAction =
  ({appointmentId, token, therapist_id}) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/payment', {appointmentId, token});
      // console.log(typeof res.status, res.status);
      if (res.status === 200) {
        dispatch(setAlert('Appointment booked successfully ', 'success'));
      }
      dispatch({
        type: ADD_USER_APPOINTMENT,
      });
      //optimistic update
      dispatch(loadUser());
      dispatch(getTherapist(therapist_id));
    } catch (err) {
      console.log(err);
      dispatch(setAlert('Appointment booking failed ', 'error'));
      dispatch({
        type: USER_APPOINTMENT_FAILED,
      });
      dispatch(loadUser());
    }
  };

//cancel an appointment
export const cancelAppointment = (id) => async (dispatch) => {
  try {
    await axios.delete(`/appointments/user/${id}`);

    dispatch(setAlert('Appointment is cancelled successfully ', 'success'));
    dispatch({
      type: CANCEL_USER_APPOINTMENT,
    });
    //optimistic update
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch(setAlert('Appointment cancelling failed ', 'error'));
    dispatch({
      type: USER_APPOINTMENT_FAILED,
    });
    dispatch(loadUser());
  }
};
