import { ADD_REVIEW,REVIEW_ERROR ,GET_REVIEWS, DELETE_REVIEW} from "../actions/types";

const initialState = {
  reviews: [],
  review: null,
};

const review = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };

    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
      };

    
case DELETE_REVIEW:
  return{
    ...state,
  }
    case REVIEW_ERROR:
      return {
        ...state,
      };


    default:
      return state;
  }
};

export default review;
