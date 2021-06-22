import {
  //THERAPIST_GET_PROFILE,
  THERAPIST_UPDATE_PROFILE,
  THERAPIST_PROFILE_ERROR,
} from './../actions/types';

const initialState = {
  therapistProfile: null,
  therapistProfiles: [],
  repos: [],
  loading_therapist: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //  case THERAPIST_GET_PROFILE:
    case THERAPIST_UPDATE_PROFILE:
      return {
        ...state,
        therapistProfile: payload,
        loading_therapist: false,
      };

    case THERAPIST_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading_therapist: false,
      };
    // case THERAPIST_CLEAR_PROFILE:
    //   return {
    //     ...state,
    //     therapistProfile: null,
    //     repos: [],
    //     loading: false,
    //   };
    default:
      return state;
  }
}
