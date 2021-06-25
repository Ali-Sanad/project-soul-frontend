import {
  THERAPISTS_ERROR,
  GET_THERAPISTS,
  GET_THERAPIST,
  THERAPIST_ERROR,
  ADD_THERAPIST_APPOINTMENT,
  UPDATE_THERAPIST_APPOINTMENT,
  DELETE_THERAPIST_APPOINTMENT,
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEW_ERROR,
  ADD_THERAPIST_IMAGE,
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
        oneTherapist: payload,
      };

    case THERAPIST_ERROR:
      return {
        ...state,
      };
    case THERAPISTS_ERROR:
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
        oneTherapist: {...state.oneTherapist, appointments: newAppointments},
      };
    case DELETE_THERAPIST_APPOINTMENT:
      let clonedAppointments = [...state.oneTherapist.appointments];
      clonedAppointments.filter((app) => app._id !== payload);
      return {
        ...state,
        oneTherapist: {...state.oneTherapist, appointments: clonedAppointments},
      };

    case ADD_REVIEW:
      return {
        ...state,
        oneTherapist: [therapists.oneTherapist.reviews],
      };
    case DELETE_REVIEW:
      return {
        ...state,
        oneTherapist: therapists.oneTherapist.reviews.filter(
          (review) => review._id !== payload
        ),
      };
    case REVIEW_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default therapists;
