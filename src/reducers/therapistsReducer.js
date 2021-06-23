import { THERAPISTS_ERROR, GET_THERAPISTS,GET_THERAPIST } from "../actions/types";

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
      };
      case GET_THERAPIST:
        console.log("gettherapist");
        return {
          ...state,
          oneTherapist: payload,
        };
  
    case THERAPISTS_ERROR:
      console.log("therapist error");

      return {
        ...state,
      };

    default:
      console.log(" defult");

      return state;
  }
};

export default therapists;
