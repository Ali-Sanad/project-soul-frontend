import api from "../utils/api";
import Alert from "@material-ui/lab/Alert";

import { setAlert } from "./alert";

import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOGOUT,
} from "./types";

// Register User
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
    console.log("body", body);
    try {
      console.log("try");
      const res = await api.post("/therapist/signup", body, config);
      console.log("res.data", res);
      dispatch({
        type: THERAPIST_REGISTER_SUCCESS,
        payload: res.data,
      });
      console.log("res", res);
      dispatch(setAlert("sucess", "primary"));
    } catch (err) {
      if (err.response) {
        console.log("err.response", err.response.data.errors);
        console.log("err");
        console.log("e", err);
        const error = err.response.data.errors.err;

        console.log(error);

        if (error) {
          dispatch(setAlert(error, "danger"));
        }
        dispatch({
          type: THERAPIST_REGISTER_FAIL,
        });
      }
    }
  };

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      password,
    });
    console.log("body", body);

    try {
      const res = await api.post("/therapist/login", body, config);
      //<Alert sverity="success">SUCESS</Alert>;

      dispatch(<Alert severity="success">SUCESS</Alert>);
      // dispatch(setAlert("sucess", "primary"), 5);
      dispatch({
        type: THERAPIST_LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log("errrr", err);
      if (err.response) {
        console.log("err.response", err.response.data.err);
        console.log("err");
        console.log("e", err);
        const error = err.response.data.errors.err;

        console.log(error);

        if (error) {
          dispatch(<Alert severity="error">{error}</Alert>);

          //  dispatch(setAlert(error, "danger"));
        }

        dispatch({
          type: THERAPIST_LOGIN_FAIL,
        });
      }
    }
  };

// // Logout
export const logout = () => (dispatch) => {
  dispatch({ type: THERAPIST_LOGOUT });
};
