import {
  THERAPIST_ERROR,
  GET_THERAPIST,
  UPATE_THERAPIST_ERROR,
  UPATE_THERAPIST_DATA,
} from "../actions/types";

const initialState = {
  therapist: null,
  error: null,
  loading_therapist: true,
};

const therapist = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("actttttttion", action);
  switch (type) {
    case GET_THERAPIST:
      console.log("gettherapist");
      return {
        ...state,
        therapist: payload,
      };

    case THERAPIST_ERROR:
      console.log("therapist error");

      return {
        ...state,
      };
    // case UPATE_THERAPIST_DATA:
    //   return {
    //     ...state,
    //     therapist: payload,
    //     loading_therapist: false,
    //   };

    // case UPATE_THERAPIST_ERROR:
    //   return {
    //     ...state,
    //     error: payload,
    //     loading_therapist: false,
    //   };

    default:
      console.log(" defult");

      return state;
  }
};

export default therapist;
