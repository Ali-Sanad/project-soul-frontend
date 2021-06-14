import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

function therapistAuthReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("Action", action);

  switch (type) {
    case THERAPIST_REGISTER_SUCCESS:
    case THERAPIST_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case THERAPIST_REGISTER_FAIL:
    case THERAPIST_LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    case THERAPIST_LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default therapistAuthReducer;
