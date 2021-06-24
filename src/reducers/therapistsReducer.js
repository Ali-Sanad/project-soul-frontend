import {
  THERAPISTS_ERROR,
  GET_THERAPISTS,
  GET_THERAPIST,
  THERAPIST_ERROR,
} from '../actions/types';

const initialState = {
  therapists: [],
  oneTherapist: null,
};

const therapists = (state = initialState, action) => {
  const {type, payload} = action;
  console.log('action', action);
  switch (type) {
    case GET_THERAPISTS:
      console.log('gettherapist');
      return {
        ...state,
        therapists: payload,
        // oneTherapist:payload.length
      };
    case GET_THERAPIST:
      console.log('gettherapist');
      return {
        ...state,
        oneTherapist: payload,
      };

    case THERAPIST_ERROR:
      console.log('therapist error');

      return {
        ...state,
      };
    case THERAPISTS_ERROR:
      console.log('therapist error');

      return {
        ...state,
      };

    default:
      console.log(' defult');

      return state;
  }
};

export default therapists;
