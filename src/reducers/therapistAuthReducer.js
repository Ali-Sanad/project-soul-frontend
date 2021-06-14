import {
  THERAPIST_REGISTER_SUCCESS,
  THERAPIST_REGISTER_FAIL,
  THERAPIST_LOGIN_FAIL,
  THERAPIST_LOGIN_SUCCESS,
  THERAPIST_LOGOUT,
  THERAPIST_LOADED,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  therapist: null,
};

function therapistAuthReducer(state = initialState, action) {
  const {type, payload} = action;
  // console.log('Action', action);

  switch (type) {
    case THERAPIST_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        therapist: payload,
      };
    case THERAPIST_REGISTER_SUCCESS:
    case THERAPIST_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case THERAPIST_REGISTER_FAIL:
    case THERAPIST_LOGIN_FAIL:
    case THERAPIST_LOGOUT:
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        therapist: null,
      };

    default:
      return state;
  }
}

export default therapistAuthReducer;
