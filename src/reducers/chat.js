import {
  GET_CONVERSATIONS,
  CONVERSATIONS_ERROR,
  NEW_CONVERSATION,
} from "../actions/types";

const initialState = {
  conversations: [],
  //   article: null,
};

const chat = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };

    case NEW_CONVERSATION:
      return {
        ...state,
        conversations: [payload, ...state.conversations],
      };

    // case GET_ARTICLE:
    //   return {
    //     ...state,
    //     article: payload,
    //   };

    // case ARTICLES_ERROR:
    //   return {
    //     ...state,
    //   };

    // case DELETE_ARTICLE:
    //   return {
    //     ...state,
    //     articles: state.articles.filter((article) => article._id !== payload),
    //   };

    default:
      return state;
  }
};

export default chat;
