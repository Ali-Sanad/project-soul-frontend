import {
  THERAPISTS_ERROR,
  GET_THERAPISTS,
  GET_THERAPIST,
  THERAPIST_ERROR,
  ADD_THERAPIST_APPOINTMENT,
  UPDATE_THERAPIST_APPOINTMENT,
  DELETE_THERAPIST_APPOINTMENT,
  THERAPIST_APPOINTMENT_ACTION_FAILED,
  LOAD_THERAPIST_APPOINTMENT_BY_ID,
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEW_ERROR,
  ADD_THERAPIST_IMAGE,
} from "../actions/types";

const initialState = {
  therapists: [],
  oneTherapist: null,
  oneAppointment: null,
};

const therapists = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_THERAPISTS:
      return {
        ...state,
        therapists: payload,
        // oneTherapist:payload.length
      };
    case GET_THERAPIST:
      return {
        ...state,
        oneTherapist: payload,
      };
    case ADD_THERAPIST_IMAGE:
      return {
        ...state,
      };

    case ADD_THERAPIST_APPOINTMENT:
      let updatedAppointments = [...state.oneTherapist.appointments];
      updatedAppointments.unshift(payload);
      return {
        ...state,
        oneTherapist: {
          ...state.oneTherapist,
          appointments: updatedAppointments,
        },
      };
    case UPDATE_THERAPIST_APPOINTMENT:
      let newAppointments = [...state.oneTherapist.appointments];
      newAppointments.map((app) => (app._id === payload._id ? payload : app));
      return {
        ...state,
        oneTherapist: { ...state.oneTherapist, appointments: newAppointments },
      };
    case DELETE_THERAPIST_APPOINTMENT:
      let clonedAppointments = [...state.oneTherapist.appointments];
      clonedAppointments.filter((app) => app._id !== payload);
      return {
        ...state,
        oneTherapist: {
          ...state.oneTherapist,
          appointments: clonedAppointments,
        },
      };
    case THERAPIST_APPOINTMENT_ACTION_FAILED:
      return {
        ...state,
      };
    case LOAD_THERAPIST_APPOINTMENT_BY_ID:
      let therapistAppointments = [...state.oneTherapist.appointments];
      let loadedAppointment = therapistAppointments.filter(
        (app) => app._id === payload
      );
      return {
        ...state,
        oneAppointment: loadedAppointment[0],
      };

    case ADD_REVIEW:
      let updatedReviews = [...state.oneTherapist.reviews];
      updatedReviews.unshift(payload);
      return {
        ...state,
        oneTherapist: {
          ...state.oneTherapist,
          reviews: updatedReviews,
        },
        //  oneTherapist: [therapists.oneTherapist.reviews],

        // oneTherapist: payload,
      };
    case DELETE_REVIEW:
      let clonedReviews = [...state.oneTherapist.reviews];
      clonedReviews.filter((rev) => rev._id !== payload);
      return {
        ...state,
        oneTherapist: {
          ...state.oneTherapist,
          reviews: clonedReviews,
        },
      };
    case REVIEW_ERROR:
      return {
        ...state,
      };
    case THERAPIST_ERROR:
      return {
        ...state,
      };
    case THERAPISTS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default therapists;
