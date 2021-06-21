import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  THERAPIST_LOGOUT,
  // ACCOUNT_DELETED,
  // USER_IMAGE,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case THERAPIST_LOGOUT:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      // case ACCOUNT_DELETED:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        user: null,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        redirect: true,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        note: true,
      };

    default:
      return state;
  }
};

export default reducer;
