import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_ERROR,
  ADD_USER_APPOINTMENT,
  CANCEL_USER_APPOINTMENT,
  USER_APPOINTMENT_FAILED,

  // ACCOUNT_DELETED,
  // USER_IMAGE,
} from '../actions/types';
const initialState = {
  token: localStorage.getItem('token'),
  isAdmin: localStorage.getItem('isAdmin') === 'true' ? true : false,
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case ADMIN_LOADED:
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
        token: payload.token,
        isAdmin: payload.isAdmin,
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
    case UPDATE_USER_PROFILE:
      return {
        ...state,
      };
    case UPDATE_USER_PROFILE_ERROR:
      return {
        ...state,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        note: true,
      };
    case ADD_USER_APPOINTMENT:
      return {
        ...state,
      };
    case CANCEL_USER_APPOINTMENT:
      return {
        ...state,
      };
    case USER_APPOINTMENT_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
