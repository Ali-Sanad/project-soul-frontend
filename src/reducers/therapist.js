import { THERAPIST_ERROR, GET_THERAPIST } from "../actions/types";

const initialState = {
  therapist: null,
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

    default:
      console.log(" defult");

      return state;
  }
};

export default therapist;
