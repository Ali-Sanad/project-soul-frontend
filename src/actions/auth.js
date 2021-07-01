import axios from "../utils/api";
import { setAlert } from "./alert";
import { getTherapist } from "./therapists";

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
} from "./types";

//load user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/loadUser");

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
export const updateUser = (user) => {
  return async (dispatch, getState) => {
    const config = {
      headers: {
        Authorization: localStorage.token,
      },
    };

    try {
      const res = await axios.put("/user-profile", user, config);
      dispatch(setAlert("Data has updated successfully ", "success"));
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_PROFILE_ERROR,
      });
    }
  };
};
//update
export const updateProfile = ( body) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };
  try {
    const res = await axios.put("/user-profile", body, config);

    dispatch(setAlert("Data has updated successfully ", "success"));

    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: res.data,
    });
    dispatch(loadUser)
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PROFILE_ERROR,
    });
  }
};

//load admin
export const loadAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/loadAdmin");

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
    const res = await axios.post("/users", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("Account created successfully", "success"));
  } catch (err) {
    if (!err.response) {
      return dispatch(setAlert("Account registeration failed", "error"));
    }

    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//login user
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/auth", formData);

    if (res.data.isAdmin) {
      dispatch(setAlert("Admin logged in successfully", "success"));
      localStorage.setItem("isAdmin", true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadAdmin());
    } else {
      dispatch(setAlert("User logged in successfully", "success"));
      localStorage.setItem("isAdmin", false);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
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
  dispatch(setAlert("Logged out successfully", "success"));
};

//reset password
export const resetPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.put("/users/reset-password", formData);
    dispatch(setAlert(res.data.msg, "success"));
    //after reseting the password the user must login again with the new password
    localStorage.removeItem("token");
    dispatch({
      type: RESET_PASSWORD,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch(setAlert("Unauthorized user", "error"));
  }
};

//forgot password action
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/users/forgot-password", formData);

    dispatch(setAlert(res.data.msg, "success"));
    dispatch({
      type: FORGOT_PASSWORD,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

//users appointments######ACTIONS######

//book an appointment  payment + booking
export const paymentBookingAction =
  ({ appointmentId, token, therapist_id, user }) =>
  async (dispatch) => {
    try {
      const res = await axios.post("/payment", { appointmentId, token });
      if (res.status === 200) {
        dispatch(setAlert("Appointment booked successfully ", "success"));
      }
      dispatch({
        type: ADD_USER_APPOINTMENT,
      });
      //optimistic update
      dispatch(loadUser());
      dispatch(getTherapist(therapist_id));
    } catch (err) {
      dispatch(setAlert("Appointment booking failed ", "error"));
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

    dispatch(setAlert("Appointment is cancelled successfully ", "success"));
    dispatch({
      type: CANCEL_USER_APPOINTMENT,
    });
    //optimistic update
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert("Appointment cancelling failed ", "error"));
    dispatch({
      type: USER_APPOINTMENT_FAILED,
    });
    dispatch(loadUser());
  }
};

//contact us actions any user can send an induiry where he/she logged in or not
export const contactUsAction = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/users/contact-us", formData);
    dispatch(setAlert(res.data.msg, "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
