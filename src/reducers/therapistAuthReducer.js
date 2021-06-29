import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGOUT,
  THERAPIST_LOADED,
  THERAPIST_FORGOT_PASSWORD,
  THERAPIST_RESET_PASSWORD,
  THERAPIST_AUTH_ERROR,
} from "../actions/types";

const initialState = {
  therapistToken: localStorage.getItem("therapistToken"),
  isAuthenticated_therapist: null,
  loading_therapist: true,
  therapist: null,
};

function therapistAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case THERAPIST_LOADED:
      return {
        ...state,
        isAuthenticated_therapist: true,
        loading_therapist: false,
        therapist: payload,
      };
    case THERAPIST_REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case THERAPIST_LOGIN_SUCCESS:
      return {
        ...state,
        therapistToken: payload,
        isAuthenticated_therapist: true,
        loading_therapist: false,
        // therapist: payload.therapist,
      };

    case THERAPIST_REGISTER_FAIL:
    case THERAPIST_LOGIN_FAIL:
    case THERAPIST_LOGOUT:
    case THERAPIST_AUTH_ERROR:
      return {
        ...state,
        therapistToken: null,
        isAuthenticated_therapist: false,
        loading_therapist: true,
        therapist: null,
      };
    case THERAPIST_RESET_PASSWORD:
      return {
        ...state,
        therapistToken: null,
        isAuthenticated_therapist: false,
        loading_therapist: true,
        therapist: null,
        redirect: true,
      };
    case THERAPIST_FORGOT_PASSWORD:
      return {
        ...state,
        note: true,
      };

    default:
      return state;
  }
}

export default therapistAuthReducer;
