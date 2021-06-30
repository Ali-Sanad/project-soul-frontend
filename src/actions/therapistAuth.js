import axios from "../utils/api";

import { setAlert } from "./alert";

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
} from "./types";

//load therapist
export const loadTherapist = () => async (dispatch) => {
  try {
    const res = await axios.get("/therapist/me");

    dispatch({
      type: THERAPIST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: THERAPIST_AUTH_ERROR,
    });
  }
};

// Register therapist
export const register =
  ({ fname, lname, email, password, confirmPassword }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      fname,
      lname,
      email,
      password,
      confirmPassword,
    });

    try {
      const res = await axios.post("/therapist/signup", body, config);
      dispatch({
        type: THERAPIST_REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      if (err.response) {
        const error = err.response.data.errors.err;

        if (error) {
          dispatch(setAlert(error, "error"));
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
    const res = await axios.post("/therapist/login", formData);
    dispatch(setAlert("Therapist logged in successfully", "success"));

    dispatch({
      type: THERAPIST_LOGIN_SUCCESS,
      payload: res.data.token,
    });

    dispatch(loadTherapist());
  } catch (err) {
    if (err.response) {
      const error = err.response.data.errors.err;

      if (error) {
        dispatch(setAlert(error, "error"));
      }

      dispatch({
        type: THERAPIST_LOGIN_FAIL,
      });
    }
  }
};

// // Logout
export const therapist_logout = () => (dispatch) => {
  dispatch(setAlert("Logged out successfully", "success"));
  dispatch({ type: THERAPIST_LOGOUT });
};

//reset password
export const resetPassword = (token, formData) => async (dispatch) => {
  try {
    if (formData.password !== formData.confirmPassword) {
      dispatch(setAlert("the two psswords must be the same", "error"));
    } else {
      await axios.put(`/therapist/resetpassword/${token}`, formData);
      //after reseting the password the user must login again with the new password
      dispatch({
        type: THERAPIST_RESET_PASSWORD,
      });
      dispatch(setAlert("password Reset Successfully", "success"));
    }
  } catch (err) {
    dispatch(setAlert("error", "error"));
  }
};

//forgot password action
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/therapist/forgotpassword", formData);

    dispatch(setAlert(res.data.msg, "success"));
    dispatch({
      type: THERAPIST_FORGOT_PASSWORD,
    });
  } catch (err) {
    const error = err.response.data.errors.err;
    dispatch(setAlert(error, "error"));
  }
};
