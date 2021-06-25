import {
  THERAPISTS_ERROR,
  GET_THERAPISTS,
  GET_THERAPIST,
  THERAPIST_ERROR,
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEW_ERROR,
  ADD_THERAPIST_IMAGE,
} from "../actions/types";

const initialState = {
  therapists: [],
  oneTherapist: null,
};

const therapists = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("action", action);
  switch (type) {
    case GET_THERAPISTS:
      console.log("gettherapist");
      return {
        ...state,
        therapists: payload,
        // oneTherapist:payload.length
      };
    case GET_THERAPIST:
      console.log("gettherapist");
      return {
        ...state,
        oneTherapist: payload,
      };
    case ADD_THERAPIST_IMAGE:
      return {
        ...state,
        oneTherapist: payload,
      };

    case THERAPIST_ERROR:
      console.log("therapist error");

      return {
        ...state,
      };
    case THERAPISTS_ERROR:
      console.log("therapist error");

      return {
        ...state,
      };
    case ADD_REVIEW:
      return {
        ...state,
        oneTherapist: [payload, ...state.therapists.oneTherapist.reviews],
      };
    case DELETE_REVIEW:
      return {
        ...state,
        oneTherapist: therapists.oneTherapist.reviewsfilter(
          (review) => review._id !== payload
        ),
      };
    case REVIEW_ERROR:
      return {
        ...state,
      };

    default:
      console.log(" defult");

      return state;
  }
};

export default therapists;
